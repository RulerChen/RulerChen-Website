import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Banner from '../components/Banner/Banner';

import './index.css';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} wrapperClassName="Layout">
      <main>
        <Banner />
      </main>
    </Layout>
  );
}
