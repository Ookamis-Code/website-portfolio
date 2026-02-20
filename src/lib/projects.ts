import { Project } from "../types/project";
import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN
});

const REPO_CONFIG = [
    {owner: "Ookamis-Code", repo: "TaskDispatcher", language: "C#" as const},
    {owner: "Ookamis-Code", repo: "IntergrationEngine", language: "C#" as const},
    {owner: "Ookamis-Code", repo: "GoLedger", language: "Go" as const},
    {owner: "Ookamis-Code", repo: "website-portfolio", language: "TypeScript, Dockerfile, JavaScript, CSS" as const},
]

export async function getLiveProjects(): Promise<Project[]> {
    const projectPromises = REPO_CONFIG.map(async (config, index) => {
        try {
            const { data } = await octokit.rest.repos.get({
                owner: config.owner,
                repo: config.repo,
            });
            return {
                id: data.id.toString(),
                title: data.name,
                description: data.description || "No description available.",
                language: config.language,
                githubUrl: data.html_url,
                liveUrl: data.homepage || undefined,
                status: "active",
                difficulty: "Advanced",
                stars: data.stargazers_count,
                lastUpdated: new Date(data.pushed_at).toLocaleDateString(),
            } as Project;
        } catch (error) {
            console.error(`Failed to fetch ${config.repo}:`, error);
            return null;
        }
    });
    const results = await Promise.all(projectPromises);
    return results.filter((p): p is Project => p !== null);
}