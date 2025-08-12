# UI Components Library

This document describes the comprehensive UI component library built with Tailwind CSS and React, designed to provide a consistent and beautiful design system for the documentation site.

## Component Structure

The component library is organized into logical groups:

- **Core Components**: Basic building blocks (Button, Card, Badge, Alert)
- **Layout Components**: Page structure components (DocsLayout, Navigation)
- **Content Components**: Rich content display components (Hero, FeatureGrid, Pricing, etc.)
- **Utility Components**: Specialized components for specific use cases

## Available Components

### Core Components

#### Button & ButtonLink
Versatile button components with multiple variants and sizes.

```tsx
import { Button, ButtonLink } from '../components/ui/Button';

// Primary button
<Button variant="default" size="lg">Get Started</Button>

// Secondary button with link
<ButtonLink to="/docs" variant="outline">View Docs</ButtonLink>
```

**Variants**: `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`
**Sizes**: `default`, `sm`, `lg`, `icon`

#### Card Components
Flexible card system for content organization.

```tsx
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../components/ui/Card';

<Card>
  <CardHeader>
    <CardTitle>Feature Title</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Feature description content</p>
  </CardContent>
  <CardFooter>
    <Button>Learn More</Button>
  </CardFooter>
</Card>
```

#### Badge
Status indicators and labels.

```tsx
import { Badge } from '../components/ui/Badge';

<Badge variant="default">New</Badge>
<Badge variant="secondary">Beta</Badge>
<Badge variant="destructive">Deprecated</Badge>
```

**Variants**: `default`, `secondary`, `destructive`, `outline`

#### Alert
Notification and information display.

```tsx
import { Alert, AlertTitle, AlertDescription } from '../components/ui/Alert';

<Alert variant="info">
  <AlertTitle>Information</AlertTitle>
  <AlertDescription>This is an informational message.</AlertDescription>
</Alert>
```

**Variants**: `default`, `destructive`, `warning`, `info`

### Layout Components

#### DocsLayout
Main documentation page layout with sidebar navigation.

```tsx
import DocsLayout from '../components/DocsLayout';

<DocsLayout title="Page Title" description="Page description">
  <div>Page content goes here</div>
</DocsLayout>
```

#### Navigation
Responsive navigation header with mobile menu support.

```tsx
import { Navigation } from '../components/ui/Navigation';

<Navigation className="custom-class" />
```

### Content Components

#### Hero
Landing page hero section with customizable content and actions.

```tsx
import { Hero } from '../components/ui/Hero';

<Hero
  title="Main Headline"
  subtitle="Supporting text description"
  primaryAction={{
    text: "Get Started",
    href: "/docs"
  }}
  secondaryAction={{
    text: "Learn More",
    href: "/about"
  }}
  announcement={{
    text: "New feature available!",
    linkText: "Learn more",
    linkHref: "/news"
  }}
/>
```

#### FeatureGrid
Feature showcase with icons, descriptions, and optional images.

```tsx
import { FeatureGrid } from '../components/ui/FeatureGrid';

<FeatureGrid
  title="Feature Section Title"
  subtitle="Section Subtitle"
  description="Overall description of the features"
  features={[
    {
      title: "Feature Name",
      description: "Feature description",
      icon: <svg>...</svg>
    }
  ]}
  image={{
    src: "/path/to/image.jpg",
    alt: "Image description"
  }}
/>
```

#### Pricing
Pricing table with multiple tiers and features.

```tsx
import { Pricing } from '../components/ui/Pricing';

<Pricing
  title="Choose Your Plan"
  subtitle="Pricing"
  description="Select the plan that fits your needs"
  tiers={[
    {
      name: "Basic",
      price: "$9",
      period: "month",
      description: "Perfect for individuals",
      features: [{ text: "Feature 1" }, { text: "Feature 2" }],
      cta: {
        text: "Get Started",
        href: "/signup",
        variant: "secondary"
      }
    }
  ]}
/>
```

#### Testimonial
Customer testimonial display with author information.

