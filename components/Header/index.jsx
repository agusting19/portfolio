import { FiSun, FiGithub, FiLinkedin } from 'react-icons/fi';
import styles from './header.module.scss';

const GITHUB_URL = 'https://github.com/agusting19';
const LINKEDIN_URL = 'https://www.linkedin.com/in/agustin-gomez-602511236/';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src="/logo.png" alt="Logo" />
      <ul className={styles.list}>
        <li>
            <FiSun />
        </li>
        <li>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
            <FiGithub />
          </a>
        </li>
        <li>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
            <FiLinkedin />
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
