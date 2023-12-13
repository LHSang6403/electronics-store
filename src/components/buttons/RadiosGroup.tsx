import { Label } from "@/components/ui-shadcn/ui/label";
import {
  RadioGroup,
  RadioGroupItem,
} from "../ui-shadcn-custom/radio-group-custom";
import Image from "next/image";

export interface Option {
  name: string;
  icon: string;
}

interface RadiosGroupProps {
  options: Option[];
}

export default function RadiosGroup({
  options,
}: RadiosGroupProps): JSX.Element {
  return (
    <div className="w-fit h-fit">
      <RadioGroup defaultValue="default">
        {options.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <RadioGroupItem value={item.name} id={`r${index}`} />
            <div className="w-6 object-cover rounded-lg overflow-hidden">
              <Image
                src={item.icon}
                alt={`Icon ${index}`}
                width={30}
                height={30}
              />
            </div>
            <Label htmlFor={`r${index}`}>{item.name}</Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}
