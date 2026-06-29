import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import SectionWrapper from "@/components/shared/SectionWrapper";
import ContactInfo from "@/components/contact/ContactInfo";
import EnquiryForm from "@/components/contact/EnquiryForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Reach out to Linen Mantra for fabric sourcing enquiries, custom development, export pricing, or sampling requests. We respond within 1–2 business days.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact Us"
        heading="Start a Conversation"
        subText="Tell us what you're looking for. Our team will respond with the detail and clarity your sourcing decisions deserve."
        image="/images/contactus/contactupherobanner.png"
      />

      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          {/* Left — contact details */}
          <ContactInfo />

          {/* Right — enquiry form */}
          <EnquiryForm />
        </div>
      </SectionWrapper>
    </>
  );
}
