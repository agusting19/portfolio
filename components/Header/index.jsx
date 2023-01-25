import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { GITHUB_URL, LINKEDIN_URL } from '../../constants';
import styles from './header.module.scss';

const scrollToTop = () => {
  window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
}

const Header = () => {
  return (
    <header className={styles.header}>
      <img src="/white-ag-logo.png" alt="Logo" onClick={() => scrollToTop()} />
      <ul className={styles.list}>
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
