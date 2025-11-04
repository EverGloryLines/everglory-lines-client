"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import { AgentInfo } from "@/data/agent-data";

interface AgentCardProps {
  agent: AgentInfo;
  index: number;
}

export function AgentCard({ agent, index }: AgentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="relative rounded-none overflow-hidden border-2 border-orange-300 h-64 lg:h-72 group"
    >
      {/* Background image */}
      <Image
        src={agent.portImg || "./placeholder.jpg"}
        alt={`Background for ${agent.point}`}
        fill
        className="object-cover"
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />

      {/* Content positioned over image */}
      <div className="relative h-full p-6 flex flex-col justify-end">
        <div className="space-y-2">
          <div>
            <p className="text-sm font-bold text-orange-400 uppercase tracking-wide">
              Point
            </p>
            <p className="text-base font-medium text-white">
              {agent.point}
            </p>
          </div>

          <div>
            <p className="text-sm font-bold text-orange-400 uppercase tracking-wide">
              Agent
            </p>
            <p className="text-base font-medium text-white">
              {agent.agent}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-orange-400 flex-shrink-0" />
            <a
              href={`tel:${agent.cell}`}
              className="text-base font-medium text-white hover:text-orange-300 transition-colors"
            >
              {agent.cell}
            </a>
          </div>

          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-orange-400 flex-shrink-0" />
            <a
              href={`mailto:${agent.email}`}
              className="truncate text-base font-medium text-white hover:text-orange-300 transition-colors"
            >
              {agent.email}
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
