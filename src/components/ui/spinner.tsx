import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";
import { RefreshCw } from "lucide-react";

const spinnerVariants = cva("animate-spin text-muted-foreground", {
	variants: {
		size: {
			default: "size-4",
			sm: "size-3",
			lg: "size-6",
			xl: "size-8",
		},
	},
	defaultVariants: {
		size: "default",
	},
});

export interface SpinnerProps extends VariantProps<typeof spinnerVariants> {
	className?: string;
}

function Spinner({ className, size }: SpinnerProps) {
	return <RefreshCw className={clsx(spinnerVariants({ size }), className)} />;
}

export { Spinner, spinnerVariants };
