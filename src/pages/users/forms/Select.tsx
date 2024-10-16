import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

type FormSelectCompanyProps = {
  setGender: React.Dispatch<React.SetStateAction<string>>;
  gender: string;
};

export const FormSelectCompany: React.FC<FormSelectCompanyProps> = ({ setGender, gender }) => {
  return (
    <Select onValueChange={setGender} value={gender}> {/* Menggunakan value untuk menampilkan pilihan yang dipilih */}
      <SelectTrigger className="w-full">
        <SelectValue><p className="capitalize">{gender || "Gender"}</p></SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="male">Male</SelectItem>
          <SelectItem value="female">Female</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
