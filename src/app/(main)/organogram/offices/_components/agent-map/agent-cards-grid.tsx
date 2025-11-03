"use client";

import { motion } from "motion/react";
import { AgentCard } from "./agent-card";
import { AgentInfo } from "@/data/agent-data";
import { SectionTitle } from "@/components/shared/text/section-title";

interface AgentCardsGridProps {
  agents: AgentInfo[];
  country: string;
}

export function AgentCardsGrid({ agents, country }: AgentCardsGridProps) {
  return (
    <motion.div
      key={country}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6 rounded-none p-8"
    >
      <SectionTitle className="mb-4 tracking-normal">
      Our Agents in {country}
      </SectionTitle>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {agents.map((agent, index) => (
          <AgentCard
            key={`${agent.point}-${agent.email}`}
            agent={agent}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
}
