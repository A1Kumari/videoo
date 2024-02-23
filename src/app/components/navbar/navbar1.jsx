"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from "./navbar.module.css";

const Navbar1 = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarBrand}>
        <Link href="/">
          Videoo
        </Link>
      </div>
      <div className={styles.menuIcon} onClick={toggleMenu}>
        {/* Add an onClick handler to toggle the menu */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </div>
      {isMenuOpen && (
        <div className={styles.menu}>
          <ul>
            <li><Link href="/home">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar1;