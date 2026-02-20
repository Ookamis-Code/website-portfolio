import { useState } from 'react';
import { Project } from '../types/project';

export const useTerminal = (projects: Project[]) => {
  const [history, setHistory] = useState<string[]>(["Welcome to the System-Agnostic Portfolio. Type 'help' for commands."]);

  const execute = (cmd: string) => {
    const command = cmd.toLowerCase().trim();
    let response = "";

    switch (command) {
      case 'help':
        response = "Available: ls (list projects), clear, about, contact, github, linkedin";
        break;
      case 'ls':
        response = projects.map(p => `${p.title} [${p.language}]`).join(", ");
        break;
      case 'clear':
        setHistory([]);
        return;
      case 'about':
        response = "Self-taught systems engineer focused on language-agnostic architecture.";
        break;
      case 'contact':
        response = "Email:ookamiscode@gmail.com";
        break;
      case 'github':
        response = "GitHub:https://github.com/Ookamis-Code";
        break;
      case 'linkedin':
        response = "LinkedIn:https://www.linkedin.com/in/nick-henderson-2908513b0/";
        break;
      default:
        response = `Command not found: ${command}`;
    }

    setHistory(prev => [...prev, `> ${cmd}`, response]);
  };

  return { history, execute };
};
