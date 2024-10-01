import { systemSettingAtom } from "@/atoms/system-setting-atom";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { toast } from "@/components/ui/use-toast";
import { useAministrativeDivisionProvinceId } from "@/hooks/query/use-aministrative-division";
import { useExam, useExamId } from "@/hooks/query/use-exam";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { useAtom } from "jotai";
import { useReducer, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FileUploader } from "./file-uploader";
import { useSchool, useSchoolId } from "@/hooks/query/use-school";
import { Combobox } from "@/components/ui/combobox";
import { SchoolType } from "@/api";
type props = {
    open: boolean,
    setOpen: (value: boolean) => void;
}
export function ImportRegistration({ open, setOpen }: props) {
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
        images: z.array(z.instanceof(File)).nonempty("Không được để trống"),
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            images: [],
            // items: ["recents", "home"],
        },
    })


    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.

        console.log(values)
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(values, null, 2)}</code>
                </pre>
            ),
        })
    }

    function isRequired(schema: any, key: string) {
        const field = schema.shape[key];

        // Kiểm tra xem field có `optional` hay không
        return !(field instanceof z.ZodOptional);
    }

    console.log('render')

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
                                Để dự thi vòng thi trải nghiệm quý trường vui lòng đăng ký theo các thông tin dưới đây
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
                                name="images"
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