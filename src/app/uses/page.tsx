import { ExternalLink, Plus } from "lucide-react";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui";

type UseItem = {
	id: string;
	name: string;
	category: string;
	href?: string;
};

export default function UsesPage() {
	const hardware: UseItem[] = [
		{
			id: "macbook",
			name: "Macbook Pro 13-inch M1 2020",
			category: "Laptop",
		},
		{
			id: "iphone",
			name: "iPhone 13 Pro",
			category: "Phone",
		},
		{
			id: "mouse",
			name: "Logitech MX Master 2S, Logitech Pebble Keys 2 K380s",
			category: "Mouse & Keyboard",
		},
		{
			id: "audio",
			name: "Sony WH-1000XM4",
			category: "Audio",
		},
		{
			id: "audio-2",
			name: "TRUTHEAR x Crinacle ZERO:RED",
			category: "Audio",
		},
	];

	const code: UseItem[] = [
		{
			id: "editor-vscode",
			name: "Visual Studio Code (theme: GitHub Light Colorblind)",
			category: "Editor",
		},
		{
			id: "terminal-ghostty",
			name: "Ghostty (zsh)",
			category: "Terminal",
		},
	];

	const software: UseItem[] = [
		{
			id: "window",
			name: "Raycast, Rectangle",
			category: "Window Management",
		},
		{
			id: "password",
			name: "1Password",
			category: "Password Manager",
		},
		{
			id: "screenshot",
			name: "Shottr",
			category: "Screenshot",
		},
		{
			id: "browser",
			name: "Comet",
			category: "Browser",
		},
		{
			id: "bookmark",
			name: "Raindrop",
			category: "Bookmark Manager",
		},
	];

	const hobbies: UseItem[] = [
		{
			id: "hotwheels",
			name: "Hot Wheels Cars",
			category: "Collection",
		},
		{
			id: "guitar",
			name: "Guitar",
			category: "Music",
		},
		{
			id: "swimming",
			name: "Swimming",
			category: "Sport",
		},
	];

	const renderSection = (title: string, items: Array<UseItem>) => (
		<div className="mb-8">
			<h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
				{title}
			</h2>
			<div className="sm:space-y-1.5 text-sm text-zinc-600 dark:text-zinc-400">
				{items.map((item) => (
					<div
						key={item.id}
						className="flex flex-col not-last:border-b sm:border-none py-4 sm:pb-0 sm:border-0 sm:flex-row items-baseline justify-between gap-1 sm:gap-4"
					>
						<span className="flex text-foreground sm:text-inherit items-baseline sm:items-center gap-2">
							<Plus className="size-3 hidden sm:inline-block flex-shrink-0" />
							{item.name}
							{item.href && (
								<Tooltip>
									<TooltipTrigger>
										<Link href={item.href} target="_blank">
											<ExternalLink className="size-3 text-purple-600 hover:text-purple-800" />
										</Link>
									</TooltipTrigger>
									<TooltipContent>Visit {item.href}</TooltipContent>
								</Tooltip>
							)}
						</span>
						<span className="text-xs bg-accent text-accent-foreground rounded-xs px-1 whitespace-nowrap">
							{item.category}
						</span>
					</div>
				))}
			</div>
		</div>
	);

	return (
		<div>
			{renderSection("Hardware", hardware)}
			{renderSection("Code", code)}
			{renderSection("Software", software)}
			{renderSection("Collections and Hobbies", hobbies)}
		</div>
	);
}
