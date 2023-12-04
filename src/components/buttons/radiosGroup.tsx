import { Label } from "@/@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "../ui_shadcn/radio-group-custom";

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
          <div key={`radio-${index}`} className="flex items-center space-x-2">
            <RadioGroupItem value={item.name} id={`r${index}`} />

            <img
              className="w-6 object-cover rounded-lg"
              alt={`icon-${index}`}
              src={item.icon}
            ></img>
            <Label htmlFor={`r${index}`}>{item.name}</Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}
