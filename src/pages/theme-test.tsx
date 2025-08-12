import React from 'react';
import Layout from '@theme/Layout';
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Badge,
  Alert,
  AlertTitle,
  AlertDescription,
  Hero,
  FeatureGrid,
  Pricing,
  Testimonial,
  Newsletter,
  Statistics,
  CallToAction,
  Navigation
} from '../components/ui';

export default function ThemeTestPage(): React.ReactNode {
  return (
    <Layout
      title="Theme Test"
      description="Test page for light and dark themes">
      
      <div className="container mx-auto px-4">
        {/* Hero Component */}
        <section className="relative isolate px-6 lg:px-8 mb-16 min-h-[calc(100vh-4rem)] flex items-center justify-center">
          <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
            <div 
              style={{clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}} 
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            ></div>
          </div>
          <div className="mx-auto max-w-2xl text-center relative z-10">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Announcing our next round of funding. <a href="#" className="font-semibold text-indigo-600"><span aria-hidden="true" className="absolute inset-0"></span>Read more <span aria-hidden="true">→</span></a>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl font-inter">
                Data to enrich your online business
              </h1>
              <p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl leading-8">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Get started
                </a>
                <a href="#" className="text-sm leading-6 font-semibold text-gray-900">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
            <div 
              style={{clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}} 
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            ></div>
          </div>
        </section>

        {/* Button Variants */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Button Variants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Default Button</CardTitle>
                <CardDescription>Standard button with primary styling</CardDescription>
              </CardHeader>
              <CardContent>
                <Button>Click Me</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Secondary Button</CardTitle>
                <CardDescription>Secondary button variant</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="secondary">Secondary</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Outline Button</CardTitle>
                <CardDescription>Button with outline styling</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline">Outline</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Ghost Button</CardTitle>
                <CardDescription>Ghost button variant</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost">Ghost</Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Badge Variants */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Badge Variants</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Badge variant="default">Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        </section>

        {/* Alert Variants */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Alert Variants</h2>
          <div className="space-y-4 max-w-2xl mx-auto">
            <Alert>
              <AlertTitle>Default Alert</AlertTitle>
              <AlertDescription>
                This is a default alert message that provides important information to the user.
              </AlertDescription>
            </Alert>

            <Alert variant="destructive">
              <AlertTitle>Destructive Alert</AlertTitle>
              <AlertDescription>
                This is a destructive alert that warns about potential issues or errors.
              </AlertDescription>
            </Alert>

            <Alert variant="warning">
              <AlertTitle>Warning Alert</AlertTitle>
              <AlertDescription>
                This is a warning alert that cautions users about important considerations.
              </AlertDescription>
            </Alert>

            <Alert variant="info">
              <AlertTitle>Info Alert</AlertTitle>
              <AlertDescription>
                This is an informational alert that provides helpful details and context.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Feature Grid</h2>
          <FeatureGrid
            title="Amazing Features"
            subtitle="Discover what makes our platform special"
            description="Our platform is built with cutting-edge technology and user experience in mind. Every feature is designed to make your work more efficient and enjoyable."
            features={[
              {
                title: "Lightning Fast",
                description: "Built for speed and performance",
                icon: "⚡"
              },
              {
                title: "Secure by Design",
                description: "Enterprise-grade security features",
                icon: "🔒"
              },
              {
                title: "Easy to Use",
                description: "Intuitive interface for everyone",
                icon: "🎯"
              },
              {
                title: "24/7 Support",
                description: "Round-the-clock customer support",
                icon: "🛟"
              }
            ]}
          />
        </section>

        {/* Statistics */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Statistics</h2>
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Our Impact in Numbers</h3>
            <p className="text-lg text-muted-foreground">See the real results our platform delivers</p>
          </div>
          <Statistics
            stats={[
              { label: "Active Users", value: "10K+" },
              { label: "Countries", value: "50+" },
              { label: "Uptime", value: "99.9%" },
              { label: "Customer Satisfaction", value: "98%" }
            ]}
          />
        </section>

        {/* Testimonial */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Testimonial</h2>
          <div className="max-w-4xl mx-auto">
            <Testimonial
              quote="This platform has completely transformed how we work. The features are incredible and the support team is amazing!"
              author={{
                name: "Sarah Johnson",
                role: "CEO",
                company: "TechCorp Inc.",
                avatar: "/img/avatar-placeholder.jpg"
              }}
            />
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Pricing Plans</h2>
          <Pricing
            title="Choose Your Plan"
            subtitle="Select the perfect plan for your needs"
            description="Find the perfect plan that fits your needs and budget. All plans include our core features with different levels of support and capacity."
            tiers={[
              {
                name: "Starter",
                price: "$9",
                period: "month",
                description: "Perfect for individuals and small projects",
                features: [
                  { text: "Up to 5 projects" },
                  { text: "Basic support" },
                  { text: "1GB storage" }
                ],
                cta: {
                  text: "Get Started",
                  href: "#",
                  variant: "primary" as const
                },
                popular: false
              },
              {
                name: "Professional",
                price: "$29",
                period: "month",
                description: "Ideal for growing teams and businesses",
                features: [
                  { text: "Up to 25 projects" },
                  { text: "Priority support" },
                  { text: "10GB storage" },
                  { text: "Advanced analytics" }
                ],
                cta: {
                  text: "Start Free Trial",
                  href: "#",
                  variant: "primary" as const
                },
                popular: true
              },
              {
                name: "Enterprise",
                price: "$99",
                period: "month",
                description: "For large organizations with complex needs",
                features: [
                  { text: "Unlimited projects" },
                  { text: "24/7 support" },
                  { text: "100GB storage" },
                  { text: "Custom integrations" },
                  { text: "Dedicated account manager" }
                ],
                cta: {
                  text: "Contact Sales",
                  href: "#",
                  variant: "secondary" as const
                },
                popular: false
              }
            ]}
          />
        </section>

        {/* Newsletter */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Newsletter Signup</h2>
          <div className="max-w-2xl mx-auto">
            <Newsletter
              title="Stay Updated"
              description="Get the latest news and updates delivered to your inbox"
              placeholder="Enter your email address"
              buttonText="Subscribe"
              features={[
                {
                  icon: "📧",
                  title: "Weekly Updates",
                  description: "Get the latest features and improvements"
                },
                {
                  icon: "🚀",
                  title: "Early Access",
                  description: "Be the first to try new features"
                },
                {
                  icon: "💡",
                  title: "Tips & Tricks",
                  description: "Learn how to use our platform better"
                }
              ]}
            />
          </div>
        </section>

        {/* Call to Action */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Call to Action</h2>
          <CallToAction
            title="Ready to Get Started?"
            description="Join thousands of satisfied customers today"
            primaryAction={{
              text: "Start Free Trial",
              href: "#"
            }}
            secondaryAction={{
              text: "Schedule Demo",
              href: "#"
            }}
          />
        </section>

        {/* Navigation Component */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Navigation Component</h2>
          <div className="border border-border rounded-lg overflow-hidden relative">
            <Navigation />
          </div>
        </section>

        {/* Exact Header Copy */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Exact Header Copy</h2>
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <header className="relative inset-x-0 top-0 z-50">
              <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                  <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <img src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="" className="h-8 w-auto" />
                  </a>
                </div>
                <div className="flex lg:hidden">
                  <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                    <span className="sr-only">Open main menu</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" data-slot="icon" aria-hidden="true" className="size-6">
                      <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                  <a href="#" className="text-sm leading-6 font-semibold text-gray-900">Product</a>
                  <a href="#" className="text-sm leading-6 font-semibold text-gray-900">Features</a>
                  <a href="#" className="text-sm leading-6 font-semibold text-gray-900">Marketplace</a>
                  <a href="#" className="text-sm leading-6 font-semibold text-gray-900">Company</a>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                  <a href="#" className="text-sm leading-6 font-semibold text-gray-900">Log in <span aria-hidden="true">→</span></a>
                </div>
              </nav>
            </header>
          </div>
        </section>

        {/* Color Palette Test */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Color Palette Test</h2>
          <Card>
            <CardHeader>
              <CardTitle>CSS Custom Properties for Colors</CardTitle>
              <CardDescription>
                Testing CSS custom properties for colors
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 bg-background border border-border rounded">
                  <div className="text-sm font-medium">Background</div>
                  <div className="text-xs text-muted-foreground">bg-background</div>
                </div>
                <div className="p-4 bg-foreground text-background border border-border rounded">
                  <div className="text-sm font-medium">Foreground</div>
                  <div className="text-xs text-background/70">bg-foreground</div>
                </div>
                <div className="p-4 bg-primary text-primary-foreground border border-border rounded">
                  <div className="text-sm font-medium">Primary</div>
                  <div className="text-xs text-primary-foreground/70">bg-primary</div>
                </div>
                <div className="p-4 bg-muted text-muted-foreground border border-border rounded">
                  <div className="text-sm font-medium">Muted</div>
                  <div className="text-xs text-muted-foreground/70">bg-muted</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </Layout>
  );
}
