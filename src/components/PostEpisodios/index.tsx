import style from './PostEpisodios.module.css';
import episodios from '../../json/episodios.json';
import Episodio from '../../components/Episodio';

const PostEpisodios = () => {

    return (
        <>
            <main className={style.containerEpisodios}>
                <h1 className={style.episodios}> 1ª Temporada-Episódios</h1>
                <p className={style.descricao}> A 1ª temporada de "The Winchesters" é composta de 13 episódios lançados semanalmente.</p>
                {episodios.map((episodio) => (
                    <li className={style.lista} key={episodio.id}>
                        <Episodio episodio={episodio} />
                    </li>
                ))}
            </main>
        </>


    );
}


export default PostEpisodios;