import React from 'react';
import styles from './styles.module.css';
import { useColorMode } from '@docusaurus/theme-common';
import { Tilt } from 'react-tilt';

const Projects = ({ ProjectsData, title }) => {
  const { colorMode } = useColorMode();
  return (
    <div className={styles.features}>
      <div className="container">
        <h1 className={styles.title}>{title}</h1>

        <div className={styles.cardContainer}>
          {ProjectsData?.map((project) => (
            <ProjectCard key={project.id} {...project} colorMode={colorMode} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

const ProjectCard = ({ projectTitle, projectImage, projectDescribe, tech, role, githubUrl, deployUrl, colorMode }) => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className={styles.tilt}
    >
      <div className={styles.tiltImageContainer}>
        <img src={projectImage} alt={projectTitle} className={styles.tiltImage} />
      </div>

      <div className={styles.tiltContentContainer}>
        <h2 className={styles.tiltTitle}>{projectTitle}</h2>
        <p className={styles.tiltDesc}>{projectDescribe}</p>
        {role && <p className={styles.tiltRole}>擔任的角色：{role}</p>}
      </div>
      {githubUrl && (
        <a href={githubUrl} target="_blank" rel="noreferrer noopenner">
          <button className={[styles.button, colorMode === 'light' && styles.buttonLight].join(' ')} role="button">
            <span>專案連結</span>
          </button>
        </a>
      )}

      {deployUrl && (
        <a href={deployUrl} target="_blank" rel="noreferrer noopenner">
          <button className={[styles.button, colorMode === 'light' && styles.buttonLight].join(' ')} role="button">
            <span>部屬連結</span>
          </button>
        </a>
      )}

      <div className={styles.tiltSkillContainer}>
        {tech?.map((techInfo) => (
          <img key={techInfo.name} src={techInfo.tag} alt={techInfo.name} />
        ))}
      </div>
    </Tilt>
  );
};
