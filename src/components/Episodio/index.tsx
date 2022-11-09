import styles from './Episodio.module.css';
import { useState } from 'react';

type EpisodioType = {
    id: number,
    titulo: string,
    texto: string,
    favorito: boolean
}

interface EpisodioProps {
    episodio: EpisodioType;
}
const Episodio: React.FC<EpisodioProps>  = ({ episodio }) => {
    const [favorito, setFavorito] = useState(episodio.favorito);

    return (
        <>
            <main className={styles.containerEpisodio}>
                <div>
                    <img className={styles.poster} src={`assets/episodios/${episodio.id}/img.png`} alt="episodios"></img>
                </div>
                <div className={styles.detalhes}>
                    <div className={styles.episodio} >Episódio {episodio.id}</div>
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