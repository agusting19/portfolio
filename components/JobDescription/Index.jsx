import styles from "./job.module.scss";

const JobDescription = ({ jobTitle, company, period, techs }) => {
  return (
    <div className={styles.job}>
      <div class={styles.spinner}></div>
      <div>
        <h3>{jobTitle}</h3>
        <p className={styles.company}>{company}</p>
        <p className={styles.period}>{period}</p>
        <ul className={styles.techs}>
          {techs.map((tech) => {
            return <li>{tech}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default JobDescription;
