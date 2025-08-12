import React from 'react';
import Layout from '@theme/Layout';

export default function CSSTestPage(): React.ReactNode {
  return (
    <Layout title="CSS Test" description="Testing basic CSS loading">
      <div style={{ padding: '2rem', backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 'bold', 
            color: '#2563eb', 
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            CSS Loading Test
          </h1>
          
          {/* Test custom CSS class */}
          <div className="test-red" style={{ marginBottom: '2rem', textAlign: 'center' }}>
            <p style={{ fontSize: '1.125rem', fontWeight: 'bold' }}>
              This should be RED text on YELLOW background with BLUE border!
            </p>
            <p>If you see this styled, CSS is working!</p>
          </div>
          
          {/* Test inline styles */}
          <div style={{ 
            backgroundColor: 'white', 
            padding: '1.5rem', 
            borderRadius: '0.5rem', 
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e5e7eb',
            marginBottom: '1.5rem'
          }}>
            <h2 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '600', 
              color: '#1f2937', 
              marginBottom: '1rem' 
            }}>
              Inline Styles Test
            </h2>
            <p style={{ color: '#6b7280', marginBottom: '1rem' }}>
              This card uses inline styles to verify that basic styling works.
            </p>
            <button style={{
              backgroundColor: '#3b82f6',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '0.375rem',
              border: 'none',
              cursor: 'pointer'
            }}>
              Test Button
            </button>
          </div>
          
          {/* Test CSS custom properties */}
          <div style={{ 
            backgroundColor: 'white', 
            padding: '1.5rem', 
            borderRadius: '0.5rem', 
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e5e7eb'
          }}>
            <h2 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '600', 
              color: '#1f2937', 
              marginBottom: '1rem' 
            }}>
              CSS Custom Properties Test
            </h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '1rem' 
            }}>
              <div style={{ 
                padding: '1rem', 
                backgroundColor: 'hsl(var(--background))', 
                border: '1px solid hsl(var(--border))', 
                borderRadius: '0.375rem' 
              }}>
                <div style={{ fontSize: '0.875rem', fontWeight: '500' }}>Background</div>
                <div style={{ fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))' }}>--background</div>
              </div>
              <div style={{ 
                padding: '1rem', 
                backgroundColor: 'hsl(var(--foreground))', 
                color: 'hsl(var(--background))', 
                border: '1px solid hsl(var(--border))', 
                borderRadius: '0.375rem' 
              }}>
                <div style={{ fontSize: '0.875rem', fontWeight: '500' }}>Foreground</div>
                <div style={{ fontSize: '0.75rem', opacity: '0.7' }}>--foreground</div>
              </div>
              <div style={{ 
                padding: '1rem', 
                backgroundColor: 'hsl(var(--primary))', 
                color: 'hsl(var(--primary-foreground))', 
                border: '1px solid hsl(var(--border))', 
                borderRadius: '0.375rem' 
              }}>
                <div style={{ fontSize: '0.875rem', fontWeight: '500' }}>Primary</div>
                <div style={{ fontSize: '0.75rem', opacity: '0.7' }}>--primary</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
