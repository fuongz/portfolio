"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

type StaggeredListProps = {
	children: ReactNode;
	className?: string;
	delay?: number;
};

const listVariants: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.08,
		},
	},
};

const itemVariants: Variants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			type: "spring",
			stiffness: 300,
			damping: 20,
		},
	},
};

function StaggeredList({ children, className, delay = 0 }: StaggeredListProps) {
	return (
		<motion.div
			className={className}
			variants={listVariants}
			initial="hidden"
			animate="visible"
			transition={{ delay }}
		>
			{children}
		</motion.div>
	);
}

function StaggeredItem({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) {
	return (
		<motion.div className={className} variants={itemVariants}>
			{children}
		</motion.div>
	);
}

export { StaggeredItem, StaggeredList };
