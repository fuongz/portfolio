import { Plus } from "lucide-react";

export default function UsesPage() {
	const hardware = [
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

	const code = [
		{
			id: "vscode",
			name: "Visual Studio Code (theme: GitHub Light Colorblind)",
			category: "Editor",
		},
		{
			id: "terminal",
			name: "iTerm (zsh)",
			category: "Terminal",
		},
	];

	const software = [
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

	const hobbies = [
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

	const renderSection = (
		title: string,
		items: Array<{ id: string; name: string; category: string }>
	) => (
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
