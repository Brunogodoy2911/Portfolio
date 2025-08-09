import type { ComponentProps } from "react";
import type { Control } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";

interface FormInputProps extends ComponentProps<"input"> {
  control: Control<any>;
  name: string;
  label: string;
}

export function FormInput({
  control,
  name,
  label,
  type,
  ...rest
}: FormInputProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="space-y-2 w-full">
          <FormLabel>
            <h1 className="text-lg">{label}</h1>
          </FormLabel>
          <FormControl>
            <Input
              {...field}
              {...rest}
              type={type}
              className={cn(
                "h-12 w-full border-1 border-gray-300 rounded-lg bg-transparent p-3 shadow-none outline-none ring-offset-0",
                "focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              )}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
