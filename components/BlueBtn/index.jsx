import { AiOutlineMail } from 'react-icons/ai';
import { EMAIL } from '../../constants';
import styles from './btn.module.scss';

const BlueBtn = () => {
  return (
    <a href={`mailto:${EMAIL}`} rel="noopener nofollow" className={styles.mailBtn}>
      <p>CONTACT</p>
      <AiOutlineMail />
    </a>
  );
};

export default BlueBtn;
