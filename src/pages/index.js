import { useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import HomePage from '../components/Home/Home';
import ModernNavbar from '../components/ModernNavbar/ModernNavbar';

import './index.css';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  useEffect(() => {
    // Additional JavaScript to ensure default navbar is hidden on homepage
    const hideDefaultNavbar = () => {
      const navbars = document.querySelectorAll('nav.navbar, .navbar--fixed-top, .navbar__inner');
      navbars.forEach((navbar) => {
        if (!navbar.classList.contains('modernNavbar') && !navbar.querySelector('[class*="modern"]')) {
          navbar.style.display = 'none';
          navbar.style.visibility = 'hidden';
          navbar.style.opacity = '0';
        }
      });
    };

    // Hide immediately
    hideDefaultNavbar();

    // Hide after a short delay to catch any dynamically loaded navbars
    const timer = setTimeout(hideDefaultNavbar, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout title={`${siteConfig.title}`} wrapperClassName="homepage-container" noFooter>
      <ModernNavbar />
      <main>
        <HomePage />
      </main>
    </Layout>
  );
}
