import ProjectCard from '../components/ProjectCard';
import { getLiveProjects } from '../lib/projects';
import Terminal from '../components/Terminal';


export default async function Home() {
    const projects = await getLiveProjects();
    return (
        <main className="max-w-6xl mx-auto px-6 py-20">
            <header className="mb-16">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                    Language-Agnostic <span className="text-blue-500">Systems Engineer</span>
                </h1>
                <p className="mt-4 text-zinc-400 max-w-2xl">
                    Proving that core engineering principles transcend sytax.
                    A collection of projects spanning low-level system to high-level cloud architectures, 
                    showcasing versatility and a deep understanding of software development across languages and paradigms.
                </p>
            </header>
            <section className="mb-20">
                <Terminal />
            </section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((p) => (
                    <ProjectCard key={p.id} project={p} />
                ))}
            </div>
        </main>

    );
}