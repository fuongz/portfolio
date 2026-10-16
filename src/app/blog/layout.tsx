import { notFound } from "next/navigation";
import { BLOG_ENABLED } from "@/lib/blog";

export default function BlogLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	if (!BLOG_ENABLED) notFound();
	return children;
}
