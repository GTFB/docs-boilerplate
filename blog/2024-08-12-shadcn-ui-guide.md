---
title: Getting Started with shadcn/ui in Docusaurus
description: Learn how to integrate modern UI components into your Docusaurus project for beautiful, interactive documentation
tags: [tutorial, shadcn-ui, docusaurus, tailwind]
authors: [team]
---

# Getting Started with shadcn/ui in Docusaurus

Learn how to transform your Docusaurus documentation into a modern, interactive experience using shadcn/ui components and Tailwind CSS.

import { Button } from '../src/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '../src/components/ui/card';

## Why shadcn/ui?

shadcn/ui provides a collection of beautifully designed, accessible components built on top of Radix UI and Tailwind CSS. When integrated with Docusaurus, it opens up a world of possibilities:

- **Interactive Documentation**: Users can interact with components directly
- **Modern Design**: Professional, polished appearance
- **Accessibility**: Built-in accessibility features
- **Customization**: Easy to customize and extend

## Live Component Demo

Here's a live example of shadcn/ui components working in your documentation:

<div className="my-8">
  <Card>
    <CardHeader>
      <CardTitle>Interactive Button Demo</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      <p>Click the buttons below to see shadcn/ui components in action:</p>
      <div className="flex gap-2">
        <Button 
          onClick={() => alert('Hello from shadcn/ui!')}
          variant="default">
          Primary Action
        </Button>
        <Button 
          onClick={() => console.log('Secondary clicked')}
          variant="outline">
          Secondary Action
        </Button>
        <Button 
          onClick={() => alert('Destructive action!')}
          variant="destructive">
          Delete
        </Button>
      </div>
    </CardContent>
  </Card>
</div>

## Installation Steps

### 1. Install Dependencies

```bash
npm install tailwindcss postcss autoprefixer
npm install @tailwindcss/postcss
npm install clsx tailwind-merge
npm install @radix-ui/react-slot class-variance-authority
```

### 2. Configure Tailwind CSS

Create `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,md,mdx}',
    './docs/**/*.{js,jsx,ts,tsx,md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
        },
      },
    },
  },
  corePlugins: {
    preflight: false, // Important for Docusaurus compatibility
  },
}
```

### 3. Update PostCSS Configuration

```js
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}
```

### 4. Add Tailwind Directives

In `src/css/custom.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Your custom styles here */
```

## Creating Components

### Button Component

```tsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
```

## Using Components in MDX

One of the most powerful features is using these components directly in your MDX documentation:

```mdx
---
title: My Documentation Page
---

import { Button } from '../src/components/ui/button';

# Interactive Documentation

<Button onClick={() => alert('Hello!')}>
  Click me!
</Button>
```

## Best Practices

1. **Keep Components Simple**: Focus on reusability and consistency
2. **Use Relative Imports**: Docusaurus doesn't support TypeScript path aliases by default
3. **Test in MDX**: Ensure components work both in React pages and MDX files
4. **Maintain Accessibility**: Leverage Radix UI's built-in accessibility features

## Next Steps

- Explore our [Component Library](/docs/shadcn-components) for more examples
- Check out the [shadcn/ui Demo](/shadcn-demo) page
- Learn about [customizing themes](/docs/technical/architecture)

---

*This guide demonstrates the power of combining Docusaurus with modern UI components. Start building beautiful, interactive documentation today!*
