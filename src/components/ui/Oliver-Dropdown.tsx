import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import React from "react";

interface OliverDropDownProps {
  options: { label: string; value: string }[];
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const OliverDropDown: React.FC<OliverDropDownProps> = ({
  options,
  placeholder = "Select",
  value,
  onChange,
}) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="bg-[#96C7FF] h-[60px] w-[282px] rounded-full outline-none cursor-pointer">
        <SelectValue placeholder={placeholder} className="placeholder:px-2"/>
      </SelectTrigger>
      <SelectContent className="bg-white w-[282px]">
        {options.map((option) => (
          <SelectItem className="text-base font-medium text-[#0C2661] leading-[150%] cursor-pointer" key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default OliverDropDown;
