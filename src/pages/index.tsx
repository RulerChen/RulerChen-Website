import type { ReactNode } from 'react';
import { useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import HomePage from '@site/src/components/Home/Home';

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  useEffect(() => {
    // Force hide navbar on mount
    const navbars = document.querySelectorAll('nav.navbar, nav[class*="navbar"]');
    navbars.forEach((navbar) => {
      (navbar as HTMLElement).style.display = 'none';
    });

    // Cleanup on unmount
    return () => {
      navbars.forEach((navbar) => {
        (navbar as HTMLElement).style.display = '';
      });
    };
  }, []);

  return (
    <Layout title={`${siteConfig.title}`} noFooter>
      <main>
        <HomePage />
      </main>
    </Layout>
  );
}
