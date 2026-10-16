import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { pillClassName } from "@/components/common/pill";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
	title: "Uses",
	description: "The gear, software, and tools I use daily.",
};

type UseItem = {
	id: string;
	name: string;
	description?: string;
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
			name: "Logitech MX Master 2S",
			category: "Mouse",
		},
		{
			id: "keyboard",
			name: "Logitech Pebble Keys 2 K380s",
			category: "Keyboard",
		},
		{
			id: "audio",
			name: "Sony WH-1000XM4",
			description: "I use them for deep focus sessions.",
			category: "Headphones",
		},
		{
			id: "audio-2",
			name: "TRUTHEAR x Crinacle ZERO:RED",
			description: "For casual listening when I don't want over-ears.",
			category: "IEM",
		},
	];

	const code: UseItem[] = [
		{
			id: "editor-zed",
			name: "Zed",
			description: "Fast, native, and collaborative. My default editor now.",
			category: "Editor",
			href: "https://zed.dev",
		},
		{
			id: "prowl",
			name: "Prowl",
			description: "My go-to for AI coding agents.",
			category: "Coding Agents",
			href: "https://prowl.cat/",
		},
		{
			id: "terminal-ghostty",
			name: "Ghostty",
			description: "Fast, native, and renders fonts beautifully. Running zsh.",
			category: "Terminal",
			href: "https://ghostty.org",
		},
		{
			id: "orbstack",
			name: "OrbStack",
			description:
				"Replaced Docker Desktop. Faster, lighter, and native on Apple Silicon.",
			category: "Containers",
			href: "https://orbstack.dev",
		},
		{
			id: "tablepro",
			name: "TablePro",
			description:
				"Clean, modern database GUI. Works with Postgres, MySQL, and more.",
			category: "Database",
			href: "https://tablepro.app/",
		},
		{
			id: "yaak",
			name: "Yaak",
			description: "Minimal API client. Cleaner than Postman for everyday use.",
			category: "API Client",
			href: "https://yaak.app",
		},
	];

	const software: UseItem[] = [
		{
			id: "window",
			name: "Raycast",
			description:
				"Replaced Spotlight entirely. Extensions make it a true command center.",
			category: "Launcher",
			href: "https://raycast.com",
		},
		{
			id: "window-management",
			name: "Rectangle",
			description: "Simple window snapping with keyboard shortcuts.",
			category: "Window Management",
			href: "https://rectangleapp.com",
		},
		{
			id: "password",
			name: "1Password",
			description: "Stores credentials, SSH keys, and secure notes.",
			category: "Password Manager",
			href: "https://1password.com",
		},
		{
			id: "screenshot",
			name: "Shottr",
			description:
				"Lightweight, fast, and free. Does everything CleanShot does for my use case.",
			category: "Screenshot",
			href: "https://shottr.cc",
		},
		{
			id: "browser",
			name: "Google Chrome",
			description:
				"Dev tools are unmatched. Pairs well with my NewTab extension.",
			category: "Browser",
			href: "https://google.com/chrome",
		},
		{
			id: "bookmark",
			name: "Raindrop",
			description: "Beautiful bookmark manager with tagging and collections.",
			category: "Bookmark Manager",
			href: "https://raindrop.io",
		},
	];

	const hobbies: UseItem[] = [
		{
			id: "hotwheels",
			name: "Hot Wheels Cars",
			description:
				"It all started when I spotted a 1900s car at MyKingdom store and instantly fell in love. Now I have a whole collection — and a tracker app to go with it.",
			category: "Collection",
			href: "https://hotwheels.phake.app",
		},
		{
			id: "guitar",
			name: "Guitar",
			description:
				"My wife and I went to a beginner guitar class together. The moment I watched the teacher pick it up and play, I knew I had to learn it.",
			category: "Music",
		},
		{
			id: "swimming",
			name: "Swimming",
			description:
				"Honestly, I started learning just because I didn't want to drown. Now I swim 2–3 times a week and I'm planning to get into free diving this year.",
			category: "Sport",
		},
		{
			id: "ps5",
			name: "PS5",
			description:
				"Racing games have been my thing since I was a kid, and right now I'm having a blast with Forza Horizon.",
			category: "Gaming",
		},
	];

	const renderSection = (title: string, items: Array<UseItem>) => (
		<section className="mb-10 animate-intro">
			<h2 className="mb-3 text-sm font-light text-neutral-500 dark:text-neutral-400">
				{title}
			</h2>
			<div className="flex flex-wrap items-center gap-x-1 gap-y-2">
				{items.map((item) => {
					const pill = item.href ? (
						<Link
							href={item.href}
							target="_blank"
							rel="noopener noreferrer"
							className={pillClassName}
						>
							{item.name}
							<ArrowUpRight className="text-neutral-400" />
						</Link>
					) : (
						<span className={cn(pillClassName, "cursor-default")}>
							{item.name}
						</span>
					);

					return (
						<Tooltip key={item.id}>
							<TooltipTrigger asChild>{pill}</TooltipTrigger>
							<TooltipContent className="max-w-64">
								<span className="block text-[10px] uppercase tracking-wide opacity-60">
									{item.category}
								</span>
								{item.description && (
									<span className="mt-0.5 block">{item.description}</span>
								)}
							</TooltipContent>
						</Tooltip>
					);
				})}
			</div>
		</section>
	);

	return (
		<div>
			{renderSection("Workstation", hardware)}
			{renderSection("Dev Setup", code)}
			{renderSection("Apps", software)}
			{renderSection("Hobbies", hobbies)}
		</div>
	);
}
