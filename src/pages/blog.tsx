import React from 'react';
import Layout from '@theme/Layout';
import { Button } from '../components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card';

export default function BlogPage(): React.ReactNode {
  const featuredPosts = [
    {
      title: 'Getting Started with shadcn/ui in Docusaurus',
      description: 'Learn how to integrate modern UI components into your Docusaurus project for beautiful, interactive documentation',
      tags: ['tutorial', 'shadcn-ui', 'docusaurus'],
      date: 'August 12, 2024',
      readTime: '5 min read',
      category: 'Tutorial',
      categoryColor: 'bg-blue-100 text-blue-800'
    },
    {
      title: 'Building Interactive Documentation with React Components',
      description: 'Transform your static documentation into an engaging, interactive experience that keeps users engaged and informed',
      tags: ['guide', 'react', 'documentation'],
      date: 'August 10, 2024',
      readTime: '8 min read',
      category: 'Guide',
      categoryColor: 'bg-green-100 text-green-800'
    }
  ];

  const categories = [
    { name: 'Tutorials', count: 5, color: 'bg-blue-100 text-blue-800' },
    { name: 'Guides', count: 3, color: 'bg-green-100 text-green-800' },
    { name: 'News', count: 2, color: 'bg-purple-100 text-purple-800' },
    { name: 'Tips & Tricks', count: 4, color: 'bg-orange-100 text-orange-800' }
  ];

  const tags = [
    'shadcn-ui', 'docusaurus', 'tailwind', 'react', 'documentation', 'user-experience'
  ];

  return (
    <Layout
      title="Blog - Latest Insights and Tutorials"
      description="Stay updated with the latest news, tutorials, and insights from our team">
      
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 font-tight">
            Documentation Blog
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Stay updated with the latest insights, tutorials, and best practices for building 
            modern, interactive documentation with Docusaurus and shadcn/ui.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="px-8">
              Subscribe to Updates
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              View All Posts
            </Button>
          </div>
        </div>

        {/* Featured Posts */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center font-tight">
            Featured Articles
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-3 py-1 text-sm font-medium rounded-full ${post.categoryColor}`}>
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-2xl leading-tight font-tight">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {post.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-md"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <Button variant="outline" size="sm">
                      Read Article
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Categories and Tags */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Categories */}
          <Card>
            <CardHeader>
              <CardTitle className="font-tight">Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {categories.map((category) => (
                  <div key={category.name} className="flex items-center justify-between">
                    <span className={`px-3 py-1 text-sm font-medium rounded-full ${category.color}`}>
                      {category.name}
                    </span>
                    <span className="text-sm text-gray-500">{category.count} posts</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Tags */}
          <Card>
            <CardHeader>
              <CardTitle className="font-tight">Popular Tags</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 cursor-pointer transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Newsletter Signup */}
        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-white font-tight">
              Stay Updated
            </CardTitle>
            <CardDescription className="text-blue-100">
              Get the latest articles and tutorials delivered to your inbox
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button variant="secondary" className="whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
