import { AiOutlineMail } from "react-icons/ai";
import { CV_URL } from "../../constants";
import styles from "./btn.module.scss";

const BlueBtn = () => {
  return (
    <a href={CV_URL} target="_blank" rel="noopener nofollow" className={styles.mailBtn}>
      <p>CONTACT ME</p>
      <AiOutlineMail />
    </a>
  );
};

export default BlueBtn;
