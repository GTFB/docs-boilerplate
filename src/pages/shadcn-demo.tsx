import React from 'react';
import Layout from '@theme/Layout';
import { Button } from '../components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/Card';

export default function ShadcnDemo(): React.ReactNode {
  return (
    <Layout
      title="shadcn/ui Demo"
      description="Демонстрация компонентов shadcn/ui в Docusaurus">
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            shadcn/ui Components Demo
          </h1>
          <p className="text-xl text-gray-600">
            Демонстрация интеграции shadcn/ui компонентов в Docusaurus
          </p>
        </div>

        {/* Buttons Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="default">Default Button</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
          
          <div className="flex flex-wrap gap-4 mt-4">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
          </div>
        </section>

        {/* Cards Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card description goes here</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  This is the main content of the card. You can put any content here.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Action</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Another Card</CardTitle>
                <CardDescription>With different content</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  This card demonstrates the flexibility of shadcn/ui components.
                </p>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button variant="outline" size="sm">Cancel</Button>
                <Button size="sm">Save</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Feature Card</CardTitle>
                <CardDescription>Highlighting key features</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-600 space-y-2">
                  <li>• Responsive design</li>
                  <li>• Modern components</li>
                  <li>• Easy customization</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="secondary" className="w-full">Learn More</Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Interactive Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Interactive Elements</h2>
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle>Interactive Demo</CardTitle>
              <CardDescription>Click the buttons to see effects</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Button 
                  onClick={() => alert('Hello from shadcn/ui!')}
                  className="flex-1">
                  Show Alert
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => console.log('Button clicked!')}
                  className="flex-1">
                  Log to Console
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Tailwind Utilities Demo */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Tailwind CSS Utilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white">
              <h3 className="text-xl font-semibold mb-2">Gradient Background</h3>
              <p>This demonstrates Tailwind's gradient utilities working perfectly with shadcn/ui.</p>
            </div>
            
            <div className="p-6 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Custom Styling</h3>
              <p className="text-gray-600">Combining custom Tailwind classes with component variants.</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
