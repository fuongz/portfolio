interface PageHeaderProps {
	title: string;
	description?: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
	return (
		<div className="mb-10 animate-intro">
			<h1 className="font-semibold text-neutral-900 dark:text-neutral-100">
				{title}
			</h1>
			{description && (
				<p className="mt-1 font-light text-neutral-600 dark:text-neutral-400">
					{description}
				</p>
			)}
		</div>
	);
}
