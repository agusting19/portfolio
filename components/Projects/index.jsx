import ProjectCard from '../ProjectCard';
import projects from '../../constants/Projects.json';
import styles from './projects.module.scss';

const Projects = () => {
  return (
    <section className={styles.container}>
      <h2>Projects</h2>
      <div className={styles.cardsContainer}>
        {projects.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              imgURL={project.imgURL}
              title={project.title}
              description={project.description}
              pageUrl={project.pageUrl}
              repoUrl={project.repoUrl}
              createdWith={project.createdWith}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
