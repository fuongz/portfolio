import { gql } from "@apollo/client";
import type { Metadata } from "next";
import { HomePageRoute } from "@/components/pages/home";
import { query } from "@/lib/apollo/apollo-client";

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "fuongz",
		description:
			"Personal website of Phuong Phung, topics: technology, slice of life.",
		keywords:
			"phuong phung, technology, tech blog, phuong phung portfolio, trang cá nhân phương phùng, phương phùng",
	};
}

const QUERY = gql`
query GetContributionCalendar($from: DateTime!, $to: DateTime!) {
  user(login: "fuongz") {
    contributionsCollection(from: $from, to: $to) {
      contributionCalendar {
        weeks {
          contributionDays {
            date
            contributionCount
            color
          }
        }
      }
    }
  }
}
`;

export default async function HomePage() {
	const today = new Date();
	const to = today.toISOString();
	const fromDate = new Date(today);
	fromDate.setDate(fromDate.getDate() - 35 * 7);
	const from = fromDate.toISOString();
	const { data } = await query({
		query: QUERY,
		variables: { from, to },
		context: {
			fetchOptions: {
				next: { revalidate: 60 },
			},
		},
	});
	const { weeks } = data.user.contributionsCollection.contributionCalendar;
	return <HomePageRoute contributes={weeks} />;
}
