"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@utils/utils";
import { Button } from "@components/ui-shadcn-custom/button-custom";
import { CommandGroup, CommandItem } from "@/components/ui-shadcn/command";
import { PopoverTrigger } from "@/components/ui-shadcn/popover";
import { PopoverContent } from "@components/ui-shadcn-custom/popover-content-custom";
import { Popover } from "@components/ui-shadcn-custom/popover-custom";
import { Command } from "@components/ui-shadcn-custom/command-custom";

const frameworks = [
  {
    value: "all",
    label: "All",
  },
  {
    value: "switch",
    label: "Switch",
  },
  {
    value: "motor",
    label: "Motor",
  },
  {
    value: "circuit",
    label: "Circuit",
  },
  {
    value: "toolkit",
    label: "Toolkit",
  },
  {
    value: "gauges",
    label: "Gauges",
  },
  {
    value: "fan",
    label: "Fan",
  },
  {
    value: "light",
    label: "Light",
  },
];

export default function Combobox({ title }: { title: string }): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState<string>("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-fit justify-between mx-1 my-0.5"
        >
          {value === null
            ? frameworks.find((framework) => framework.value === value)?.label
            : title}
          <ChevronsUpDown className="h-4 w-4 ml-2 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[180px] mx-2">
        <Command>
          <CommandGroup>
            {frameworks.map((framework) => (
              <CommandItem
                key={framework.value}
                value={framework.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === framework.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {framework.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
