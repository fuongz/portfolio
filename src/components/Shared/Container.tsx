import type { ReactNode } from "react";

interface ContainerProps {
	children: ReactNode;
	lg?: boolean;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
	return (
		<div className="container max-w-xl mb-4 mx-auto px-4 py-4 xl:p-0">
			{children}
		</div>
	);
};

export { Container };
