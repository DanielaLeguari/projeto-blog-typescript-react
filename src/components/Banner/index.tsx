import styles from "./Banner.module.css";
import imagem from '../../assets/imagem.png';

function Banner() {
    return (
        <>
            <div className={styles.banner}>
                <div className={styles.apresentacao}>
                    <h1 className={styles.titulo}>
                        Os Winchesters
                    </h1>
                    <p className={styles.paragrafo}>
                        "Os Winchesters" gira em torno dos pais de Dean e Sam Winchester, John e Mary, e é descrito como "a história de amor épica e não contada de como John conheceu Mary e como eles colocaram tudo em risco não apenas para salvar seu amor, mas o mundo inteiro, será contado a partir da perspectiva de seu filho mais velho, Dean com Ackles narrando.
                    </p>
                </div>
                <div className={styles.imagens}>
                    <img className={styles.imagem} src={imagem} alt="Os Winchesters" />
                </div>
            </div>
        </>
    );
}

export default Banner;