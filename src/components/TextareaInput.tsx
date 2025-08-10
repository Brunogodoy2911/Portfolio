import type { ComponentProps } from "react";
import type { Control } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Textarea } from "./ui/textarea";

interface FormTextareaProps extends ComponentProps<"textarea"> {
  control: Control<any>;
  name: string;
  label: string;
}

export function TextareaInput({
  control,
  name,
  label,
  ...rest
}: FormTextareaProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="space-y-2 w-full">
          <FormLabel>
            {" "}
            <h1 className="text-lg">{label}</h1>
          </FormLabel>
          <FormControl>
            <Textarea
              {...field}
              {...rest}
              className="border-gray-300 resize-none h-25"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
