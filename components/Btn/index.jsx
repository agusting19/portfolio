import Link from "next/link";
import styles from "./btn.module.scss";

const Btn = () => {
  return (
    <Link
      href="/Gomez-Agustin.pdf"
      alt="alt text"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.btn}
    >
      <button>Download CV</button>
    </Link>
  );
};

export default Btn;
