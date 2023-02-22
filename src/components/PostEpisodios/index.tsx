import style from './PostEpisodios.module.css';
import Episodio from '../../components/Episodio';

import { useContext, useEffect } from 'react';
import { EpisodiosContext } from '../../context/EpisodiosContext';

const PostEpisodios = () => {
    const { episodios, listarEpisodios } = useContext(EpisodiosContext);
    useEffect(() => {
        listarEpisodios();
    }, []);

    return (
        <main className={style.container}>
            <div className={style.containerEpisodios}>
                <h1 className={style.episodios}> 1ª Temporada-Episódios</h1>
                <p className={style.descricao}> A 1ª temporada de "The Winchesters" é composta de 13 episódios lançados semanalmente.</p>
                {episodios.map((episodio) => (
                    <li className={style.lista} key={episodio.id}>
                        <Episodio episodio={episodio} />
                    </li>
                ))}
            </div>
        </main>


    );
}


export default PostEpisodios;