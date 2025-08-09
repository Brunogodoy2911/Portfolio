import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { PUBLIC_KEY, SERVICE_ID_OUTLOOK, TEMPLATE_ID } from "@/utils/keys";
import { toast } from "sonner";
import { FormInput } from "./FormInput";
import { TextareaInput } from "./TextareaInput";
import { Button } from "./ui/button";
import { Spinner } from "phosphor-react";
import { Form } from "./ui/form";

const formSchema = z.object({
  name: z
    .string()
    .min(3, { message: "O nome deve ter no mínimo 3 caracteres." }),
  email: z.string().email({ message: "Por favor, insira um email válido." }),
  subject: z
    .string()
    .min(5, { message: "O assunto deve ter no mínimo 5 caracteres." }),
  message: z
    .string()
    .min(10, { message: "A mensagem deve ter no mínimo 10 caracteres." }),
});

export function FormContact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    const templateParams = {
      from_name: data.name,
      reply_to: data.email,
      subject: data.subject,
      message: data.message,
    };

    try {
      await emailjs.send(
        SERVICE_ID_OUTLOOK,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      toast.success("Mensagem enviada com sucesso!", {
        duration: 4000,
        description:
          "Sua mensagem foi enviada com sucesso. Agradeço o contato e retornarei em breve.",
      });
      form.reset();
    } catch (e) {
      toast.error("Erro ao enviar a mensagem.", {
        duration: 4000,
        description: "Por favor, tente novamente mais tarde.",
      });
      console.error("Erro ao enviar email:", e);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full max-w-5xl flex-col gap-6 rounded-lg bg-card p-6 shadow-sm md:p-8"
      >
        <div className="flex flex-col gap-6 md:flex-row">
          <FormInput
            control={form.control}
            name="name"
            label="Nome Completo"
            placeholder="Digite seu nome completo..."
          />
          <FormInput
            control={form.control}
            name="email"
            label="Email"
            placeholder="Digite seu email..."
          />
        </div>

        <FormInput
          control={form.control}
          name="subject"
          label="Assunto"
          placeholder="Digite o assunto..."
        />

        <TextareaInput
          control={form.control}
          name="message"
          label="Mensagem"
          placeholder="Digite sua mensagem..."
        />

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <Spinner className="animate-spin size-6" />
          ) : (
            "Enviar"
          )}
        </Button>
      </form>
    </Form>
  );
}
