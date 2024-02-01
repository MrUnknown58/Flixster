"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";

interface LampDemoParams {
  title?: string;
  content?: React.ReactNode;
  children: React.ReactNode;
}

export function LampDemo({ title, content, children }: LampDemoParams) {
  return (
    <LampContainer className="h-full pt-12">
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col items-center justify-center bg-gradient-to-r from-green-200 to-green-500 bg-clip-text text-center text-xl font-medium tracking-tight text-transparent md:text-2xl"
      >
        {/* {title}
        {content} */}
        {children}
      </motion.h1>
    </LampContainer>
  );
}
