import styles from "./card.module.scss";

const ProjectCard = ({
  title,
  techs,
  imageUrl,
  pageUrl,
  repoUrl,
  description,
}) => {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={title} className={styles.img} />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <ul className={styles.techs}>
          {techs.map((tech, index) => {
            return (
              <li key={index} className={styles.tech}>
                {tech}
              </li>
            );
          })}
        </ul>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
