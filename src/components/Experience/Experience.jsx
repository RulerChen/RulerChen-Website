import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styles from './styles.module.css';
import { BsFillSkipStartCircleFill } from 'react-icons/bs';
import Ntu from '../../../static/img/ntu.png';

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#0e0d13', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #040405' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className={styles.iconContainer}>
          <img src={experience.icon} alt={experience.name} className={styles.iconImage} />
        </div>
      }
    >
      <div>
        <h3 className={styles.experienceTitle}>{experience.title}</h3>
        <p className={styles.experienceName} style={{ margin: 0 }}>
          {experience.name}
        </p>
      </div>

      <ul className={styles.experiencePointsContainer}>
        {experience.points.map((point, index) => (
          <li key={`experience-point-${index}`} className={styles.experiencePoint}>
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = ({ Experiences }) => {
  return (
    <>
      <div className={styles.experienceContainer}>
        <VerticalTimeline>
          {Experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
          <VerticalTimelineElement
            date="2021 Sep."
            iconStyle={{ background: '#fff' }}
            icon={
              <div className={styles.iconContainer}>
                <img src={Ntu} alt="ntu" className={styles.iconImage} />
              </div>
            }
          />
          <VerticalTimelineElement
            date="2002 Feb."
            iconStyle={{ background: '#d5d4d6', background: '#fff' }}
            icon={<BsFillSkipStartCircleFill />}
          />
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Experience;
