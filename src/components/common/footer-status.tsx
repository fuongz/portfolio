"use client";

export function FooterStatus() {
	return (
		<div className="flex items-center gap-3">
			<a
				href="mailto:hi@phuongphung.com"
				className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors cursor-pointer"
			>
				<span className="relative flex size-2">
					<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
					<span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
				</span>
				available for work
			</a>
		</div>
	);
}
