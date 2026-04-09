import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function BlogNotFound() {
	return (
		<div>
			<h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
				Post not found
			</h1>
			<p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
				This post doesn&apos;t exist or has been removed.
			</p>
			<Link
				href="/blog"
				className="mt-6 inline-flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
			>
				<ArrowLeft className="size-3" />
				Back to blog
			</Link>
		</div>
	);
}
