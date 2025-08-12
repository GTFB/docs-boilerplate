import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home(): React.ReactNode {
  return (
    <Layout
      title="Documentation"
      description="Navigate through our guides">
      
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="text-center">
            <h1 className="hero-title">
              Welcome to
              <span className="block text-primary">Documentation</span>
            </h1>
            <p className="hero-description">
              Navigate through our comprehensive guides and learn how to use our platform effectively.
            </p>
            <div className="hero-actions">
              <Link to="/docs/business/project-overview" className="btn btn-primary">
                Get Started
              </Link>
              <Link to="/docs/technical/architecture" className="btn btn-outline">
                View Architecture
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-tight">
              Explore Our Documentation
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Find everything you need to get started and succeed with our platform.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            
            <div className="card">
              <div className="card-header">
                <h3 className="card-title font-tight">Business Documentation</h3>
                <p className="card-description">
                  Project overview, goals, and business objectives.
                </p>
              </div>
              <div className="card-content">
                <p>Understand the business context and strategic goals of our platform.</p>
              </div>
              <div className="card-footer">
                <Link to="/docs/business/project-overview" className="btn btn-primary">
                  View Business Docs
                </Link>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <h3 className="card-title font-tight">Technical Documentation</h3>
                <p className="card-description">
                  Architecture, tech stack, and implementation details.
                </p>
              </div>
              <div className="card-content">
                <p>Deep dive into the technical architecture and technology choices.</p>
              </div>
              <div className="card-footer">
                <Link to="/docs/technical/architecture" className="btn btn-outline">
                  View Technical Docs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
