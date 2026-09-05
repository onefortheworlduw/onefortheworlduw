import { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the One for the World UW-Madison team. Have questions about our events, membership, or the 1% pledge? Reach out to us today.",
  alternates: {
    canonical: "/contact",
  },
  keywords: [
    "Contact One for the World UW",
    "UW Madison student philanthropy contact",
    "One for the World Madison email",
    "OFTW UW Madison chapter contact",
  ],
  openGraph: {
    title: "Contact Us | One For The World UW-Madison",
    description:
      "Get in touch with the One for the World UW-Madison team. Connect with our student leaders and learn about effective giving.",
    url: "https://onefortheworlduw.github.io/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Banner */}
      <section className="relative min-h-[40vh] flex items-center justify-center text-center px-4 bg-black overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="/images/contactpage-image.webp"
            alt="UW-Madison Campus"
            fill
            priority
            sizes="100vw"
            quality={80}
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60 z-10" />

        <div className="relative z-20 max-w-3xl mx-auto py-12">
          <h1 className="font-heading text-5xl sm:text-7xl uppercase tracking-wide text-white">
            CONTACT US
          </h1>
          <p className="text-neutral-300 text-base sm:text-lg max-w-xl mx-auto mt-3">
            Have questions about One for the World, our events, or how to get involved?
            We&apos;d love to connect.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <ContactForm />
      </section>
    </div>
  );
}
