import type { ReactNode } from "react";

interface ContainerProps {
	children: ReactNode;
	lg?: boolean;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
	return (
		<div className="container max-w-2xl sm:mb-4 mx-auto px-4 sm:px-6 py-4 sm:py-6 xl:p-0">
			{children}
		</div>
	);
};

export { Container };
