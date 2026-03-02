"use client";

import { useEffect, useState } from "react";

function getStatus() {
	const hour = new Date().getHours();
	if (hour >= 9 && hour < 17) return "at work";
	if (hour >= 17 && hour < 23) return "working on a side project";
	return "sleeping";
}

export function FooterStatus() {
	const [status, setStatus] = useState<string | null>(null);

	useEffect(() => {
		setStatus(getStatus());
	}, []);

	if (!status) return null;

	return (
		<span className="text-xs text-zinc-500 dark:text-zinc-400">
			currently {status}
		</span>
	);
}
