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
};

export const FormSelectCompany: React.FC<FormSelectCompanyProps> = ({ setGender }) => {
  return (
      <Select onValueChange={setGender}> {/* Menggunakan onValueChange untuk memperbarui state */}
          <SelectTrigger className="w-full">
              <SelectValue placeholder="Gender" /> {/* Anda bisa menampilkan gender terpilih di sini */}
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
