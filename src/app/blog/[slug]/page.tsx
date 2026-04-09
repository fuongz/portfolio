import { ArrowLeft, Globe } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getPostBySlug, getPostSlugs, getRelatedPost } from "@/lib/blog";

type Props = {
	params: Promise<{ slug: string }>;
	searchParams: Promise<{ lang?: string }>;
};

export async function generateStaticParams() {
	const slugs = getPostSlugs();
	return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
	params,
	searchParams,
}: Props): Promise<Metadata> {
	const { slug } = await params;
	const { lang = "en" } = await searchParams;
	const safeLang: "en" | "vi" = lang === "vi" ? "vi" : "en";
	const post = getPostBySlug(slug, safeLang);

	if (!post) {
		return { title: "Post Not Found" };
	}

	return {
		title: post.title,
		description: post.description,
		keywords: post.tags,
	};
}

export default async function PostPage({ params, searchParams }: Props) {
	const { slug } = await params;
	const { lang = "en" } = await searchParams;
	const safeLang: "en" | "vi" = lang === "vi" ? "vi" : "en";
	const post = getPostBySlug(slug, safeLang);

	if (!post) {
		notFound();
	}

	const relatedPost = getRelatedPost(slug, safeLang);

	return (
		<article className="py-2">
			<header className="mb-8 pb-8 border-b border-zinc-100 dark:border-zinc-800">
				<Link
					href="/blog"
					className="inline-flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 mb-6"
				>
					<ArrowLeft className="size-3" />
					Back to blog
				</Link>

				<div className="flex items-center gap-2 mb-3">
					<span className="text-xs bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300 px-2 py-0.5 rounded">
						{safeLang === "en" ? "English" : "Tiếng Việt"}
					</span>
					{relatedPost && (
						<Link
							href={`/blog/${slug}?lang=${relatedPost.lang}`}
							className="inline-flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
						>
							<Globe className="size-3" />
							{relatedPost.lang === "en"
								? "Read in English"
								: "Đọc bằng Tiếng Việt"}
						</Link>
					)}
				</div>

				<h1 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100">
					{post.title}
				</h1>

				<div className="mt-4 flex items-center gap-4 text-xs text-zinc-500">
					<time>
						{new Date(post.date).toLocaleDateString(
							safeLang === "vi" ? "vi-VN" : "en-US",
							{
								year: "numeric",
								month: "long",
								day: "numeric",
							}
						)}
					</time>
					{post.tags.length > 0 && (
						<div className="flex gap-1.5">
							{post.tags.map((tag) => (
								<span
									key={tag}
									className="bg-accent text-accent-foreground px-1.5 py-0.5 rounded"
								>
									{tag}
								</span>
							))}
						</div>
					)}
				</div>
			</header>

			<div className="prose prose-zinc dark:prose-invert max-w-none">
				<ReactMarkdown remarkPlugins={[remarkGfm]}>
					{post.content}
				</ReactMarkdown>
			</div>

			{relatedPost && (
				<div className="mt-12 pt-8 border-t border-zinc-100 dark:border-zinc-800">
					<Link
						href={`/blog/${slug}?lang=${relatedPost.lang}`}
						className="block p-4 rounded-lg border border-zinc-200 dark:border-zinc-700 hover:border-purple-500 dark:hover:border-purple-500 transition-colors"
					>
						<p className="text-xs text-zinc-500 mb-1">
							{safeLang === "en" ? "Also available in" : "Cũng có bản tiếng"}
						</p>
						<p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
							{relatedPost.title}
						</p>
					</Link>
				</div>
			)}
		</article>
	);
}
