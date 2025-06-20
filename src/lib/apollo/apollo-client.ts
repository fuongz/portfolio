import { HttpLink } from "@apollo/client";
import {
	ApolloClient,
	InMemoryCache,
	registerApolloClient,
} from "@apollo/client-integration-nextjs";

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
	return new ApolloClient({
		cache: new InMemoryCache(),
		link: new HttpLink({
			uri: "https://api.github.com/graphql",
			headers: {
				Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
			},
		}),
		defaultOptions: {
			query: {
				fetchPolicy: "cache-first",
				errorPolicy: "all",
			},
			watchQuery: {
				fetchPolicy: "cache-and-network",
				errorPolicy: "all",
			},
		},
	});
});
