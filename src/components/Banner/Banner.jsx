import React, { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import {
  FaEnvelope,
  FaFacebookSquare,
  FaGithubSquare,
  FaLinkedin,
  FaGraduationCap
} from 'react-icons/fa';

import Info from '../../data/Info.json';
import styles from './styles.module.css';
import ProfileImg from '../../../static/img/profileImg.webp';

const Home = () => {
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartTyping(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeRow}>
        <div className={styles.imgDiv}>
          <img className={styles.profilePic} src={ProfileImg} alt="" />
        </div>
        <div className={styles.home_details}>
          <div className={styles.personal_profile__workContainer}>
            <p className={styles.personal_profile__name}>RulerChen</p>
            <p className={styles.personal_profile__work}>
              {startTyping && (
                <>
                  I'm{' '}
                  <span style={{ fontWeight: 'bold' }}>
                    <Typewriter
                      words={Info.SELF_INFO.SELF_DESCRIPTION}
                      loop={100}
                      cursor
                      cursorStyle="_"
                      typeSpeed={50}
                      deleteSpeed={20}
                    />
                  </span>
                </>
              )}
            </p>
          </div>
          <div className={styles.socialMedia}>
            <a href={'mailto:' + Info.SELF_INFO.EMAIL} target="_blank" aria-label="email">
              <FaEnvelope />
            </a>
            <a href={Info.SELF_INFO.FACEBOOK} target="_blank" aria-label="facebook">
              <FaFacebookSquare />
            </a>
            <a href={Info.SELF_INFO.GITHUB} target="_blank" aria-label="github">
              <FaGithubSquare />
            </a>
            <a href={Info.SELF_INFO.LINKEDIN} target="_blank" aria-label="linkdin">
              <FaLinkedin />
            </a>
            {/* <a href={Info.SELF_INFO.GOOGLESCHOLAR} target="_blank">
                  <FaGraduationCap />
                </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
