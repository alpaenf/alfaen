"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal as TerminalIcon, X } from "lucide-react";

export default function TerminalMode() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    { type: "system", text: "Welcome to Mukhammad Alfaen Fadillah's Terminal." },
    { type: "system", text: "Type 'help' to see available commands." },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const endOfHistoryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle with Ctrl + `
      if (e.ctrlKey && e.key === "`") {
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  useEffect(() => {
    endOfHistoryRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.trim().toLowerCase();
    const newHistory = [...history, { type: "user", text: `guest@alfaen:~$ ${input}` }];

    switch (cmd) {
      case "help":
        newHistory.push({ type: "system", text: "Available commands: help, about, skills, projects, clear, sudo" });
        break;
      case "about":
        newHistory.push({ type: "system", text: "I'm a Frontend Developer passionate about building interactive, accessible, and performant web applications." });
        break;
      case "skills":
        newHistory.push({ type: "system", text: "React, Next.js, TypeScript, Tailwind CSS, Framer Motion, Redux, Node.js" });
        break;
      case "projects":
        newHistory.push({ type: "system", text: "Close this terminal to view my awesome projects in the UI!" });
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      case "sudo":
        newHistory.push({ type: "system", text: "Nice try! This incident will be reported. 🚨" });
        break;
      default:
        newHistory.push({ type: "system", text: `Command not found: ${cmd}. Type 'help' for available commands.` });
    }

    setHistory(newHistory);
    setInput("");
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 p-3 rounded-full bg-slate-900 text-green-400 hover:bg-slate-800 transition-colors shadow-lg z-50 flex items-center justify-center border border-slate-700 font-mono text-xs gap-2"
        aria-label="Open Terminal"
      >
        <TerminalIcon size={18} />
        <span className="hidden sm:inline">Dev Mode</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[10000] bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            <div className="w-full max-w-4xl h-[80vh] bg-[#1e1e1e] rounded-xl border border-slate-700 shadow-2xl flex flex-col overflow-hidden font-mono text-sm">
              {/* Header */}
              <div className="bg-[#323233] px-4 py-2 flex items-center justify-between border-b border-slate-700 select-none">
                <div className="flex gap-2 items-center">
                  <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 cursor-pointer" onClick={() => setIsOpen(false)} />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="text-slate-400 text-xs">guess@alfaen: ~ (Ctrl + ` to toggle)</div>
                <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white">
                  <X size={16} />
                </button>
              </div>

              {/* Terminal Body */}
              <div className="flex-1 overflow-y-auto p-4 bg-[#1e1e1e] text-slate-300">
                {history.map((line, i) => (
                  <div key={i} className="mb-2">
                    {line.type === "user" ? (
                      <span className="text-emerald-400">{line.text}</span>
                    ) : (
                      <span className="whitespace-pre-wrap">{line.text}</span>
                    )}
                  </div>
                ))}
                
                <form onSubmit={handleCommand} className="flex gap-2">
                  <span className="text-emerald-400 shrink-0">guest@alfaen:~$</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 bg-transparent border-none outline-none text-slate-300 caret-white"
                    autoFocus
                    spellCheck={false}
                    autoComplete="off"
                  />
                </form>
                <div ref={endOfHistoryRef} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
