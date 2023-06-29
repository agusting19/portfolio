import styles from "./job.module.scss";

const JobDescription = ({ jobTitle, company, period, techs }) => {
  return (
    <div className={styles.job}>
      <div className={styles.spinner}></div>
      <div>
        <h3>{jobTitle}</h3>
        <p className={styles.company}>{company}</p>
        <p className={styles.period}>{period}</p>
        <ul className={styles.techs}>
          {techs.map((tech, index) => {
            return <li key={index}>{tech}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default JobDescription;
