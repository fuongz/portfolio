"use client";

import { HttpLink } from "@apollo/client";
import {
	ApolloClient,
	ApolloNextAppProvider,
	InMemoryCache,
} from "@apollo/client-integration-nextjs";

// have a function to create a client for you
function makeClient() {
	const httpLink = new HttpLink({
		uri: "https://api.github.com/graphql",
		fetchOptions: {
			headers: {
				Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
			},
		},
	});

	// use the `ApolloClient` from "@apollo/client-integration-nextjs"
	return new ApolloClient({
		// use the `InMemoryCache` from "@apollo/client-integration-nextjs"
		cache: new InMemoryCache(),
		link: httpLink,
	});
}

// you need to create a component to wrap your app in
export function ApolloWrapper({ children }: React.PropsWithChildren) {
	return (
		<ApolloNextAppProvider makeClient={makeClient}>
			{children}
		</ApolloNextAppProvider>
	);
}
