import React, { useState, useEffect, useRef } from 'react';
import { Mail, Facebook, Github, Linkedin, Download, Code2, Terminal } from 'lucide-react';
import { Typewriter } from '../Typewriter/Typewriter';

import styles from './styles.module.css';
import '../Typewriter/Typewriter.css';
import Profile from '../../../static/img/profile/profile.webp';

const Home = () => {
  const [startTyping, setStartTyping] = useState(false);
  const [codeLines, setCodeLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);
  const terminalRef = useRef(null);

  const codeSnippets = [
    { text: 'const developer = {', type: 'keyword' },
    { text: "    name: 'RulerChen',", type: 'property' },
    { text: "    location: 'Taiwan',", type: 'property' },
    { text: "    education: 'NTU IM',", type: 'property' },
    { text: "    skills: ['C++', 'JS', 'Python', 'Go'],", type: 'property' },
    { text: "    status: 'Open to opportunities'", type: 'property' },
    { text: '};', type: 'keyword' },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartTyping(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (startTyping && currentLineIndex < codeSnippets.length && !animationComplete) {
      const timer = setTimeout(
        () => {
          setCodeLines((prev) => [...prev, codeSnippets[currentLineIndex]]);
          setCurrentLineIndex((prev) => {
            const newIndex = prev + 1;
            if (newIndex >= codeSnippets.length) {
              setAnimationComplete(true);
            }
            return newIndex;
          });
        },
        300 + currentLineIndex * 200,
      );

      return () => clearTimeout(timer);
    }
  }, [startTyping, currentLineIndex, animationComplete]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartTyping(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const getLineClass = (type) => {
    switch (type) {
      case 'keyword':
        return styles.keywordLine;
      case 'property':
        return styles.propertyLine;
      default:
        return styles.codeContent;
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div className={styles.heroContainer}>
        <div className={styles.particlesBackground}>
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className={styles.particle}
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        <div className={styles.heroContent}>
          <div className={styles.heroLeft}>
            <div className={styles.terminalWindow}>
              <div className={styles.terminalHeader}>
                <div className={styles.terminalButtons}>
                  <span className={styles.terminalBtn} style={{ background: '#ff5f57' }}></span>
                  <span className={styles.terminalBtn} style={{ background: '#ffbd2e' }}></span>
                  <span className={styles.terminalBtn} style={{ background: '#28ca42' }}></span>
                </div>
                <div className={styles.terminalTitle}>
                  <Terminal size={16} />
                  <span>developer.js</span>
                </div>
              </div>
              <div className={styles.terminalBody} ref={terminalRef}>
                <div className={styles.terminalPrompt}>
                  <span className={styles.promptUser}>rulerchen@portfolio</span>
                  <span className={styles.promptSeparator}>:</span>
                  <span className={styles.promptPath}>~</span>
                  <span className={styles.promptSymbol}>$</span>
                  <span className={styles.promptCommand}>cat developer.js</span>
                </div>
                {codeLines.map((line, index) => (
                  <div key={`code-line-${index}`} className={styles.codeLine}>
                    <span className={styles.lineNumber}>{String(index + 1).padStart(2, '0')}</span>
                    <span className={getLineClass(line.type)}>{line.text}</span>
                  </div>
                ))}
                {!animationComplete && <div className={styles.cursor}>|</div>}
              </div>
            </div>
          </div>

          <div className={styles.heroRight}>
            <div className={styles.profileSection}>
              <div className={styles.profileImageContainer}>
                <img className={styles.profileImage} src={Profile} alt="RulerChen" fetchPriority="high" />
              </div>

              <div className={styles.introText}>
                <h1 className={styles.name}>
                  <span className={styles.greeting}>Hello, I'm</span>
                  <span className={styles.nameHighlight}>RulerChen</span>
                </h1>

                <div className={styles.roleContainer}>
                  <span className={styles.rolePrefix}>I'm </span>
                  {startTyping && (
                    <span className={styles.typewriter}>
                      <Typewriter
                        words={['a Developer', 'a Sleeping lover']}
                        loop={true}
                        typeSpeed={70}
                        deleteSpeed={30}
                        delaySpeed={2000}
                      />
                    </span>
                  )}
                </div>

                <p className={styles.description}>
                  Passionate about building scalable web applications and exploring cutting-edge technologies.
                </p>

                <div className={styles.ctaButtons}>
                  <a href="mailto:a20196780@gmail.com" className={styles.secondaryBtn}>
                    <Mail size={24} />
                    Get In Touch
                  </a>
                  <a href="https://github.com/RulerChen" target="_blank" aria-label="github" className={styles.secondaryBtn}>
                    <Github size={24} />
                  </a>
                  <a href="https://www.linkedin.com/in/rulerchen/" target="_blank" aria-label="linkedin" className={styles.secondaryBtn}>
                    <Linkedin size={24} />
                  </a>
                </div>

                {/* <div className={styles.socialLinks}></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
