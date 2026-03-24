import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

async function getReadme() {
	const res = await fetch(
		"https://raw.githubusercontent.com/fuongz/spec-kit-ext/refs/heads/main/README.md",
		{ next: { revalidate: 3600 } }
	);
	if (!res.ok) return null;
	return res.text();
}

export default async function SpecKitExtPage() {
	const content = await getReadme();

	if (!content) {
		return <div className="p-8 text-red-500">Failed to load README.</div>;
	}

	return (
		<div className="mx-auto max-w-3xl px-4 py-12 prose dark:prose-invert prose-sm sm:prose-base">
			<ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
		</div>
	);
}
