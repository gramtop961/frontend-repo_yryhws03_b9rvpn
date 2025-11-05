import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Rocket, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-[80vh] min-h-[560px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm ring-1 ring-blue-100">
            <Rocket className="h-4 w-4" />
            AI-Powered HR Onboarding Automation System
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            End-to-end onboarding, automated every 10 seconds
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-slate-600">
            A modern HR platform that uses AI and automation loops to send offers, verify documents, create tickets, and deliver personalized welcomes—without manual work.
          </p>

          <div className="mt-4 flex items-center justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-white shadow-lg transition-colors hover:bg-blue-700"
            >
              Get in touch <ArrowRight className="h-4 w-4" />
            </motion.a>
            <a href="#features" className="text-blue-700 hover:underline">Explore features</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
