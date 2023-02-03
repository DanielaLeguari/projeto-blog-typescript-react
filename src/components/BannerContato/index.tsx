import React from 'react';
import styles from './BannerContato.module.css';
import imagem3 from '../../assets/bannerContato.png';

const BannerContato = () => {
  return (
    <>
    <div className={styles.banner}>
        <div className={styles.apresentacao}>
            <h1 className={styles.titulo}>
                Os Winchesters
            </h1>
            <p className={styles.paragrafo}>
               Se você é fã de "Supernatural" e está assistindo "Os Whinchesters", deixe sua opinião sobre a série.
            </p>
        </div>
        <div className={styles.imagens}>
            <img className={styles.imagem} src={imagem3} alt="Os Winchesters" />
        </div>
    </div>
</>
  );
}

export default BannerContato;
