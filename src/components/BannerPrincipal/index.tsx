import ImagemBannerHome from '../ImagemBannerHome';
import TextoBannerHome from '../TextoBannerHome';
import styles from './BannerPrincipal.module.css';

const BannerPrincipal = () => {
    return (
        <>
            <section className={styles.banner}>
                <article className={styles.apresentacao}>
                    <TextoBannerHome />
                </article>
                <article>
                    <ImagemBannerHome/>
                </article>
            </section>
        </>
    );
}

export default BannerPrincipal;
