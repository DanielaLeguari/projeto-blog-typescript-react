import styles from './ImagemBannerHome.module.css';
import { TBannerImagem } from '../../utils/type';
interface BannerImagemProps {
  banner: TBannerImagem
}

const ImagemBannerHome: React.FC<BannerImagemProps> = ({banner}) => {
  return (
    <>
      <div className={styles.imagens}>
         <img className={styles.imagem} src={banner.imagem} alt="Os Winchesters" />
        </div>
    </>
  );
}

export default ImagemBannerHome;
