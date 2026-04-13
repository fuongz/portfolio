"use client";

import { motion, useInView, type Variants } from "motion/react";
import { type ReactNode, useRef } from "react";

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

type FadeInProps = {
	children: ReactNode;
	className?: string;
	delay?: number;
	direction?: "up" | "down" | "left" | "right";
};

function FadeIn({
	children,
	className,
	delay = 0,
	direction = "up",
}: FadeInProps) {
	const ref = useRef<HTMLDivElement>(null);
	const isInView = useInView(ref, { once: true, margin: "-50px" });

	const directions = {
		up: { y: 20 },
		down: { y: -20 },
		left: { x: 20 },
		right: { x: -20 },
	};

	return (
		<motion.div
			ref={ref}
			className={className}
			initial={{ opacity: 0, ...directions[direction] }}
			animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
			transition={{ duration: 0.4, delay, ease: "easeOut" }}
		>
			{children}
		</motion.div>
	);
}

export { FadeIn, StaggeredItem, StaggeredList };
