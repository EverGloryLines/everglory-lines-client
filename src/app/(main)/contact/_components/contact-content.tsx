"use client";

import { ContactForm } from "./contact-form";
import { ContactInfo } from "./contact-info";



export function ContactContent() {
  return (
    <div className="relative -mt-32 pb-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
