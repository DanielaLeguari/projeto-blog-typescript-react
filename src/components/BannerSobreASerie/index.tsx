import styles from './BannerSobreASerie.module.css';
import imagem2 from '../../assets/imagem2.png'

const BannerSobreSerie = () => {


    return (
        <>
            <main className={styles.banner}  >
                <div className={styles.informacoes}>
                    <img className={styles.bannerImg} src={imagem2} alt="Os Winchesters"></img>
                    <h1 className={styles.titulo}>Os Winchesters</h1>
                    <p className={styles.texto}>A Série "The Winchesters" é um spin-off de Supernatural. Sua estreia foi em Outubro deste ano.
                         </p>
                </div>
            </main>

        </>
    )
}

export default BannerSobreSerie;