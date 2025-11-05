import React, { useState } from 'react';
import { Home, PlusCircle, ListOrdered, Settings, Moon, Sun } from 'lucide-react';

export default function Navbar({ onNavigate, current, hrName = 'HR Department' }) {
  const [dark, setDark] = useState(false);

  const links = [
    { key: 'dashboard', label: 'Dashboard', icon: Home },
    { key: 'add', label: 'Add Candidate', icon: PlusCircle },
    { key: 'activity', label: 'Activity Log', icon: ListOrdered },
    { key: 'settings', label: 'Settings', icon: Settings },
  ];

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    if (next) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-slate-900/70 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-md bg-blue-600 text-white grid place-items-center font-semibold">AI</div>
          <div className="leading-tight">
            <div className="font-semibold text-slate-900 dark:text-slate-100">AI-Powered HR Onboarding Management Agent</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Welcome, {hrName}</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-1">
          {links.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => onNavigate(key)}
              className={`inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                current === key
                  ? 'bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-200'
                  : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
              }`}
            >
              <Icon size={16} /> {label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleDark}
            aria-label="Toggle dark mode"
            className="p-2 rounded-md border bg-white hover:bg-slate-50 dark:bg-slate-900 dark:border-slate-700 dark:hover:bg-slate-800"
          >
            {dark ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-slate-600" />}
          </button>
        </div>
      </div>

      <div className="md:hidden border-t bg-white/70 dark:bg-slate-900/70 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-3 py-2 flex items-center gap-2 overflow-x-auto">
          {links.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => onNavigate(key)}
              className={`px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap ${
                current === key
                  ? 'bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-200'
                  : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
