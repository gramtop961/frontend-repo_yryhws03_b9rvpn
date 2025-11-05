import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCcw, Mail, FileCheck, Ticket, Bot, Database, Users } from 'lucide-react';

const steps = [
  { icon: Database, title: 'Monitor DB', desc: 'Continuously watches the employee database for new hires.' },
  { icon: Mail, title: 'Send Offers', desc: 'Generates and sends personalized offer letters automatically.' },
  { icon: FileCheck, title: 'Verify Docs', desc: 'Collects and validates documents end-to-end.' },
  { icon: Ticket, title: 'Create Tickets', desc: 'Opens IT/HR tickets and tracks progress.' },
  { icon: Bot, title: 'Welcome Emails', desc: 'AI crafts warm, role-specific welcome messages.' },
];

const tech = ['Python', 'Streamlit', 'PostgreSQL', 'Google Gemini AI', 'JSON automation'];

const About = () => {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 ring-1 ring-blue-100">
          <RefreshCcw className="h-3.5 w-3.5" /> Automation Loop
        </div>
        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">About the Project</h2>
        <p className="mt-4 text-slate-600">
          The system continuously monitors the employee database, detects new hires, sends offer letters, verifies documents, creates tickets, and sends personalized welcome emails — all automatically every 10 seconds without manual work.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-5">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <s.icon className="h-6 w-6 text-blue-600" />
            <h3 className="mt-3 font-semibold text-slate-900">{s.title}</h3>
            <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 grid items-center gap-10 rounded-2xl bg-gradient-to-br from-blue-50 to-white p-8 ring-1 ring-inset ring-blue-100 md:grid-cols-2">
        <div>
          <h3 className="text-2xl font-bold text-slate-900">Why it matters</h3>
          <p className="mt-2 text-slate-600">
            Reduce manual effort, accelerate time-to-productive, and deliver a delightful first day. The automation loop checks for updates every 10 seconds so nothing slips through the cracks.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-blue-600/10 px-3 py-1 text-sm font-medium text-blue-700">
            <Users className="h-4 w-4" /> For HR teams and IT operations
          </div>
        </div>
        <div className="">
          <h4 className="font-semibold text-slate-900">Tech Stack</h4>
          <div className="mt-3 flex flex-wrap gap-2">
            {tech.map((t) => (
              <span key={t} className="rounded-full border border-blue-200 bg-white px-3 py-1 text-sm text-blue-700 shadow-sm">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
