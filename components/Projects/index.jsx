import ProjectCard from "../ProjectCard";
import projects from "../../constants/Projects.json";
import styles from "./projects.module.scss";

const Projects = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.cardsContainer}>
        {projects.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              title={project.title}
              imageUrl={project.imgURL}
              pageUrl={project.pageUrl}
              repoUrl={project.repoUrl}
              techs={project.techs}
              description={project.description}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
