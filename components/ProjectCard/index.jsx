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

const showIcons = (icon, index) => {
  switch (icon) {
    case 'html':
      return <SiHtml5 key={index} />;
    case 'css':
      return <SiCss3 key={index} />;
    case 'js':
      return <SiJavascript key={index} />;
    case 'ts':
      return <SiTypescript key={index} />;
    case 'node':
      return <SiNodedotjs key={index} />;
    case 'react':
      return <SiReact key={index} />;
    case 'next':
      return <SiNextdotjs key={index} />;
    case 'nest':
      return <SiNestjs key={index} />;
    case 'mongo':
      return <SiMongodb key={index} />;
    case 'python':
      return <SiPython key={index} />;
    case 'scss':
      return <FaSass key={index} />;
    case 'angular':
      return <SiAngular key={index} />;
  }
};

const ProjectCard = ({ imgURL, title, pageUrl, repoUrl, createdWith }) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <img src={imgURL} alt="img" />
        <h3>{title}</h3>
        <div className={styles.icons}>{createdWith.map((icon, index) => showIcons(icon, index))}</div>
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
