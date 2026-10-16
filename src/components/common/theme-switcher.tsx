"use client";

import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitch() {
	const { resolvedTheme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const isDark = mounted && resolvedTheme === "dark";

	return (
		<button
			type="button"
			aria-label="Toggle theme"
			onClick={() => setTheme(isDark ? "light" : "dark")}
			className="flex size-7 cursor-pointer items-center justify-center rounded-full text-neutral-700 transition-[color,background-color,scale] duration-150 ease-out hover:bg-neutral-200 active:scale-[0.97] dark:text-neutral-300 dark:hover:bg-neutral-800"
		>
			{/* Keyframes, not transitions: disableTransitionOnChange suppresses CSS transitions during the theme swap */}
			{isDark ? (
				<Sun className="size-4 animate-in fade-in-0 duration-200 ease-out motion-safe:zoom-in-50" />
			) : (
				<MoonStar className="size-4 animate-in fade-in-0 duration-200 ease-out motion-safe:zoom-in-50" />
			)}
		</button>
	);
}
