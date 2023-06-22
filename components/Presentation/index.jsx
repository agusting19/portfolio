import Btn from "../Btn";
import styles from "./presentation.module.scss";

const Presentation = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.name}>AGUSTIN GOMEZ</h1>
      <p className={styles.title}>
        Full Stack Web Developer passionate about technology and programming.
      </p>
      <p className={styles.subTitle}>
        Always learning new technologies and looking for new ways to improve
        projects.
      </p>
      <Btn />
    </section>
  );
};

export default Presentation;
