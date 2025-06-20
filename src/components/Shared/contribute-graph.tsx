/** biome-ignore-all lint/suspicious/noArrayIndexKey: false positive */
"use client";

import type { TContributeGraph } from "types/contribute-graph";

function formatDate(dateString: string): string {
	const date = new Date(dateString);
	return date.toLocaleDateString("en-US", {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	});
}

export function ContributeGraph({ weeks }: { weeks: TContributeGraph }) {
	const totalContributions = weeks.reduce((total, week) => {
		return (
			total +
			week.contributionDays.reduce((weekTotal, day) => {
				return weekTotal + day.contributionCount;
			}, 0)
		);
	}, 0);

	return (
		<>
			<div className="mb-4 text-sm text-zinc-400 ml-auto">
				<b>{totalContributions}</b> contributions in the last <b>{35 * 7}</b>{" "}
				days
			</div>
			<div className="space-y-4 w-full">
				{/* Contribution grid */}
				<div className="flex gap-1 overflow-x-auto">
					{weeks.map((week, weekIndex) => (
						<div key={`week-${weekIndex}`} className="flex flex-col gap-1">
							{week.contributionDays.map((day, dayIndex) => (
								<div
									key={`day-${weekIndex}-${dayIndex}`}
									className={`w-3 h-3 rounded-sm cursor-pointer transition-all hover:ring-2 hover:ring-gray-400`}
									style={{
										backgroundColor: day.color,
									}}
									title={
										day.date
											? `${day.contributionCount} contributions on ${formatDate(day.date)}`
											: ""
									}
								/>
							))}
						</div>
					))}
				</div>
			</div>
		</>
	);
}
