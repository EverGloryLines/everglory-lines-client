"use client";

import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

export function ContactMap() {
  const mapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.2345678901234!2d90.40461!3d23.7937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ3JzM3LjMiTiA5MMKwMjQnMTYuNiJF!5e0!3m2!1sen!2sbd!4v1234567890";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative w-full h-[60vh] md:h-[60vh]"
    >
      <iframe
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full"
      />
      <a
        href={`https://www.google.com/maps/search/Suite+7A,+6th+Floor,+22+Kemal+Ataturk+Avenue,+Banani,+Dhaka-1212`}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 left-4 bg-white text-[#1e5ba8] px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center gap-2 text-sm font-medium"
      >
        <ExternalLink className="w-4 h-4" />
        View larger map
      </a>
    </motion.div>
  );
}
