import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN // We'll set this next
});

export async function getProjectStats(owner: string, repo: string) {
  try {
    const { data } = await octokit.rest.repos.get({ owner, repo });
    return {
      stars: data.stargazers_count,
      lastUpdated: new Date(data.pushed_at).toLocaleDateString(),
      topics: data.topics ?? [],
    };
  } catch (error) {
    console.error(`Failed to fetch ${repo}:`, error);
    return null;
  }
}
