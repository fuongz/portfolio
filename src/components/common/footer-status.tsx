"use client";

export function FooterStatus() {
	return (
		<a
			href="mailto:hi@phuongphung.com"
			className="flex items-center gap-1.5 text-sm font-light text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
		>
			<span className="relative flex size-2">
				<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:animate-none" />
				<span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
			</span>
			Available for work
		</a>
	);
}
