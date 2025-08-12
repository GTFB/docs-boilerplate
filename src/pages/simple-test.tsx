import React from 'react';
import Layout from '@theme/Layout';

export default function SimpleTestPage(): React.ReactNode {
  return (
    <Layout title="Simple Test" description="Simple test page for Tailwind CSS">
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center">
            Simple Tailwind Test
          </h1>
          
          {/* Test CSS class to verify CSS is loading */}
          <div className="test-red mb-8 text-center">
            <p className="text-lg font-bold">This should be RED text on YELLOW background with BLUE border!</p>
            <p>If you see this styled, CSS is working!</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Card 1</h2>
              <p className="text-gray-600 mb-4">
                This is a simple card to test if Tailwind CSS is working.
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors">
                Test Button
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Card 2</h2>
              <p className="text-gray-600 mb-4">
                Another card to verify the styling system.
              </p>
              <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors">
                Green Button
              </button>
            </div>
          </div>
          
          <div className="mt-8 bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Typography Test</h2>
            <div className="space-y-2">
              <p className="text-xs text-gray-500">Extra small text</p>
              <p className="text-sm text-gray-600">Small text</p>
              <p className="text-base text-gray-700">Base text</p>
              <p className="text-lg text-gray-800">Large text</p>
              <p className="text-xl text-gray-900">Extra large text</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
