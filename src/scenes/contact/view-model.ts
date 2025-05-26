import {
  ContactViewModelInitProps as ViewModelInitProps,
  ContactViewModelProps as ViewModelProps,
} from "./props";
import emailjs from "@emailjs/browser";

const useContactViewModel: (
  props: ViewModelInitProps,
) => ViewModelProps = () => {
  const sendEmail = async (formData: {
    fullName: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
  }) => {
    try {
      const templateParams = {
        from_name: formData.fullName,
        user_email: formData.email,
        reply_to: formData.email,
        phone: formData.phone || "Not provided",
        subject: formData.subject,
        message: formData.message,
      };

      await emailjs.send(
        "service_u4ai4eb",
        "template_x92jl3z",
        templateParams,
        "WTYG-lZAifFRnGgJ4",
      );

      return { success: true };
    } catch (error) {
      console.error("Email sending failed:", error);
      return { success: false, error };
    }
  };

  return { sendEmail };
};

export default useContactViewModel;
