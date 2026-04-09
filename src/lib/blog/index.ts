import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type Post = {
	slug: string;
	lang: "en" | "vi";
	title: string;
	description: string;
	date: string;
	tags: string[];
	content: string;
};

export type PostMeta = Omit<Post, "content">;

const POSTS_PATH = "src/content/posts";
const VALID_LANGS = new Set(["en", "vi"]);
const VALID_SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export function getPostSlugs(): string[] {
	const postsDir = path.join(process.cwd(), POSTS_PATH);
	const files = fs.readdirSync(postsDir);

	const slugs = new Set<string>();
	for (const file of files) {
		if (file.endsWith(".md")) {
			const slug = file.replace(/\.(en|vi)\.md$/, "");
			slugs.add(slug);
		}
	}

	return Array.from(slugs).sort();
}

export function getPostBySlug(
	slug: string,
	lang: "en" | "vi" = "en"
): Post | null {
	if (!VALID_LANGS.has(lang) || !VALID_SLUG.test(slug)) return null;

	const postsDir = path.join(process.cwd(), POSTS_PATH);
	const filePath = path.join(postsDir, `${slug}.${lang}.md`);

	if (!fs.existsSync(filePath)) {
		return null;
	}

	const fileContent = fs.readFileSync(filePath, "utf8");
	const { data, content } = matter(fileContent);

	return {
		slug,
		lang,
		title: data.title || "",
		description: data.description || "",
		date: data.date || "",
		tags: data.tags || [],
		content,
	};
}

export function getAllPosts(lang?: "en" | "vi"): PostMeta[] {
	const slugs = getPostSlugs();
	const posts: PostMeta[] = [];

	for (const slug of slugs) {
		const post = getPostBySlug(slug, lang);
		if (post) {
			const { content, ...meta } = post;
			posts.push(meta);
		}
	}

	return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getRelatedPost(
	slug: string,
	lang: "en" | "vi"
): PostMeta | null {
	const post = getPostBySlug(slug, lang);
	if (!post) return null;

	const altLang = lang === "en" ? "vi" : "en";
	const altPost = getPostBySlug(slug, altLang);

	if (altPost) {
		const { content, ...meta } = altPost;
		return meta;
	}

	return null;
}
