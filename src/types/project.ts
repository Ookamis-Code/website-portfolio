export interface Project {
    id: string;
    title: string;
    description: string;
    language: 'TypeScript' | 'Python' | 'C++' | 'Rust' | 'Go' | 'Java' | 'C#';
    githubUrl: string;
    liveUrl?: string;
    status: 'active' | 'archived' | 'planned' | 'completed' | 'in-progress';
    difficulty: 'Entry' | 'Intermediate' | 'Advanced';
    stars: number;
    lastUpdated: string;
}