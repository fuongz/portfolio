"use server";

export async function fetchReadme(repo: string) {
	const response = await fetch(`https://api.github.com/repos/${repo}/readme`, {
		headers: {
			Accept: "application/vnd.github.v3+json",
		},
		next: { revalidate: 3600 },
	});

	if (!response.ok) {
		return null;
	}

	const data = await response.json();
	let content = Buffer.from(data.content, "base64").toString("utf-8");

	content = content.replace(
		/!\[([^\]]*)\]\((?!http)([^)]+)\)/g,
		`![$1](https://raw.githubusercontent.com/${repo}/main/$2)`
	);

	content = content.replace(
		/\[([^\]]*)\]\((?!http)([^)]+)\)/g,
		`[$1](https://github.com/${repo}/blob/main/$2)`
	);

	return content;
}

export type LatestCommit = {
	sha: string;
	message: string;
	date: string;
	author: string;
	authorAvatar?: string;
};

export async function fetchLatestCommit(
	repo: string
): Promise<LatestCommit | null> {
	const response = await fetch(
		`https://api.github.com/repos/${repo}/commits?per_page=1`,
		{
			headers: {
				Accept: "application/vnd.github.v3+json",
			},
			next: { revalidate: 3600 },
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
