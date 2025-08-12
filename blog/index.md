---
title: Blog
description: Latest news, tutorials, and insights from our team
---

# Blog

Stay updated with the latest news, tutorials, and insights from our team.

import { Button } from '../src/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../src/components/ui/card';

<div className="my-8 space-y-6">
  <div className="text-center">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">
      Latest Articles
    </h2>
    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
      Discover our latest insights, tutorials, and updates about modern documentation and development practices.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">Tutorial</span>
          <span className="text-sm text-gray-500">5 min read</span>
        </div>
        <CardTitle className="text-xl">Getting Started with shadcn/ui</CardTitle>
        <CardDescription>
          Learn how to integrate modern UI components into your Docusaurus project
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">
          A comprehensive guide to setting up shadcn/ui components in Docusaurus for beautiful, interactive documentation.
        </p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">August 12, 2024</span>
          <Button variant="outline" size="sm">Read More</Button>
        </div>
      </CardContent>
    </Card>

    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Guide</span>
          <span className="text-sm text-gray-500">8 min read</span>
        </div>
        <CardTitle className="text-xl">Building Interactive Documentation</CardTitle>
        <CardDescription>
          Create engaging documentation with React components and Tailwind CSS
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">
          Transform your static documentation into an interactive experience that keeps users engaged and informed.
        </p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">August 10, 2024</span>
          <Button variant="outline" size="sm">Read More</Button>
        </div>
      </CardContent>
    </Card>

    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full">News</span>
          <span className="text-sm text-gray-500">3 min read</span>
        </div>
        <CardTitle className="text-xl">New Features Released</CardTitle>
        <CardDescription>
          Discover the latest updates and improvements to our platform
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">
          Stay up to date with all the new features, improvements, and bug fixes we've released this month.
        </p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">August 8, 2024</span>
          <Button variant="outline" size="sm">Read More</Button>
        </div>
      </CardContent>
    </Card>
  </div>

  <div className="text-center mt-12">
    <Button size="lg" className="px-8">
      View All Articles
    </Button>
  </div>
</div>
