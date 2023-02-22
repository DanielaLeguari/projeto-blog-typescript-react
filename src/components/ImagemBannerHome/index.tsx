import styles from './ImagemBannerHome.module.css';
import imagem from '../../assets/imagem.png';

const ImagemBannerHome = () => {
  return (
    <>
      <div className={styles.imagens}>
        <img className={styles.imagem} src={imagem} alt="Os Winchesters" />
        </div>
    </>
  );
}

export default ImagemBannerHome;
