"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


type props = {
  width?: string,
  height?: string,
  options: any[],
  disabled?: boolean,
  loading?: boolean,
  value?: string,
  onSelect?: (value: any) => void
}
export function Combobox({ width, height, options, value, loading, disabled, onSelect }: props) {
  const [open, setOpen] = React.useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen} modal={true}>
      <PopoverTrigger asChild>
        <Button
          disabled={disabled}
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "justify-between",
            width ? width : "w-[200px]"
          )}
        >
          {value
            ? options.find((option) => option.value === value)?.label
            : "Chọn"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className={cn(
        "p-0",
        width ? width : "w-[200px]"
      )}>
        <Command>
          <CommandInput placeholder="Tìm kiếm..." />
          <CommandList>
            {loading ? <>Đang tải dữ liệu</> :
              <>
                <CommandEmpty>Không có dữ liệu</CommandEmpty>
                <CommandGroup>
                  {options.map((option) => (
                    <CommandItem
                      key={option.value}
                      value={option.value}
                      keywords={[option.label]}
                      onSelect={(currentValue) => {
                        onSelect && onSelect(currentValue)
                        // setValue(currentValue === value ? "" : currentValue)
                        setOpen(false)
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          value === option.value ? "opacity-100" : "opacity-0"
                        )}
                      />
                      {option.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </>}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
