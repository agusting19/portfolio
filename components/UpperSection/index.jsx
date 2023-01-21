import BlueBtn from '../BlueBtn';
import { VscGithub } from 'react-icons/vsc';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { GITHUB_URL, LINKEDIN_URL } from '../../constants';
import styles from './upper.module.scss';

const UpperSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.leftSide}>
        <h1 className={styles.name}>AGUSTIN GOMEZ</h1>
        <p className={styles.title}>Full Stack Developer apasionado por la tecnología y la programación.</p>
        <p className={styles.subTitle}>
          Siempre aprendiendo nuevas tecnologías y buscando nuevas formas de mejorar proyectos.
        </p>
        <div className={styles.buttons}>
          <BlueBtn />
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className={styles.btn}>
            <VscGithub />
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className={styles.btn}>
            <AiOutlineLinkedin />
          </a>
        </div>
      </div>
      <img src="/foto.jpg" alt="Foto de frente" className={styles.photo} />
    </section>
  );
};

export default UpperSection;
