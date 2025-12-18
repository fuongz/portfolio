// components/PageTransition.tsx or app/components/PageTransition.tsx
"use client";

import { AnimatePresence, motion, type Variants } from "motion/react";
import { usePathname } from "next/navigation";
import type React from "react";

const variants: Variants = {
	hidden: { opacity: 0, x: 0, y: -20 },
	enter: {
		opacity: 1,
		x: 0,
		y: 0,
		transition: { type: "spring", duration: 0.25, ease: "easeInOut" },
	},
	exit: {
		opacity: 0,
		x: 0,
		y: 20,
		transition: { type: "spring", duration: 0.25, ease: "easeInOut" },
	},
};

const PageTransition = ({ children }: { children: React.ReactNode }) => {
	const pathname = usePathname();
	return (
		<AnimatePresence mode="wait" initial={false}>
			<motion.div
				key={pathname}
				variants={variants}
				initial="hidden"
				animate="enter"
				exit="exit"
			>
				{children}
			</motion.div>
		</AnimatePresence>
	);
};

export default PageTransition;
