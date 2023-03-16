import React from 'react';
import { TBannerTexto } from '../../utils/type';
import styles from './TextoBannerHome.module.css';

interface BannerProps {
  banner: TBannerTexto
}

const TextoBannerHome : React.FC<BannerProps> = ({banner}) => {
    return (
        <>
            <h1 className={styles.titulo}>
                {banner.titulo}
            </h1>
            <p className={styles.paragrafo}>
                {banner.paragrafo}
            </p>
        </>
    );
}

export default TextoBannerHome;
