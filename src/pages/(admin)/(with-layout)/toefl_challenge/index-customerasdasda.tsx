import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import DatePickerCustom from "@/components/layout/date-picker-custom"
import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import { DateTimePickerV2 } from "@/components/layout/date-picker-customv2"
export const Component = ({ tours }: { tours: string[] }) => {
  const formSchema = z.object({
    startDay: z.date({ required_error: 'Start day is required.' }).nullable(),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      startDay: undefined,
    },
  })

  const { setValue, handleSubmit } = form
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values)
  }

  return (

    <>
      <Form {...form} >
        <form onSubmit={handleSubmit(onSubmit)} className="col-span-12 lg:col-span-6 space-y-8">
          <FormField
            control={form.control}
            name="startDay"
            render={({ field }) => (
              <FormItem className="">
                <DatePickerCustom
                  label="Start Day"
                  value={field.value ? format(field.value, "dd/MM/yyyy") : ""}
                  onChange={(date) => {
                    setValue('startDay', date ?? null)
                  }}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="col-span-12">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Form >
      <h2 className="text-xl font-bold mt-10">Datetime Picker V2</h2>
      <DateTimePickerV2 />
    </>
  )
}
