import styles from './BannerSobreASerie.module.css';
import imagem2 from '../../assets/imagem2.png'

const BannerSobreSerie = () => {
    return (
        <>
            <div className={styles.banner}>
                <div className={styles.apresentacao}>
                    <h1 className={styles.titulo}>
                        Os Winchesters
                    </h1>
                    <p className={styles.paragrafo}>
                        A Série "The Winchesters" é um spin-off de Supernatural. Sua estreia foi em Outubro de 2022.
                    </p>
                </div>
                <div className={styles.imagens}>
                    <img className={styles.imagem} src={imagem2} alt="Os Winchesters" />
                </div>
            </div>
        </>
    )
}

export default BannerSobreSerie;