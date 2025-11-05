import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Contact from './components/Contact';
import { Brain, Settings, Mail } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-2 font-semibold text-slate-900">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white"><Brain className="h-5 w-5" /></span>
            <span>HR Onboarding AI</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-700 md:flex">
            <a href="#about" className="hover:text-slate-900">About</a>
            <a href="#features" className="hover:text-slate-900">Features</a>
            <a href="#contact" className="inline-flex items-center gap-1 rounded-md bg-blue-600 px-3 py-1.5 font-medium text-white hover:bg-blue-700">
              <Mail className="h-4 w-4" /> Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Features />
        <section className="mx-auto max-w-7xl px-6">
          <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 to-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white"><Settings className="h-5 w-5" /></span>
              <div>
                <h3 className="text-lg font-semibold">Professional, responsive, and smooth</h3>
                <p className="text-slate-600">Soft blue tones, animated workflow visuals, and subtle transitions for a modern tech feel.</p>
              </div>
            </div>
          </div>
        </section>
        <Contact />
      </main>

      <footer className="mt-10 border-t border-slate-200 bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-600 md:flex-row">
          <p>© 2025 HR Automation System</p>
          <div className="flex items-center gap-4">
            <a href="#about" className="hover:text-slate-900">About</a>
            <a href="#features" className="hover:text-slate-900">Features</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
