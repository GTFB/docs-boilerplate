declare module '@theme/Layout' {
  import React from 'react';
  
  interface LayoutProps {
    title?: string;
    description?: string;
    children: React.ReactNode;
  }
  
  const Layout: React.FC<LayoutProps>;
  export default Layout;
}

declare module '@theme/Heading' {
  import React from 'react';
  
  interface HeadingProps {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    children: React.ReactNode;
    className?: string;
  }
  
  const Heading: React.FC<HeadingProps>;
  export default Heading;
}

declare module '@docusaurus/Link' {
  import React from 'react';
  
  interface LinkProps {
    to: string;
    children: React.ReactNode;
    className?: string;
    [key: string]: any;
  }
  
  const Link: React.FC<LinkProps>;
  export default Link;
}

declare module '@docusaurus/useDocusaurusContext' {
  interface DocusaurusContext {
    siteConfig: {
      title: string;
      tagline: string;
      url: string;
      baseUrl: string;
      [key: string]: any;
    };
  }
  
  function useDocusaurusContext(): DocusaurusContext;
  export default useDocusaurusContext;
}

declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}
