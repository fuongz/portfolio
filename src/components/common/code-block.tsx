"use client";

import { Check, Copy } from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";

type CodeBlockProps = {
	children?: React.ReactNode;
	className?: string;
	inline?: boolean;
	node?: unknown;
};

export function CodeBlock({
	children,
	className,
	inline,
	node,
	...props
}: CodeBlockProps) {
	const [copied, setCopied] = useState(false);
	const codeRef = useRef<HTMLElement>(null);

	const language = className?.replace(/language-/, "") || "";
	const isInline = inline || !className?.includes("hljs");

	if (isInline) {
		return (
			<code className={className} {...props}>
				{children}
			</code>
		);
	}

	const handleCopy = async () => {
		const text = codeRef.current?.textContent || "";
		await navigator.clipboard.writeText(text);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<div className="relative group/codeblock not-prose">
			<div className="flex items-center justify-between px-4 py-2 rounded-t-lg border border-b-0 border-zinc-200 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800">
				<span className="text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase">
					{language ? language.replace("hljs ", "") : "code"}
				</span>
				<Button
					size="xs"
					className="cursor-pointer bg-white dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700"
					variant="secondary"
					onClick={handleCopy}
				>
					{copied ? (
						<>
							<Check /> Copied
						</>
					) : (
						<>
							<Copy />
							Copy
						</>
					)}
				</Button>
			</div>
			<pre className={`rounded-t-none ${className}`} {...props}>
				<code ref={codeRef} className={className}>
					{children}
				</code>
			</pre>
		</div>
	);
}
