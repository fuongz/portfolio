/** biome-ignore-all lint/suspicious/noArrayIndexKey: false positive */
"use client";

import type { TContributeGraph } from "types/contribute-graph";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui";

function formatDate(dateString: string): string {
	const date = new Date(dateString);
	return date.toLocaleDateString("en-US", {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	});
}

const COLORS: {
	[key: string]: string;
} = {
	"#ebedf0": "bg-zinc-100 dark:bg-zinc-900",
	"#9be9a8": "bg-green-200 dark:bg-green-950",
	"#30a14e": "bg-green-300 dark:bg-green-800",
	"#40c463": "bg-green-400 dark:bg-green-600",
	"#216e39": "bg-green-500 dark:bg-green-400",
};

export function ContributeGraph({ weeks }: { weeks: TContributeGraph }) {
	const totalContributions = weeks.reduce((total, week) => {
		return (
			total +
			week.contributionDays.reduce((weekTotal, day) => {
				return weekTotal + day.contributionCount;
			}, 0)
		);
	}, 0);
	const totalDays = weeks.reduce((total, week) => {
		return total + week.contributionDays.length;
	}, 0);

	return (
		<>
			<div className="flex mb-4 justify-between">
				<div className="text-sm text-zinc-400">
					<span className="text-bold dark:text-white text-zinc-900">
						{totalContributions}
					</span>{" "}
					contributions in the last{" "}
					<span className="text-bold dark:text-white text-zinc-900">
						{totalDays}
					</span>{" "}
					days
				</div>

				<div className="flex gap-2 items-center text-xs text-zinc-400">
					<span>Less</span>
					<div className="flex gap-0.5">
						{Object.keys(COLORS).map((color, index) => (
							<div
								key={`color-${index}`}
								className={`w-3 h-3 rounded-sm cursor-pointer transition-all ${COLORS[color]}`}
							></div>
						))}
					</div>
					<span>More</span>
				</div>
			</div>
			<div className="space-y-4 w-full">
				{/* Contribution grid */}
				<div className="flex gap-1 overflow-x-auto">
					{weeks.map((week, weekIndex) => (
						<div key={`week-${weekIndex}`} className="flex flex-col gap-1">
							{week.contributionDays.map((day, dayIndex) => (
								<Tooltip key={`day-${weekIndex}-${dayIndex}`}>
									<TooltipTrigger asChild>
										<div
											className={`w-3 h-3 rounded-sm cursor-pointer transition-all hover:ring-2 hover:ring-gray-400 ${COLORS[day.color]}`}
											title={
												day.date
													? `${day.contributionCount} contributions on ${formatDate(day.date)}`
													: ""
											}
										/>
									</TooltipTrigger>
									<TooltipContent>
										{day.date
											? `${day.contributionCount} contributions on ${formatDate(day.date)}`
											: ""}
									</TooltipContent>
								</Tooltip>
							))}
						</div>
					))}
				</div>
			</div>
		</>
	);
}
