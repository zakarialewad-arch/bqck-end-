import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "../../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transform hover:-translate-y-0.5",
  {
    variants: {
      variant: {
        // --- هذا هو الزر الرئيسي ديالنا ---
        default:
          "bg-amber-600 text-white shadow-lg hover:bg-amber-700 hover:shadow-xl",
        // --- وهذا زر التدمير (الحذف) ---
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        // --- وهذا الزر الثانوي (المحدد) ---
        outline:
          "border-2 border-amber-600 bg-transparent text-amber-700 hover:bg-amber-100",
        // --- وهذا زر بسيط ---
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-9 rounded-md px-4",
        lg: "h-12 rounded-md px-8 text-md", // كبرنا الحجم شوية
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }