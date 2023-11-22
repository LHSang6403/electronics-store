"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "../../shadcn-custom/button-custom";
import { CommandGroup, CommandItem } from "@/components/ui/command";
import { PopoverTrigger } from "@/components/ui/popover";
import { PopoverContent } from "../../shadcn-custom/popover-content-custom";
import { Popover } from "../../shadcn-custom/popover-custom";
import { Command } from "../../shadcn-custom/command-custom";

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

interface ComboboxProps {
  data: {
    title: string;
  };
}

export default function Combobox({ data }: ComboboxProps): JSX.Element {
  const { title } = data;
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState<string>("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-fit justify-between"
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
