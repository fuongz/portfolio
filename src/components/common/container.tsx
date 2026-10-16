import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
	children: ReactNode;
	className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
	return (
		<div className={cn("mx-auto w-[90vw] sm:w-[520px]", className)}>
			{children}
		</div>
	);
};

export { Container };
