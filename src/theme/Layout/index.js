import React from 'react';
import Layout from '@theme-original/Layout';
import ModernNavbar from '@site/src/components/ModernNavbar/ModernNavbar';
import { useLocation } from '@docusaurus/router';

export default function LayoutWrapper(props) {
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname === '/RulerChen-Website/';

  return (
    <Layout {...props}>
      {isHomePage && <ModernNavbar />}
      {props.children}
    </Layout>
  );
}
