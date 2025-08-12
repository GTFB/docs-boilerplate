import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useColorMode } from '@docusaurus/theme-common';
import { Hero1, Hero2, Hero3, Hero4, Hero5, Hero6, Hero7, Hero8, Hero9, Hero10, Hero11, Hero12 } from '../components/ui/HeroBlocks';

export default function ThemeTestPage() {
  const { siteConfig } = useDocusaurusContext();
  const [isClient, setIsClient] = useState(false);
  const [colorMode, setColorMode] = useState('light');
  
  useEffect(() => {
    setIsClient(true);
    // Get initial color mode from localStorage or default to 'light'
    const savedMode = localStorage.getItem('theme') || 'light';
    setColorMode(savedMode);
    
    // Set initial data-theme attribute
    document.documentElement.setAttribute('data-theme', savedMode);
  }, []);

  const toggleTheme = () => {
    const newMode = colorMode === 'dark' ? 'light' : 'dark';
    setColorMode(newMode);
    localStorage.setItem('theme', newMode);
    
    // Update document data-theme attribute for CSS
    document.documentElement.setAttribute('data-theme', newMode);
  };

  return (
    <Layout
      title={`${siteConfig.title} - Theme Test`}
      description="Test page for Hero components and dark theme">
      <main>
        {/* Hero Components */}
        <div className="space-y-0">
          <Hero1 />
          <Hero2 />
          <Hero3 />
          <Hero4 />
          <Hero5 />
          <Hero6 />
          <Hero7 />
          <Hero8 />
          <Hero9 />
          <Hero10 />
          <Hero11 />
          <Hero12 />
        </div>

        {/* UI Components Testing */}
        <div className="bg-white dark:bg-gray-900 py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                UI Components Test
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                Test various UI components in both light and dark themes
              </p>
            </div>

            {/* Buttons */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Buttons</h3>
              <div className="flex flex-wrap gap-4">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md">
                  Primary Button
                </button>
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white px-4 py-2 rounded-md">
                  Secondary Button
                </button>
                <button className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-4 py-2 rounded-md">
                  Outline Button
                </button>
              </div>
            </div>

            {/* Badges */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Badges</h3>
              <div className="flex flex-wrap gap-4">
                <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-3 py-1 rounded-full text-sm font-medium">
                  Primary Badge
                </span>
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium">
                  Success Badge
                </span>
                <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-3 py-1 rounded-full text-sm font-medium">
                  Error Badge
                </span>
              </div>
            </div>

            {/* Alerts */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Alerts</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-200 px-4 py-3 rounded-md">
                  <p className="text-sm">This is an informational alert message.</p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200 px-4 py-3 rounded-md">
                  <p className="text-sm">This is a success alert message.</p>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-200 px-4 py-3 rounded-md">
                  <p className="text-sm">This is an error alert message.</p>
                </div>
              </div>
            </div>

            {/* Cards */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Cards</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Card Title</h4>
                  <p className="text-gray-600 dark:text-gray-300">This is a sample card with some content.</p>
                </div>
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Another Card</h4>
                  <p className="text-gray-600 dark:text-gray-300">Here's another card with different content.</p>
                </div>
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Third Card</h4>
                  <p className="text-gray-600 dark:text-gray-300">And one more card to complete the set.</p>
                </div>
              </div>
            </div>

            {/* Statistics */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Statistics</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">12</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Hero Sections</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400">100%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Dark Theme Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">24/7</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Availability</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">∞</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Possibilities</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

