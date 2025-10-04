import type { ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import HomePage from '@site/src/components/Home/Home';
import ModernNavbar from '@site/src/components/ModernNavbar/ModernNavbar';

import './index.module.css';

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={`${siteConfig.title}`} wrapperClassName="homepage-container" noFooter>
      <ModernNavbar />
      <main>
        <HomePage />
      </main>
    </Layout>
  );
}
