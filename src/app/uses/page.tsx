import { Minus } from "lucide-react";

export default function UsesPage() {
	const hardware = [
		{
			id: "macbook",
			name: "Macbook Pro 13-inch M1 2020",
			category: "Laptop",
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
			id: "headphones",
			name: "Sony WH-1000XM4",
			category: "Headphones",
		},
		{
			id: "iems",
			name: "TRUTHEAR x Crinacle ZERO:RED",
			category: "In-Ear Monitors",
		},
	];

	return (
		<div>
			{/* Hardware Section */}
			<div className="mb-8 sm:mb-12">
				<h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 mb-4 sm:mb-6">
					Hardware:
				</h2>
				<div className="space-y-4 sm:space-y-2">
					{hardware.map((item) => (
						<div key={item.id} className="flex gap-3 sm:gap-4 sm:pl-4">
							<div className="flex-1 min-w-0">
								<div className="flex flex-col sm:flex-row sm:gap-2 items-start sm:items-baseline justify-between gap-1 flex-wrap">
									<h3 className="font-medium text-sm sm:text-base text-zinc-900 dark:text-zinc-100">
										<Minus className="hidden sm:inline-block size-4 mr-2 text-muted-foreground" />
										{item.name}
									</h3>
									<span className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 whitespace-nowrap flex-shrink-0">
										{item.category}
									</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
