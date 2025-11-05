import React, { useState } from 'react';
import Navbar from './components/Navbar';
import AddCandidateForm from './components/AddCandidateForm';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import { ToastProvider } from './components/Toast';

export default function App() {
  const [current, setCurrent] = useState('add');
  const [refreshKey, setRefreshKey] = useState(0);

  const handleCreated = () => {
    setRefreshKey((k) => k + 1);
    setCurrent('dashboard');
  };

  return (
    <ToastProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
        <Navbar onNavigate={setCurrent} current={current} hrName="HR Department" />
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-8">
          {current === 'add' && <AddCandidateForm onCreated={handleCreated} />}
          {current === 'dashboard' && <Dashboard refreshSignal={refreshKey} />}
          {current === 'activity' && (
            <section className="text-sm text-slate-600 dark:text-slate-300">Activity log will appear here.</section>
          )}
          {current === 'settings' && (
            <section className="text-sm text-slate-600 dark:text-slate-300">Settings panel will appear here.</section>
          )}
        </main>
        <Footer />
      </div>
    </ToastProvider>
  );
}
