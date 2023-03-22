import ImagemBannerHome from '../ImagemBannerHome';
import TextoBannerHome from '../TextoBannerHome';

import styles from './BannerPrincipal.module.css';

import { TBanner } from '../../utils/type';

interface BannerProps {
    banner: TBanner
}

const BannerPrincipal: React.FC<BannerProps> = ({ banner }) => {
    return (
        <>
            <section className={styles.banner}>
                <article className={styles.apresentacao}>
                    <TextoBannerHome banner={{ ...banner }} />
                </article>
                <article>
                    <ImagemBannerHome banner={{ ...banner }} />
                </article>
            </section>
        </>
    );
}

export default BannerPrincipal;
