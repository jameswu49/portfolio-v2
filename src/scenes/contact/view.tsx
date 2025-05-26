import React from "react";
import { ContactViewProps as ViewProps } from "./props";
import { IconTab } from "@/components/custom/icon-tab";
import { MailIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .regex(/^\d*$/, "Phone number must contain only digits")
    .optional(),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

const ContactView = ({ viewModel }: ViewProps) => {
  const { sendEmail } = viewModel;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const result = await sendEmail(data);
      if (result.success) {
        toast.success("Message sent successfully!", {
          duration: 5000,
        });
        reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error: unknown) {
      console.error("Form submission error:", error);
      toast.error("Failed to send message", {
        description:
          "Please try again or contact me directly at jameswu49@gmail.com",
        duration: 5000,
      });
    }
  };

  return (
    <div className="text-white">
      <IconTab icon={MailIcon} label="Contact" />
      <div className="space-y-10 xl:space-y-20">
        <div>
          <h1 className="text-5xl font-bold text-center xl:text-start">
            Let&apos;s <span className="text-primary-foreground">Connect</span>
          </h1>
          <h2 className="text-2xl opacity-50 mt-5 xl:mt-10 text-center xl:text-start">
            jameswu49@gmail.com
          </h2>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 max-w-2xl mx-5 md:mx-auto xl:mx-0"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Input
                {...register("fullName")}
                label="Full Name"
                placeholder="Enter Your Name Here"
                className="bg-transparent border-white/20 focus:border-primary-foreground"
                required
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Input
                {...register("email")}
                label="Email"
                type="email"
                placeholder="Email"
                className="bg-transparent border-white/20 focus:border-primary-foreground"
                required
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Input
                {...register("phone")}
                label="Phone Number (Optional)"
                type="tel"
                placeholder="Enter Your Phone Number Here"
                className="bg-transparent border-white/20 focus:border-primary-foreground"
                onKeyPress={(e) => {
                  if (!/[0-9]/.test(e.key)) {
                    e.preventDefault();
                  }
                }}
                inputMode="numeric"
                pattern="[0-9]*"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Input
                {...register("subject")}
                label="Subject"
                placeholder="Subject"
                className="bg-transparent border-white/20 focus:border-primary-foreground"
                required
              />
              {errors.subject && (
                <p className="text-red-500 text-sm">{errors.subject.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-lg pl-3">
              Message
            </label>
            <div className="flex flex-col xl:flex-row items-end gap-8">
              <Textarea
                {...register("message")}
                placeholder="Write a message here..."
                className="min-h-[150px] max-h-[200px] bg-transparent border-b-2 border-white/20 placeholder:text-xl placeholder:text-muted-foreground focus:border-primary-foreground"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto bg-primary-foreground cursor-pointer text-black hover:bg-primary-foreground/90 rounded-full text-lg px-4"
              >
                {isSubmitting ? "Sending..." : "SEND"}
              </Button>
            </div>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactView;
