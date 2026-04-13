import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = "https://fuongz.com";
	const posts = getAllPosts("en");

	const staticPages: MetadataRoute.Sitemap = [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 1,
		},
		{
			url: `${baseUrl}/blog`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.9,
		},
		{
			url: `${baseUrl}/uses`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.7,
		},
		{
			url: `${baseUrl}/spec-kit-ext`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.6,
		},
	];

	const blogPosts: MetadataRoute.Sitemap = posts.map((post) => ({
		url: `${baseUrl}/blog/${post.slug}`,
		lastModified: new Date(post.dateModified || post.date),
		changeFrequency: "monthly",
		priority: 0.8,
	}));

	return [...staticPages, ...blogPosts];
}
