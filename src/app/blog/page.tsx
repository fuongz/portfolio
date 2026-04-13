import type { Metadata } from "next";
import Link from "next/link";
import { StaggeredItem, StaggeredList } from "@/components/common/animations";
import { PageHeader } from "@/components/common/page-header";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
	title: "Blog",
	description:
		"Writing about technology, programming, and life. Vietnamese & English content.",
	keywords: ["blog", "technology", "programming", "viết", "công nghệ"],
	metadataBase: new URL("https://phuongphung.com"),
	alternates: {
		canonical: "/blog",
	},
	openGraph: {
		title: "Blog | fuongz",
		description:
			"Writing about technology, programming, and life. Vietnamese & English content.",
		url: "https://phuongphung.com/blog",
		type: "website",
		images: [
			{
				url: "/og-default.png",
				width: 1200,
				height: 630,
				alt: "fuongz Blog",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Blog | fuongz",
		description:
			"Writing about technology, programming, and life. Vietnamese & English content.",
		images: ["/og-default.png"],
	},
};

const blogSchema = {
	"@context": "https://schema.org",
	"@type": "Blog",
	name: "fuongz Blog",
	description:
		"Writing about technology, programming, and life. Vietnamese & English content.",
	url: "https://phuongphung.com/blog",
};

export default function BlogPage() {
	const posts = getAllPosts("en");

	return (
		<>
			<script
				type="application/ld+json"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: JSON.stringify of static object is safe
				dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
			/>
			<PageHeader
				title="Blog"
				description="Writing about technology, programming, and life."
			/>

			<div className="space-y-1 mb-4">
				{posts.length === 0 ? (
					<p className="text-sm text-zinc-500">No posts yet.</p>
				) : (
					<StaggeredList className="space-y-1">
						{posts.map((post) => (
							<StaggeredItem key={post.slug}>
								<Link href={`/blog/${post.slug}`} className="block group">
									<article className="py-3 not-last:border-b border-zinc-100 dark:border-zinc-800">
										<div className="flex items-start justify-between gap-4">
											<div className="flex-1 min-w-0">
												<h2 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
													{post.title}
												</h2>
												<p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2">
													{post.description}
												</p>
											</div>
											<time className="text-xs text-zinc-500 dark:text-zinc-400 whitespace-nowrap">
												{new Date(post.date).toLocaleDateString("en-US", {
													month: "short",
													day: "numeric",
													year: "numeric",
												})}
											</time>
										</div>
										{post.tags.length > 0 && (
											<div className="mt-2 flex gap-1.5">
												{post.tags.map((tag) => (
													<span
														key={tag}
														className="text-xs bg-accent text-accent-foreground px-1.5 py-0.5 rounded"
													>
														{tag}
													</span>
												))}
											</div>
										)}
									</article>
								</Link>
							</StaggeredItem>
						))}
					</StaggeredList>
				)}
			</div>
		</>
	);
}
