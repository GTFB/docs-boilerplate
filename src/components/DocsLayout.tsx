import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

interface DocsLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export default function DocsLayout({ children, title, description }: DocsLayoutProps) {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={title || `Documentation - ${siteConfig.title}`}
      description={description || 'Comprehensive documentation and guides'}>
      
      <div className="docs-container">
        <div className="docs-layout">
          {/* Sidebar */}
          <aside className="docs-sidebar">
            <div className="sidebar-header">
              <h3 className="sidebar-title font-tight">Documentation</h3>
              <p className="sidebar-subtitle">Navigate through our guides</p>
            </div>
            
            <nav className="docs-nav">
              <div className="nav-section">
                <h4 className="nav-section-title">Business</h4>
                <Link to="/docs/business/project-overview" className="docs-nav-item">
                  Project Overview
                </Link>
                <Link to="/docs/business/goals" className="docs-nav-item">
                  Goals & Objectives
                </Link>
              </div>
              
              <div className="nav-section">
                <h4 className="nav-section-title">Technical</h4>
                <Link to="/docs/technical/architecture" className="docs-nav-item">
                  Architecture
                </Link>
                <Link to="/docs/technical/tech-stack" className="docs-nav-item">
                  Tech Stack
                </Link>
              </div>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="docs-content">
            <div className="content-wrapper">
              {children}
            </div>
          </main>
        </div>
      </div>
    </Layout>
  );
}
