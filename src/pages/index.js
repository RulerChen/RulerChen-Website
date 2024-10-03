import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Projects from '../components/Projects/Projects';
import Project from '../data/Projects.json';

import Experiences from '../data/Experiences.json';
import Experience from '../components/Experience/Experience';

import Banner from '../components/Banner/Banner';

import './index.css';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} wrapperClassName="Layout">
      <main>
        <Banner />
        <h1
          style={{
            fontSize: 'clamp(2rem, 3vw + 1rem, 3rem)',
            textAlign: 'center',
            marginBottom: '4rem',
            marginTop: '4rem'
          }}
        >
          求學經歷
        </h1>
        {/* <Experience Experiences={Experiences} /> */}
        {/* <Projects ProjectsData={Project} title="Side Projects" /> */}
      </main>
    </Layout>
  );
}

const Loading = () => (
  <div className="loading">
    <div className="loadingio-spinner-rolling-f1v13ukb9js">
      <div className="ldio-nawj84fd2cd">
        <div></div>
      </div>
    </div>
  </div>
);
