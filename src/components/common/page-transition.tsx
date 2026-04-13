"use client";

import { motion, type Variants } from "motion/react";
import { usePathname } from "next/navigation";
import type React from "react";

const variants: Variants = {
	hidden: { opacity: 0, y: 8 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.2, ease: "easeOut" },
	},
};

const PageTransition = ({ children }: { children: React.ReactNode }) => {
	const pathname = usePathname();
	return (
		<motion.div
			key={pathname}
			variants={variants}
			initial="hidden"
			animate="visible"
		>
			{children}
		</motion.div>
	);
};

export default PageTransition;
