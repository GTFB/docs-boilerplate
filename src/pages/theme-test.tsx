import React from 'react';
import Layout from '@theme/Layout';
import { Button } from '../components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card';

export default function ThemeTestPage(): React.ReactNode {
  return (
    <Layout
      title="Theme Test"
      description="Test page for light and dark themes">
      
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6 font-tight">
            Theme Test Page
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            This page is designed to test both light and dark themes. 
            Use the theme toggle in the navbar to switch between themes.
          </p>
        </div>

        {/* Theme Test Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="font-tight">Light Theme</CardTitle>
              <CardDescription>
                This card should look good in light theme
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                The background should be white and text should be dark in light theme.
              </p>
              <Button size="sm">Light Theme Button</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-tight">Dark Theme</CardTitle>
              <CardDescription>
                This card should look good in dark theme
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                The background should be dark and text should be light in dark theme.
              </p>
              <Button size="sm">Dark Theme Button</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-tight">Color Test</CardTitle>
              <CardDescription>
                Testing various color classes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-primary">Primary Text</div>
                <div className="text-muted-foreground">Muted Text</div>
                <div className="text-foreground">Foreground Text</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Typography Test */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="font-tight">Typography Test</CardTitle>
            <CardDescription>
              Testing different font sizes and weights
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold font-tight">Heading 1 (text-4xl)</h1>
              <h2 className="text-3xl font-semibold font-tight">Heading 2 (text-3xl)</h2>
              <h3 className="text-2xl font-semibold font-tight">Heading 3 (text-2xl)</h3>
              <h4 className="text-xl font-semibold font-tight">Heading 4 (text-xl)</h4>
              <p className="text-lg">Large paragraph text (text-lg)</p>
              <p className="text-base">Base paragraph text (text-base)</p>
              <p className="text-sm">Small paragraph text (text-sm)</p>
              <p className="text-xs">Extra small text (text-xs)</p>
            </div>
          </CardContent>
        </Card>

        {/* Color Palette Test */}
        <Card>
          <CardHeader>
            <CardTitle className="font-tight">Color Palette Test</CardTitle>
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
      </div>
    </Layout>
  );
}
