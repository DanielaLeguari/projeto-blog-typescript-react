import React from 'react';
import styles from './TextoBannerHome.module.css';

const TextoBannerHome = () => {
    return (
        <>
            <h1 className={styles.titulo}>
                Os Winchesters
            </h1>
            <p className={styles.paragrafo}>
                A Série "The Winchesters" é um spin-off de Supernatural. Sua estreia foi em Outubro de 2022.
            </p>
        </>
    );
}

export default TextoBannerHome;
