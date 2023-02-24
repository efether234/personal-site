import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={`navbar navbar-expand-lg justify-content-center`}>
      <ul className={`navbar-nav`}>
        <li className={`nav-item`}>
          <Link className={`nav-link ${styles.navLink}`} href="/">
            Home
          </Link>
        </li>
        <li className={`nav-item`}>
          <Link className={`nav-link ${styles.navLink}`} href="/about">
            About
          </Link>
        </li>
        <li className={`nav-item`}>
          <Link className={`nav-link ${styles.navLink}`} href="/resume">
            Resume
          </Link>
        </li>
        <li className={`nav-item`}>
          <Link className={`nav-link ${styles.navLink}`} href="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