```tsx
import { Testimonial } from '../components/ui/Testimonial';

<Testimonial
  quote="Customer testimonial text here"
  author={{
    name: "John Doe",
    role: "CEO",
    company: "Company Name",
    avatar: "/path/to/avatar.jpg"
  }}
  logo={{
    src: "/path/to/logo.svg",
    alt: "Company logo"
  }}
/>
```

#### Newsletter
Email subscription form with feature highlights.

```tsx
import { Newsletter } from '../components/ui/Newsletter';

<Newsletter
  title="Stay Updated"
  description="Get the latest news and updates"
  placeholder="Enter your email"
  buttonText="Subscribe"
  features={[
    {
      icon: <svg>...</svg>,
      title: "Weekly Updates",
      description: "Get news every week"
    }
  ]}
/>
```

#### Statistics
Key metrics and statistics display.

```tsx
import { Statistics } from '../components/ui/Statistics';

<Statistics
  stats={[
    { label: "Users", value: "10,000+" },
    { label: "Downloads", value: "50,000+" },
    { label: "Countries", value: "25" }
  ]}
/>
```

#### CallToAction
Prominent call-to-action section with background decoration.

```tsx
import { CallToAction } from '../components/ui/CallToAction';

<CallToAction
  title="Ready to get started?"
  description="Join thousands of users today"
  primaryAction={{
    text: "Sign Up Now",
    href: "/signup"
  }}
  secondaryAction={{
    text: "Learn More",
    href: "/about"
  }}
  image={{
    src: "/path/to/image.jpg",
    alt: "App screenshot"
  }}
/>
```

## Styling

All components use Tailwind CSS classes for consistent styling. The design system includes:

- **Color Palette**: Consistent color variables for primary, secondary, and neutral colors
- **Typography**: Standardized text sizes and font weights
- **Spacing**: Consistent spacing scale using Tailwind's spacing utilities
- **Shadows**: Subtle shadows and depth for visual hierarchy
- **Borders**: Consistent border radius and border styles

## Responsive Design

All components are built with mobile-first responsive design:

- **Mobile**: Optimized for small screens with appropriate touch targets
- **Tablet**: Adaptive layouts for medium-sized screens
- **Desktop**: Full-featured layouts for large screens

## Customization

Components can be customized through:

1. **Props**: Component-specific configuration options
2. **CSS Classes**: Additional Tailwind classes via `className` prop
3. **CSS Variables**: Custom CSS properties for theming
4. **Component Composition**: Combining multiple components for complex layouts

## Usage Examples

### Complete Page Example
See `src/pages/components-showcase.tsx` for a comprehensive example of all components working together.

### Basic Page Structure
```tsx
import Layout from '@theme/Layout';
import { Navigation } from '../components/ui/Navigation';
import { Hero } from '../components/ui/Hero';
import { FeatureGrid } from '../components/ui/FeatureGrid';

export default function MyPage() {
  return (
    <Layout title="My Page" description="Page description">
      <div className="bg-white">
        <Navigation />
        <Hero
          title="Welcome"
          subtitle="This is my page"
          primaryAction={{
            text: "Get Started",
            href: "/docs"
          }}
        />
        <FeatureGrid
          title="Features"
          subtitle="What we offer"
          description="Our key features"
          features={[]}
        />
      </div>
    </Layout>
  );
}
```

## Best Practices

1. **Consistent Spacing**: Use Tailwind's spacing scale consistently
2. **Accessibility**: All components include proper ARIA labels and semantic HTML
3. **Performance**: Components are optimized for minimal re-renders
4. **TypeScript**: Full TypeScript support with proper interfaces
5. **Testing**: Components are designed to be easily testable

## Future Enhancements

- **Dark Mode**: Support for dark/light theme switching
- **Animation**: Smooth transitions and micro-interactions
- **Internationalization**: Multi-language support
- **Accessibility**: Enhanced screen reader support
- **Performance**: Lazy loading and code splitting optimizations

## Component Dependencies

All components are built with:
- **React 18+**: Modern React features and hooks
- **TypeScript**: Type safety and better developer experience
- **Tailwind CSS**: Utility-first CSS framework
- **Docusaurus**: Integration with the documentation framework

## Getting Help

For questions about components or to request new features:
1. Check the component documentation
2. Review the showcase page examples
3. Examine the component source code
4. Create an issue in the project repository
