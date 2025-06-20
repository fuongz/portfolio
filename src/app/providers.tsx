"use client";

import { ThemeProvider } from "next-themes";
import { ApolloWrapper } from "@/lib/apollo/apollo-provider";

interface ProvidersProps {
	children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
	return (
		<ApolloWrapper>
			<ThemeProvider attribute="class">
				<main className="mt-0">{children}</main>
			</ThemeProvider>
		</ApolloWrapper>
	);
}
