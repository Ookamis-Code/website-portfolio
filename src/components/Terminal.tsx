"use client";
import { useState } from 'react';
import { useTerminal } from '../hooks/useTerminal';
import { Project } from '../types/project';

export default function Terminal({ projects }: {projects: Project[] }) {
  const [input, setInput] = useState('');
  const { history, execute } = useTerminal(projects);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input) return;
    execute(input);
    setInput('');
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-12 bg-black/80 rounded-lg border border-zinc-800 font-mono text-sm shadow-2xl overflow-hidden">
      <div className="bg-zinc-800/50 px-4 py-2 flex gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500/50" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
        <div className="w-3 h-3 rounded-full bg-green-500/50" />
      </div>
      <div className="p-6 h-64 overflow-y-auto text-zinc-300">
        {history.map((line, i) => (
          <div key={i} className="mb-1 leading-relaxed whitespace-pre-wrap">{line}</div>
        ))}
        <form onSubmit={handleSubmit} className="flex mt-2">
          <span className="text-blue-500 mr-2">guest@portfolio:~$</span>
          <input 
            autoFocus
            className="bg-transparent border-none outline-none flex-1 text-white"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
}
