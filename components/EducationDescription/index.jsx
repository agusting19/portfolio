import { StudentHatIcon } from "../IconsComponents";
import styles from "./education.module.scss";

const EducationDescription = ({ title, institution, period }) => {
  return (
    <div className={styles.container}>
      <StudentHatIcon />
      <div className={styles.textContainer}>
        <h3>{title}</h3>
        <p>{institution}</p>
        <p>{period}</p>
      </div>
    </div>
  );
};

export default EducationDescription;
