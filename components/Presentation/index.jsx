import Image from "next/image";
import Btn from "../Btn";
import styles from "./presentation.module.scss";

const Presentation = () => {
  return (
    <section className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.name}>AGUSTIN GOMEZ</h1>
        <p className={styles.title}>
          Full Stack Developer passionate about technology and programming.
        </p>
        <p className={styles.subTitle}>
          Always learning new technologies and looking for new ways to improve
          projects.
        </p>
        <Btn />
      </div>
      <Image
        src="/me.webp"
        alt="Foto de frente"
        width={400}
        height={400}
        className={styles.photo}
      />
    </section>
  );
};

export default Presentation;
