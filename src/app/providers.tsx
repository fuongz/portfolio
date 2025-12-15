"use client";

import { ThemeProvider } from "next-themes";
import { ApolloWrapper } from "@/lib/apollo/apollo-provider";

interface ProvidersProps {
	children: React.ReactNode;
}

export default function Providers({ children, ...props }: ProvidersProps) {
	return (
		<ApolloWrapper>
			<ThemeProvider
				attribute="class"
				defaultTheme="system"
				enableSystem
				disableTransitionOnChange
				{...props}
			>
				<main className="mt-0 relative">
					<div className="absolute top-0 -z-10 h-full w-full bg-background">
						<div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-purple-200 dark:bg-purple-950 opacity-50 blur-[80px]"></div>
					</div>
					{children}
				</main>
			</ThemeProvider>
		</ApolloWrapper>
	);
}
