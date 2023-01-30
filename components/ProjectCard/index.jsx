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
      return <SiHtml5 title='HTML' key={index} />;
    case 'css':
      return <SiCss3 title='CSS' key={index} />;
    case 'js':
      return <SiJavascript title='JavaScript' key={index} />;
    case 'ts':
      return <SiTypescript title='TypeScript' key={index} />;
    case 'node':
      return <SiNodedotjs title='NodeJS' key={index} />;
    case 'react':
      return <SiReact title='React' key={index} />;
    case 'next':
      return <SiNextdotjs title='NextJS' key={index} />;
    case 'nest':
      return <SiNestjs title='NestJS' key={index} />;
    case 'mongo':
      return <SiMongodb title='MongoDB' key={index} />;
    case 'python':
      return <SiPython title='Python' key={index} />;
    case 'scss':
      return <FaSass title='Sass' key={index} />;
    case 'angular':
      return <SiAngular title='Angular' key={index} />;
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
          <a href={pageUrl} title='Deployment' target="_blank" rel="noopener noreferrer">
            <BsEyeFill />
          </a>
          <a href={repoUrl} title='Repository' target="_blank" rel="noopener noreferrer">
            <BsGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
