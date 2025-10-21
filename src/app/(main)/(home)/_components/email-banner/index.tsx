import Image from "next/image";
import React from "react";

export function EmailBanner() {
  return (
    <div className="w-full max-w-6xl flex items-center justify-center mx-auto px-4 py-8 md:py-12 lg:py-24">
      <Image src="/about/email/email-banner.jpg" alt="Email Banner" width={800} height={500} className="md:min-w-3xl lg:min-w-5xl xl:min-w-6xl min-h-[250px] md:min-h-[400px] border rounded-none border-border shadow-md" />
    </div>
  );
}
