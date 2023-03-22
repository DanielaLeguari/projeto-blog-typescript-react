import styles from './ImagemBanner.module.css';

import { TBannerImagem } from '../../utils/type';
interface BannerImagemProps {
  banner: TBannerImagem
}

const ImagemBanner: React.FC<BannerImagemProps> = ({ banner }) => {
  return (
    <>
      <div className={styles.imagens}>
        <img className={styles.imagem} src={banner.imagem} alt="Os Winchesters" />
      </div>
    </>
  );
}

export default ImagemBanner;
