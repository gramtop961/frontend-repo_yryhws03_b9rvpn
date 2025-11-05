import React from 'react';
import { motion } from 'framer-motion';
import { Mail, FileCheck, Ticket, Bot, Database } from 'lucide-react';

const FEATURES = [
  {
    icon: Mail,
    title: 'Email automation (SMTP/IMAP)',
    desc: 'Automated sending and inbox monitoring for timely updates.',
  },
  {
    icon: FileCheck,
    title: 'Offer letter management',
    desc: 'Generate, personalize, and deliver offers at scale.',
  },
  {
    icon: FileCheck,
    title: 'Document verification',
    desc: 'Collect and validate documents with status tracking.',
  },
  {
    icon: Ticket,
    title: 'Ticket generation',
    desc: 'Create and sync IT/HR tickets automatically.',
  },
  {
    icon: Bot,
    title: 'AI-driven welcome messages',
    desc: 'Personalized welcome notes crafted by AI.',
  },
  {
    icon: Database,
    title: 'Database synchronization',
    desc: 'Real-time updates from your HRIS and internal systems.',
  },
];

const Features = () => {
  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Features</h2>
        <p className="mt-3 text-slate-600">Core capabilities designed for reliability and scale.</p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-blue-50/0 to-blue-100/0 transition-opacity duration-300 group-hover:via-blue-50/60 group-hover:to-blue-100/40" />
            <f.icon className="relative h-7 w-7 text-blue-600" />
            <h3 className="relative mt-3 text-lg font-semibold text-slate-900">{f.title}</h3>
            <p className="relative mt-1 text-sm text-slate-600">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
