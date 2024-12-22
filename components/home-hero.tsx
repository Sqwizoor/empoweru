"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-[70vh] md:h-[90vh] w-full">
      {/* Background Image */}
      <Image
        src="/hero3.jpg" // Replace with your image path
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0 -z-10"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 -z-10"></div>

      {/* Content */}
      <motion.div
        className="h-full flex flex-col items-center pt-[2rem] justify-center text-center text-white md:px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-2xl md:text-4xl font-extrabold mb-4">
          Empower U Community Development Institute
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          Empowering youth and fostering sustainable community growth through
          education, training, and development.
        </p>
        <Button size="lg" className="bg-primary hover:bg-primary/80" asChild>
          <Link href="#about">Learn More</Link>
        </Button>
      </motion.div>
    </section>
  );
}
