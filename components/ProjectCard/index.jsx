import { BsGithub, BsEyeFill } from 'react-icons/bs';
import {
  SiTypescript,
  SiCss3,
  SiReact,
  SiNodedotjs,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNestjs,
  SiMongodb,
  SiPython,
  SiAngular,
} from 'react-icons/si';
import { FaSass } from 'react-icons/fa';
import styles from './card.module.scss';

const ProjectCard = ({ imgURL, title, description, pageUrl, repoUrl }) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <img src={imgURL} alt="img" />
        <h3>{title}</h3>
        <div>
          <SiTypescript />
          <SiCss3 />
          <SiReact />
          <SiNodedotjs />
          <SiHtml5 />
          <SiJavascript />
          <SiNextdotjs />
          <SiNestjs />
          <SiMongodb />
          <SiPython />
          <FaSass />
          <SiAngular />
        </div>
        <p>{description}</p>
        <div className={styles.links}>
          <a href={pageUrl} target="_blank" rel="noopener noreferrer">
            <BsEyeFill />
          </a>
          <a href={repoUrl} target="_blank" rel="noopener noreferrer">
            <BsGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
