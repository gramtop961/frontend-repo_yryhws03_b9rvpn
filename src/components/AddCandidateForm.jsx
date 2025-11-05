import React, { useMemo, useState } from 'react';
import { Calendar, Mail, User, Briefcase, Send } from 'lucide-react';
import { useToast } from './Toast';

const roles = ['Developer', 'Designer', 'Data Analyst', 'HR Assistant', 'Product Manager', 'QA Engineer'];

export default function AddCandidateForm({ onCreated }) {
  const { show } = useToast();
  const [form, setForm] = useState({ name: '', email: '', role: roles[0], joining_date: '' });
  const [submitting, setSubmitting] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValid = useMemo(() => {
    return (
      form.name.trim().length >= 2 &&
      isValidEmail(form.email) &&
      form.role &&
      Boolean(form.joining_date)
    );
  }, [form]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!isValid) return;
    setSubmitting(true);
    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';
      const res = await fetch(`${base}/start_onboarding`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          role: form.role,
          joining_date: new Date(form.joining_date).toISOString(),
        }),
      });
      if (!res.ok) throw new Error((await res.json())?.detail || 'Failed to start onboarding');
      const data = await res.json();
      show('Onboarding started successfully', 'success');
      setForm({ name: '', email: '', role: roles[0], joining_date: '' });
      onCreated?.(data);
    } catch (err) {
      show(`Error: ${err.message}`, 'error');
    } finally {
      setSubmitting(false);
      setConfirmOpen(false);
    }
  };

  return (
    <section className="mx-auto w-full max-w-3xl bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm p-6">
      <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-1">Add Candidate</h2>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Initiate pre-onboarding by creating a candidate record and sending the first email.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Candidate Name</label>
          <div className="relative">
            <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Jane Doe"
              className="w-full pl-9 pr-3 py-2 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email Address</label>
          <div className="relative">
            <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="jane.doe@company.com"
              className="w-full pl-9 pr-3 py-2 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Role</label>
          <div className="relative">
            <Briefcase size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="w-full pl-9 pr-3 py-2 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {roles.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Joining Date</label>
          <div className="relative">
            <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="date"
              name="joining_date"
              value={form.joining_date}
              onChange={handleChange}
              className="w-full pl-9 pr-3 py-2 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-3">
        <button
          onClick={() => setConfirmOpen(true)}
          disabled={!isValid || submitting}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-60 disabled:cursor-not-allowed`}
        >
          <Send size={16} />
          Start Onboarding
        </button>
        <span className="text-xs text-slate-500">All fields are required</span>
      </div>

      {confirmOpen && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4">
          <div className="w-full max-w-md rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-xl">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">Confirm Onboarding</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
              Are you sure you want to start the onboarding process for <span className="font-medium">{form.name}</span> ({form.email})?
            </p>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setConfirmOpen(false)}
                className="px-3 py-2 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                disabled={submitting}
                className="px-3 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-60"
              >
                {submitting ? 'Submitting...' : 'Confirm'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
