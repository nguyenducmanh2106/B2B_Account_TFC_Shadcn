import { Code, SchoolType, type ResponseData } from "@/api";
import { getRegistration5 } from "@/api/services/RegistrationService";
import { systemSettingAtom } from "@/atoms/system-setting-atom";
import { Button } from "@/components/ui/button";
import { Combobox } from "@/components/ui/combobox";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useAministrativeDivisionProvinceId } from "@/hooks/query/use-aministrative-division";
import { useExam, useExamId } from "@/hooks/query/use-exam";
import { useImportRegistrationMutation } from "@/hooks/query/use-registration";
import { useSchool, useSchoolId } from "@/hooks/query/use-school";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAtom } from "jotai";
import { useReducer } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { z } from "zod";
import { FileUploader } from "./file-uploader";
import { Files } from "lucide-react";
type props = {
    open: boolean,
    setOpen: (value: boolean) => void;
}
export function ImportRegistration({ open, setOpen }: props) {
    const { t } = useTranslation()

    const examTypes = [
        { value: '', label: '-Chọn-', },
        { value: '0', label: 'Primary', },
        { value: '1', label: 'Junior', },
        { value: '2', label: 'ITP', },
    ] as const
    const initState = {
        examTypes: examTypes
    };
    const [systemSettings, setSytemSettings] = useAtom(systemSettingAtom);
    const filter = {
        status: 1,
        year: systemSettings?.currentExamYear,
    }
    const exams = useExam(JSON.stringify(filter))



    const [state, dispatch] = useReducer<(prevState: any, updatedProperty: any) => any>(
        (prevState: any, updatedProperty: any) => ({
            ...prevState,
            ...updatedProperty,
        }),
        initState,
    );

    const formSchema = z.object({
        // username: z.string().min(2).max(50),
        // items: z.array(z.string()).refine((value) => value.some(Boolean), {
        //     message: "You have to select at least one item.",
        // }),
        schoolId: z.string({
            required_error: "Không được để trống",
        }),
        provinceId: z.string({
            required_error: "Không được để trống",
        }),
        districtId: z.string({
            required_error: "Không được để trống",
        }),
        examId: z.string({
            required_error: "Không được để trống",
        }),

        examType: z.string({
            required_error: "Không được để trống",
        }),
        files: z.array(z.instanceof(File)).nonempty("Không được để trống"),
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            files: [],
            // items: ["recents", "home"],
        },
    })


    const importMutation = useImportRegistrationMutation()
    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.

        console.log(values)
        const obj = {
            ...values,
            file: values?.files?.length > 0 ? values.files[0] : undefined
        }
        toast.promise(importMutation.mutateAsync(obj), {
            position: "top-center",
            loading: t("login.loading"),
            duration: 7000,
            success: (response: ResponseData) => {
                if (response.code === Code._200) {
                    // return t("login.login_successful")
                    const data = response.data ?? {} as any
                    setOpen(false)
                    return (
                        <div className="flex flex-col">
                            <span>{t('error.total')}: {data.Total}</span>
                            <span className="text-[#52c41a]">{t('error.valid')}: {data.Valid}</span>
                            <span className="text-[#faad14]">{t('error.duplicate')}: {data.Duplicate}</span>
                            <span className="text-[#ff4d4f]">{t('error.invalid')}: {data.Invalid}</span>
                        </div>
                    )
                }
                throw new Error(response.message ?? "Import thất bại")
            },
            error: (ex: Error) => {
                return ex.message
            },
        })
    }

    function isRequired(schema: any, key: string) {
        const field = schema.shape[key];

        // Kiểm tra xem field có `optional` hay không
        return !(field instanceof z.ZodOptional);
    }


    const examId = useExamId(form.getValues("examId"))

    const provinceId = useAministrativeDivisionProvinceId(form.getValues("provinceId"))

    const schools = useSchool(form.getValues("provinceId"), form.getValues("districtId"))

    const schoolId = useSchoolId(form.getValues("schoolId"))
    if (schoolId && schoolId.isFetched) {
        switch (schoolId.data?.schoolType) {
            case SchoolType._0:
            case SchoolType._1:
            case SchoolType._2:
                form.setValue('examType', schoolId.data?.schoolType.toString());
                break;
            case SchoolType._3:
                // setDisableExamType(false);
                break;
            default:
                break;
        }
    }

    const downloadFileTemplate = async () => {
        const examId = form.getValues("examId")
        if (!examId) {
            toast("Chưa có cuộc thi", {
                // description: "Sunday, December 03, 2023 at 9:00 AM",
                position: "top-center",
            })
            return;
        } else {
            const response = await getRegistration5(examId);
            if (response.code === Code._200) {
                const { base64: base64Data, extention, name } = response.data as any
                // Tạo một đối tượng Blob từ dữ liệu base64
                // const blob = new Blob(["data:application/octet-stream;base64," + base64Data], { type: 'application/octet-stream' });

                fetch("data:application/octet-stream;base64," + base64Data).then(e => e.blob()).then(blob => {
                    // Tạo một URL tạm thời từ Blob
                    const url = URL.createObjectURL(blob);

                    // Tạo một liên kết tải
                    const a = document.createElement('a');
                    a.style.display = 'none';
                    a.href = url;
                    a.download = name + extention; // Đặt tên tệp tải về ở đây

                    // Thêm liên kết vào DOM và kích hoạt sự kiện click
                    document.body.appendChild(a);
                    a.click();

                    // Xóa liên kết sau khi tải xong
                    document.body.removeChild(a);
                })
            } else {
                // message.error(response.message || "Thất bại")
            }
        }
    };

    return (
        <Form {...form}>
            <Dialog
                open={open}
                onOpenChange={setOpen}
            >

                {/* <DialogTrigger asChild>
                    <Button variant="outline">Đăng ký thi</Button>
                </DialogTrigger> */}
                <DialogContent className="sm:max-w-[600px]">
                    <form
                        id='form-submit'
                        onSubmit={form.handleSubmit(onSubmit)}
                        // className="w-2/3 space-y-8"
                        className="space-y-8"
                    >
                        <DialogHeader>
                            <DialogTitle>Đăng ký thi</DialogTitle>
                            <DialogDescription>
                                Để dự thi vòng thi trải nghiệm quý trường vui lòng đăng ký theo các thông tin dưới đây<br />
                                <span className="cursor-pointer text-[#1890ff]" onClick={downloadFileTemplate}>Tải mẫu file</span>
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4 max-h-[400px] sm:max-h-[600px] overflow-y-auto overflow-x-hidden">

                            <FormField
                                control={form.control}
                                name="examId"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col">
                                        <FormLabel>Cuộc thi<span className={isRequired(formSchema, "examId") ? 'form-required-icon' : ''} /></FormLabel>
                                        <Combobox
                                            width="100%"
                                            options={exams.data as any} loading={exams.isFetching}
                                            value={field.value}
                                            onSelect={(value) => {
                                                form.setValue("examId", value ?? "")
                                                // form.setValue("provinceId","")
                                                form.resetField("provinceId")
                                                form.resetField("districtId")
                                                form.resetField("schoolId")
                                                form.resetField("examType")
                                            }}
                                        />
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="provinceId"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col">
                                        <FormLabel>Tỉnh/Thành phố<span className={isRequired(formSchema, "provinceId") ? 'form-required-icon' : ''} /></FormLabel>
                                        <Combobox width="100%"
                                            options={(examId?.data?.provinces?.map(item => ({ value: item.id, label: item.name })) ?? []) as any}
                                            loading={examId.isFetching}
                                            value={field.value}
                                            onSelect={(value) => {
                                                form.setValue("provinceId", value ?? "")
                                                form.resetField("districtId")
                                                form.resetField("schoolId")
                                                form.resetField("examType")
                                            }}
                                        />
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="districtId"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col">
                                        <FormLabel>Quận/Huyện<span className={isRequired(formSchema, "districtId") ? 'form-required-icon' : ''} /></FormLabel>
                                        <Combobox width="100%"
                                            options={(provinceId?.data?.districts?.map(item => ({ value: item.id, label: item.name })) ?? []) as any}
                                            loading={provinceId.isFetching}
                                            value={field.value}
                                            onSelect={(value) => {
                                                form.setValue("districtId", value ?? "")
                                                form.resetField("schoolId")
                                                form.resetField("examType")
                                            }}
                                        />
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="schoolId"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col">
                                        <FormLabel>Trường học<span className={isRequired(formSchema, "schoolId") ? 'form-required-icon' : ''} /></FormLabel>
                                        <Combobox width="100%"
                                            options={(schools?.data?.map(item => ({ value: item.id, label: item.name })) ?? []) as any}
                                            loading={schools.isFetching}
                                            value={field.value}
                                            onSelect={(value) => {
                                                form.setValue("schoolId", value ?? "")
                                                form.resetField("examType")
                                            }}
                                        />
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="examType"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col">
                                        <FormLabel>Bài thi đăng ký<span className={isRequired(formSchema, "schoolId") ? 'form-required-icon' : ''} /></FormLabel>
                                        <Combobox width="100%"
                                            disabled={schoolId?.data?.schoolType != SchoolType._3}
                                            options={state.examTypes as any}
                                            value={field.value}
                                        />
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="files"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Chọn file tải lên<span className='form-required-icon' /></FormLabel>
                                        <FormControl>
                                            {/* <Input placeholder="shadcn" {...field} type="file" /> */}
                                            <FileUploader
                                                accept={{
                                                    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [],
                                                    'application/vnd.ms-excel': []
                                                }}
                                                value={field.value}
                                                onValueChange={field.onChange}
                                                maxFileCount={1}
                                                maxSize={4 * 1024 * 1024}
                                            // progresses={progresses}
                                            // pass the onUpload function here for direct upload
                                            // onUpload={uploadFiles}
                                            // disabled={isUploading}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                        </div>
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button type="button" variant="secondary">
                                    Đóng
                                </Button>
                            </DialogClose>
                            <Button
                                // form="form-submit"
                                type="submit">Lưu</Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </Form>
    )
}