import React from 'react';
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
import { GITHUB_URL } from '../../constants';
import styles from './projects.module.scss';

const Projects = () => {
  return (
    <section className={styles.container}>
      <h2>Projects</h2>
      <div className={styles.card}>
        <div className={styles.content}>
          <img src="/portfolio.png" alt="img" />
          <h3>Trackgenix</h3>
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
          <p>
            Con este proyecto quiero tener un riego automático de plantas con un Arduino y una Raspberry, gracias a
            sensores y bombas de agua. También un panel de control con datos de humedad, nivel de agua y estadísticas de
            cada planta.
          </p>
          <div className={styles.links}>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              <BsEyeFill />
            </a>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              <BsGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
