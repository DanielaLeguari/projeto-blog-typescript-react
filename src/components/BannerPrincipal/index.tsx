import ImagemBanner from '../ImagemBanner';
import TextoBanner from '../TextoBanner';

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
                    <TextoBanner banner={{ ...banner }} />
                </article>
                <article>
                    <ImagemBanner banner={{ ...banner }} />
                </article>
            </section>
        </>
    );
}

export default BannerPrincipal;
