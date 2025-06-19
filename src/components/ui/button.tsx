import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { type VariantProps, cva } from 'class-variance-authority'
import React from 'react'

const buttonVariants = cva(
  'cursor-pointer flex gap-1 hover:scale-103 duration-400 hover:duration-400 hover:transition transition items-center border rounded font-medium',
  {
    variants: {
      variant: {
        default:
          'bg-white border-zinc-200 hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800 text-zinc-800 dark:bg-zinc-900 dark:text-zinc-200',
        secondary:
          'bg-blue-100 border-blue-200 hover:bg-blue-200 dark:border-blue-700 dark:hover:bg-blue-800 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      },
      size: {
        default: 'text-sm px-4 py-1',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

interface Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button }
