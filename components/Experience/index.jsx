import JobDescription from "../JobDescription/Index";
import EducationDescription from "../EducationDescription";
import styles from "./experience.module.scss";

const Experience = () => {
  const aikoTechs = ["TypeScript", "Node.js", "Express.js", "MongoDB", "MySQL"];
  const freeTechs = [
    "TypeScript",
    "React.js",
    "Next.js",
    "React Native",
    "Sass",
  ];

  return (
    <section className={styles.container}>
      <article className={styles.experience}>
        <h2 className={styles.title}>Experience</h2>
        <JobDescription
          jobTitle={"Backend Developer"}
          company={"AikoDev"}
          period={"May 2023 - Present"}
          techs={aikoTechs}
        />
        <JobDescription
          jobTitle={"Frontend Developer"}
          company={"Freelance"}
          period={"May 2023 - Present"}
          techs={freeTechs}
        />
      </article>
      <div className={styles.line}></div>
      <article className={styles.studies}>
        <div>
          <h2 className={styles.title}>Education</h2>
          <EducationDescription
            title={"Electronic Engineering"}
            institution={"Universidad Nacional de Rosario"}
            period={"Mar 2018 - Present"}
          />
        </div>
        <div>
          <h2 className={styles.title}>Certifications</h2>
          <EducationDescription
            title={"Become a Software Developer"}
            institution={"Radium Rocket"}
            period={"Mar 2022 - Jul 2022"}
          />
        </div>
      </article>
    </section>
  );
};

export default Experience;
