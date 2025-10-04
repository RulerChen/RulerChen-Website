import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import HomePage from '../components/Home/Home';
import ModernNavbar from '../components/ModernNavbar/ModernNavbar';

import './index.css';

export default function Home() {
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
