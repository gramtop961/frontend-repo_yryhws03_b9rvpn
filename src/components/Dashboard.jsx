import React, { useEffect, useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { useToast } from './Toast';

function StatusBadge({ status }) {
  const map = {
    'Offer Sent': 'bg-blue-50 text-blue-700 border-blue-200',
    'Accepted': 'bg-emerald-50 text-emerald-700 border-emerald-200',
    'Documents Received': 'bg-amber-50 text-amber-700 border-amber-200',
    'Policy Sent': 'bg-indigo-50 text-indigo-700 border-indigo-200',
    'Welcome Sent': 'bg-teal-50 text-teal-700 border-teal-200',
  };
  return (
    <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full border ${map[status] || 'bg-slate-50 text-slate-700 border-slate-200'}`}>
      {status}
    </span>
  );
}

export default function Dashboard({ refreshSignal }) {
  const { show } = useToast();
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState('');

  const fetchData = async () => {
    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';
      const res = await fetch(`${base}/candidates`);
      if (!res.ok) throw new Error('Failed to load candidates');
      const data = await res.json();
      setRows(Array.isArray(data) ? data : []);
    } catch (e) {
      show(`Load error: ${e.message}`, 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    const id = setInterval(fetchData, 5000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (refreshSignal) fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refreshSignal]);

  const filtered = useMemo(() => {
    const term = q.toLowerCase();
    return rows.filter((r) =>
      [r.name, r.email, r.role, r.status].some((v) => (v || '').toLowerCase().includes(term))
    );
  }, [rows, q]);

  return (
    <section className="mx-auto w-full max-w-7xl">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Dashboard</h2>
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search candidates..."
            className="w-64 pl-9 pr-3 py-2 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
        <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-800">
          <thead className="bg-slate-50 dark:bg-slate-800/50">
            <tr>
              {['Name', 'Email', 'Role', 'Current Status', 'Last Updated'].map((h) => (
                <th key={h} className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-300">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
            {loading ? (
              <tr>
                <td colSpan={5} className="px-4 py-6 text-center text-slate-500">Loading...</td>
              </tr>
            ) : filtered.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-4 py-6 text-center text-slate-500">No candidates yet</td>
              </tr>
            ) : (
              filtered.map((r) => (
                <tr key={r.id} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/40">
                  <td className="px-4 py-3 text-sm text-slate-900 dark:text-slate-100">{r.name}</td>
                  <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">{r.email}</td>
                  <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">{r.role}</td>
                  <td className="px-4 py-3 text-sm"><StatusBadge status={r.status} /></td>
                  <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">{new Date(r.updated_at || r.created_at || Date.now()).toLocaleString()}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
