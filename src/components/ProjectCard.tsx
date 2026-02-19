import { Project } from '../types/project';
import { Code2, Github, ExternalLink } from 'lucide-react';

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <div className="p-6 rounded-x1 border border-zinc-800 bg-zinc-900/50 hover:border-blue-500/50 transition-all group">
            <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                <Code2 size={24} />
                </div>
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                    {project.language}
                </span>
            </div>
            <h3 className="text-x1 font-bold text-zinc-100 group-hover:text-blue-400 transition-colors">
                {project.title}
            </h3>
            <p className="text-zinc-400 mt-2 text-sm leading leading-relaxed">
                {project.description}
            </p>
            <div className="mt-6 flex gap-4">
                <a href={project.githubUrl} className="text-zinc-500 hover:text-white transition-colors">
                    <Github size={20} />
                </a>
                {project.liveUrl && (
                    <a href={project.liveUrl} className="text-zinc-500 hover:text-white transition-colors">
                        <ExternalLink size={20} />
                    </a>
                )}
            </div>
                <div className="flex items-center gap-4 mt-4 text-xs text-zinc-500">
                    <span className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        Live
                        </span>
                        <span>Updated: {project.lastUpdated || 'Recently'}</span>
                        {project.stars > 0 && <span>⭐ {project.stars}</span>}
                </div>
        </div>
    );
}

