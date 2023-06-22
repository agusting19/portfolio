import { FiGithub, FiLinkedin } from "react-icons/fi";
import { GITHUB_URL, LINKEDIN_URL } from "../../constants";
import styles from "./header.module.scss";
import Link from "next/link";

const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};

const Header = () => {
  return (
    <header className={styles.header}>
      <img src="/white-ag-logo.webp" alt="Logo" onClick={() => scrollToTop()} />
      <nav className={styles.nav}>
        <Link href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
          <FiGithub />
        </Link>
        <Link href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
          <FiLinkedin />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
