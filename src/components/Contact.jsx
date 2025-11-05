import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Users } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! We will reach out soon.');
  };

  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Contact</h2>
        <p className="mt-3 text-slate-600">Reach the developers of the project.</p>
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-900">
            <Users className="h-5 w-5 text-blue-600" /> Team
          </h3>
          <ul className="mt-4 space-y-2 text-slate-700">
            <li><span className="font-medium">E Saketh</span> — 22WU0101031</li>
            <li><span className="font-medium">K Bhavanvitha</span> — 22WU0101043</li>
            <li><span className="font-medium">Guide:</span> Prof. Madhav Medicherla</li>
          </ul>

          <div className="mt-6 rounded-lg bg-blue-50 p-4 text-sm text-blue-800 ring-1 ring-blue-100">
            This is an academic project showcasing automation concepts for HR onboarding.
          </div>
        </div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-900">
            <Mail className="h-5 w-5 text-blue-600" /> Send a message
          </h3>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-slate-700">Name</label>
              <input required type="text" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <input required type="email" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200" />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-slate-700">Message</label>
            <textarea required rows={5} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200" />
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm text-slate-500">We typically respond within 1–2 business days.</span>
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white shadow-sm hover:bg-blue-700">
              Send <Send className="h-4 w-4" />
            </motion.button>
          </div>
          {status && <div className="mt-4 rounded-md bg-green-50 p-3 text-sm text-green-800 ring-1 ring-green-100">{status}</div>}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
