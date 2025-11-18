import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const enhancedButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-primary hover:bg-primary-accent hover:shadow-accent active:scale-95",
        secondary:
          "bg-secondary text-secondary-foreground hover:opacity-90 active:scale-95",
        outline:
          "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground active:scale-95",
        ghost: "hover:bg-muted hover:text-foreground active:scale-95",
        success:
          "bg-success text-white shadow-primary hover:opacity-90 active:scale-95",
        warning:
          "bg-warning text-white shadow-primary hover:opacity-90 active:scale-95",
        danger:
          "bg-destructive text-destructive-foreground shadow-primary hover:opacity-90 active:scale-95",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3 text-xs",
        lg: "h-11 rounded-md px-8 text-base",
        xl: "h-12 rounded-md px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface EnhancedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof enhancedButtonVariants> {
  asChild?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
}

const EnhancedButton = React.forwardRef<HTMLButtonElement, EnhancedButtonProps>(
  ({ className, variant, size, asChild = false, loading, icon, children, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(enhancedButtonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            {children}
          </>
        ) : (
          <>
            {icon && <span className="inline-flex">{icon}</span>}
            {children}
          </>
        )}
      </Comp>
    );
  }
);

EnhancedButton.displayName = "EnhancedButton";

export { EnhancedButton, enhancedButtonVariants };
