interface PageHeaderProps {
	title: string;
	description?: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
	return (
		<div className="pt-4 sm:pt-8 mb-8 sm:mb-12">
			<h1 className="text-lg font-serif sm:text-xl font-semibold text-zinc-900 dark:text-zinc-100">
				{title}
			</h1>
			{description && (
				<p className="text-muted-foreground text-sm mt-0.5">{description}</p>
			)}
		</div>
	);
}
