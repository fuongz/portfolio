"use server";

import { cache } from "react";

export const fetchReadme = cache(async (repo: string) => {
	const response = await fetch(`https://api.github.com/repos/${repo}/readme`, {
		headers: {
			Accept: "application/vnd.github.v3+json",
		},
		next: {
			revalidate: 3600,
		},
	});

	if (!response.ok) {
		return null;
	}

	const data = await response.json();
	const content = Buffer.from(data.content, "base64").toString("utf-8");
	return content;
});

export type LatestCommit = {
	sha: string;
	message: string;
	date: string;
	author: string;
	authorAvatar?: string;
};

export const fetchLatestCommit = cache(
	async (repo: string): Promise<LatestCommit | null> => {
		const response = await fetch(
			`https://api.github.com/repos/${repo}/commits?per_page=1`,
			{
				headers: {
					Accept: "application/vnd.github.v3+json",
				},
				next: {
					revalidate: 3600,
				},
			}
		);

		if (!response.ok) {
			return null;
		}

		const data = await response.json();
		if (!data || data.length === 0) {
			return null;
		}

		const commit = data[0];
		return {
			sha: commit.sha,
			message: commit.commit.message,
			date: commit.commit.author.date,
			author: commit.commit.author.name,
			authorAvatar: commit.author?.avatar_url,
		};
	}
);
