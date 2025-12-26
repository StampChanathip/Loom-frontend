import { ChangeEventHandler, FocusEventHandler } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type TextInputProps = {
  label?: string;
  placeHolder?: string;
  type: string;
  value: string | number | readonly string[] | undefined;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  onBlur?: FocusEventHandler<HTMLInputElement> | undefined;
  errorMessage?: string;
};

export default function TextInput({
  label,
  placeHolder,
  type,
  value,
  onChange,
  onBlur,
  errorMessage,
}: TextInputProps) {
  return (
    <div className="w-full">
      {label && <Label className="w-full mb-2">{label}</Label>}
      <Input
        type={type}
        className="w-full"
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        aria-invalid={!!errorMessage}
      />
      {errorMessage && (
        <p className="text-destructive text-sm mt-1">{errorMessage}</p>
      )}
    </div>
  );
}
