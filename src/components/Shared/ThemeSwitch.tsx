"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiMonitor, FiMoon, FiSun } from "react-icons/fi";
import { mc } from "@/lib/classname-helper";

const ThemeIcons: { [key: string]: React.ReactNode } = {
	dark: <FiMoon />,
	light: <FiSun />,
	system: <FiMonitor />,
	default: <FiSun />,
};

interface ThemeSwitchButtonProps {
	theme: string;
	active: boolean;
	onClick: () => void;
}
const ThemeSwitchButton = ({
	theme,
	active,
	onClick,
}: ThemeSwitchButtonProps) => {
	return (
		// biome-ignore lint/a11y/useKeyWithClickEvents: false positive
		// biome-ignore lint/a11y/noStaticElementInteractions: false positive
		<span
			className={mc(
				["rounded-full p-1 cursor-pointer"],
				[
					active
						? "dark:bg-violet-700 dark:text-white bg-blue-100 text-blue-600"
						: "text-zinc-400 dark:text-zinc-200",
				]
			)}
			onClick={() => onClick?.()}
		>
			{theme && ThemeIcons[theme] ? ThemeIcons[theme] : ThemeIcons.default}{" "}
		</span>
	);
};

export function ThemeSwitch() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<div
			className={mc(
				[
					"bg-zinc-100 border border-zinc-200 dark:border-zinc-700 gap-1 flex p-0.5 rounded-full",
				],
				["dark:bg-zinc-800"]
			)}
		>
			{ThemeIcons &&
				Object.keys(ThemeIcons)
					.filter((key) => key !== "default")
					.map((key) => {
						return (
							<ThemeSwitchButton
								key={`theme-${key}`}
								theme={key}
								active={mounted && key === theme}
								onClick={() => (mounted ? setTheme(key) : null)}
							/>
						);
					})}
		</div>
	);
}
