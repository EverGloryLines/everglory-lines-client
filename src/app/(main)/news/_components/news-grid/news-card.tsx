"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import type { NewsCard as NewsCardType } from "@/data/news-page-data";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface NewsCardProps {
  card: NewsCardType;
  index: number;
}

export function NewsCard({ card, index }: NewsCardProps) {
  const isHighlight = card.variant === "highlight";

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "group relative h-[400px] overflow-hidden rounded-lg",
        isHighlight ? "bg-[#D4C194]" : "bg-gray-900"
      )}
    >
      {/* Background Image */}
      {!isHighlight && card.backgroundImage && (
        <div className="absolute inset-0">
          <Image
            src={card.backgroundImage || "/placeholder.svg"}
            alt={card.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            width={300}
            height={400}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>
      )}

      {/* Category Badge */}
      {card.category && (
        <div className="absolute top-6 right-6 z-10">
          <span className="bg-gray-800/90 px-4 py-2 text-sm text-white">
            {card.category}
          </span>
        </div>
      )}

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-8">
        {isHighlight ? (
          <div className="mb-8">
            <h3 className="mb-8 max-w-md text-3xl font-bold uppercase leading-tight text-black md:text-4xl">
              IF YOU ARE A JOURNALIST AND YOU HAVE AN ENQUIRY ABOUT Everglory Container Lines
            </h3>
            <motion.a
              href={card.link}
              className="inline-flex items-center gap-2 overflow-hidden rounded-full bg-black px-8 py-4 text-white transition-all duration-300 group-hover:rounded-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowRight className="h-5 w-5" />
              <span className="font-medium">Contact our media office</span>
            </motion.a>
          </div>
        ) : (
          <>
            <h3 className="mb-6 text-4xl font-bold text-white md:text-5xl">
              {card.title}
            </h3>
            <motion.a
              href={card.link}
              className="inline-flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-transparent text-white transition-all duration-300 group-hover:rounded-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Read more about ${card.title}`}
            >
              <ArrowRight className="h-6 w-6" />
            </motion.a>
          </>
        )}
      </div>
    </motion.article>
  );
}
