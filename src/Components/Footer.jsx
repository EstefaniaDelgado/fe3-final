import DH from '../../public/images/DH.png';
import Facebook from '../../public/images/ico-facebook.png'
import Whatsapp from '../../public/images/ico-whatsapp.png'
import Instagram from '../../public/images/ico-instagram.png'
import Tiktok from '../../public/images/ico-tiktok.png'
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.powerBand}>Powered by</p>
    <div className={styles.containerIcons}>
    <figure className={styles.containerIcon}>
        {' '}
        <img src={DH} alt="DH-logo" />
      </figure>
      <figure className={styles.socialMedia} >
        <img src={Facebook} alt="social-media" />
        <img src={Whatsapp} alt="social-media" />
        <img src={Instagram} alt="social-media" />
        <img src={Tiktok} alt="social-media" />
      </figure>
    </div>
    </footer>
  );
};

export default Footer;
