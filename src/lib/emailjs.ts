// EmailJS configuration
// Replace these with actual EmailJS credentials from emailjs.com
export const EMAILJS_CONFIG = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_placeholder",
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_placeholder",
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "key_placeholder",
};

export type EnquiryFormData = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
};
