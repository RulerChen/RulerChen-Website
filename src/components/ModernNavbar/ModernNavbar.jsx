import { useState, useEffect } from 'react';
import { useLocation } from '@docusaurus/router';
import Link from '@docusaurus/Link';
import { Github, Menu, X, NotebookPen, Rss } from 'lucide-react';

import styles from './styles.module.css';

const ModernNavbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Note', href: '/docs/intro', icon: <NotebookPen size={18} /> },
    { name: 'Blog', href: '/blog', icon: <Rss size={18} /> },
  ];

  return (
    <nav className={`${styles.modernNavbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        {/* Brand */}
        <Link to="/" className={styles.brand}>
          <span className={styles.brandIcon}>&lt;</span>
          <span className={styles.brandText}>RulerChen</span>
          <span className={styles.brandIcon}>/&gt;</span>
        </Link>

        {/* Desktop Navigation */}
        <div className={styles.navItems}>
          {navItems.map((item) => (
            <Link key={item.name} to={item.href} className={`${styles.navItem} ${location.pathname === item.href ? styles.active : ''}`}>
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className={styles.mobileMenuBtn} onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
        {navItems.map((item) => (
          <Link key={item.name} to={item.href} className={styles.mobileNavItem} onClick={() => setIsMenuOpen(false)}>
            {item.icon}
            <span>{item.name}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default ModernNavbar;
