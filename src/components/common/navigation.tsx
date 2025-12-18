"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "./container";

const navItems = [
	{ href: "/", label: "/ home" },
	{ href: "/uses", label: "/ uses" },
];

export function Navigation() {
	const pathname = usePathname();
	return (
		<nav className="bg-background/95 sticky top-0 z-1 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<Container>
				<div className="flex items-center justify-between sm:h-14">
					{/* Navigation Links */}
					<div className="flex items-center gap-6">
						{navItems.map((item) => {
							const isActive = pathname === item.href;
							return (
								<Link
									key={item.href}
									href={item.href}
									className={`text-sm transition-colors hover:text-zinc-900 dark:hover:text-zinc-100 ${
										isActive
											? "text-zinc-900 dark:text-zinc-100"
											: "text-zinc-600 dark:text-zinc-400"
									}`}
								>
									{item.label}
								</Link>
							);
						})}
					</div>
				</div>
			</Container>
		</nav>
	);
}
