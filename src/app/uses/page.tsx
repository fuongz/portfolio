import { ExternalLink, Plus } from "lucide-react";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui";

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
			id: "editor-vscode",
			name: "Visual Studio Code",
			description: "Theme: GitHub Light Colorblind",
			category: "Editor",
			href: "https://code.visualstudio.com",
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
			id: "dbeaver",
			name: "DBeaver",
			description:
				"Universal database GUI. Works with Postgres, MySQL, and MongoDB.",
			category: "Database",
			href: "https://dbeaver.io",
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
		<div className="mb-10">
			<h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
				{title}
			</h2>
			<div className="text-sm text-zinc-600 dark:text-zinc-400">
				{items.map((item) => (
					<div
						key={item.id}
						className="flex not-last:border-b sm:border-none py-4 sm:py-2.5 items-start justify-between gap-4"
					>
						<span className="flex items-start gap-2 flex-1 min-w-0">
							<Plus className="size-3 hidden sm:inline-block flex-shrink-0 mt-1" />
							<span className="flex flex-col gap-0.5 min-w-0">
								<span className="flex items-center gap-1.5 text-foreground font-medium">
									{item.name}
									{item.href && (
										<Tooltip>
											<TooltipTrigger>
												<Link href={item.href} target="_blank">
													<ExternalLink className="size-3 text-purple-600 hover:text-purple-800" />
												</Link>
											</TooltipTrigger>
											<TooltipContent>{item.href}</TooltipContent>
										</Tooltip>
									)}
								</span>
								{item.description && (
									<span className="text-zinc-500 dark:text-zinc-400 text-xs leading-relaxed">
										{item.description}
									</span>
								)}
							</span>
						</span>
						<span className="text-xs bg-accent text-accent-foreground rounded-xs px-1 whitespace-nowrap flex-shrink-0 mt-0.5">
							{item.category}
						</span>
					</div>
				))}
			</div>
		</div>
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
