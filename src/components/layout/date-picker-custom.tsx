import { format, isValid, parse } from "date-fns"
import { useEffect, useState } from "react"
import { FormItem, FormLabel } from "../ui/form"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"
import { CalendarIcon } from "lucide-react"
import { Calendar } from "../ui/calendar"
import { Input } from "../ui/input"
import { CalendarCustom } from "./CalendarCustom"

interface DatePickerProps {
    label: string
    value: string
    onChange: (value: Date | undefined) => void
    errorMessage?: string
}

const DatePickerCustom = ({ label, value, onChange, errorMessage }: DatePickerProps) => {
    const [stringDate, setStringDate] = useState<string>(value)
    const [date, setDate] = useState<Date | undefined>(undefined)
    const [inputError, setInputError] = useState<string>("")

    const handleDateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        let inputValue = e.target.value.replace(/\D/g, '')

        if (inputValue.length > 2) {
            inputValue = inputValue.slice(0, 2) + '/' + inputValue.slice(2)
        }
        if (inputValue.length > 5) {
            inputValue = inputValue.slice(0, 5) + '/' + inputValue.slice(5)
        }

        setStringDate(inputValue)

        const parsedDate = parse(inputValue, "dd/MM/yyyy", new Date())
        if (!isValid(parsedDate)) {
            //setErrorMessage("Invalid Date")
            setDate(undefined)
        } else {
            //setErrorMessage("")
            setDate(parsedDate)
        }
    }

    useEffect(() => {
        if (value) {
            setStringDate(value)
            const parsedDate = parse(value, 'dd/MM/yyyy', new Date())
            if (isValid(parsedDate)) {
                setDate(parsedDate)
            }
        }
    }, [value])

    return (
        <FormItem className="flex flex-col">
            <FormLabel>{label}</FormLabel>
            <Popover>
                <div className="relative w-[280px]">
                    <Input
                        type="text"
                        value={stringDate}
                        onChange={handleDateInput}
                        onBlur={() => onChange(date)}
                        placeholder="DD/MM/YYYY"
                        maxLength={10}
                    />
                    {inputError && (
                        <div className="absolute bottom-[-1.75rem] left-0 text-red-400 text-sm">
                            {inputError || errorMessage}
                        </div>
                    )}
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            className={cn(
                                'font-normal absolute right-0 translate-y-[-50%] top-[50%] rounded-l-none',
                                !date && 'text-muted-foreground'
                            )}
                        >
                            <CalendarIcon className="w-4 h-4" />
                        </Button>
                    </PopoverTrigger>
                </div>
                <PopoverContent className="w-auto p-0 bg-white dark:bg-boxdark">
                    {/* <Calendar
                        mode="single"
                        selected={date}
                        onSelect={(selectedDate) => {
                            if (!selectedDate) return
                            setDate(selectedDate)
                            setStringDate(format(selectedDate, 'dd/MM/yyyy'))
                            onChange(selectedDate)
                            setInputError('')
                        }}
                        defaultMonth={date}
                        initialFocus
                    /> */}
                    <CalendarCustom
                        mode="single"
                        captionLayout="dropdown"
                        selected={date}
                        onSelect={(selectedDate: any) => {
                            if (!selectedDate) return
                            setDate(selectedDate)
                            setStringDate(format(selectedDate, 'dd/MM/yyyy'))
                            onChange(selectedDate)
                            setInputError('')
                        }}
                        // onDayClick={() => setIsOpen(false)}
                        fromYear={2000}
                        toYear={new Date().getFullYear()}
                    // disabled={(date:any) =>
                    //   Number(date) < Date.now() - 1000 * 60 * 60 * 24 ||
                    //   Number(date) > Date.now() + 1000 * 60 * 60 * 24 * 30
                    // }
                    />
                </PopoverContent>
            </Popover>
        </FormItem>
    )
}

export default DatePickerCustom