import { useState } from 'react';
import { TEpisodio } from '../../utils/type';

import styles from './Episodio.module.css';

interface EpisodioProps {
    episodio: TEpisodio;
}
const Episodio: React.FC<EpisodioProps> = ({ episodio }) => {

    const [favorito, setFavorito] = useState(episodio.favorito);

    return (
        <>
            <main className={styles.containerEpisodio}>
                <div>
                    <img className={styles.poster} src={`assets/episodios/${episodio.numero}/img.png`} alt="episodios"></img>
                </div>
                <div className={styles.detalhes}>
                    <div className={styles.episodio} >Episódio {episodio.numero}</div>
                    <div className={styles.titulo}>{episodio.titulo}</div>
                    <div className={styles.descricao}>{episodio.texto}</div>
                </div>
                <div className={styles.acoes}>
                    {favorito ?
                        <button className={styles.botaoDesfav} onClick={() => setFavorito(false)}>Desfavoritar</button>
                        : <button className={styles.botaoFav} onClick={() => setFavorito(true)}>Favoritar</button>}
                </div>
            </main>
        </>
    )

}

export default Episodio;