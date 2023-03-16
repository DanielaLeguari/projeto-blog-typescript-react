import PostEpisodios from '../../components/PostEpisodios';
import imagem2 from '../../assets/imagem2.png'
import BannerPrincipal from '../../components/BannerPrincipal';
const SobreSerie = () => {
    return (
        <main>
            <BannerPrincipal banner={{ titulo: 'Os Winchesters', paragrafo: 'A Série "The Winchesters" é um spin-off de Supernatural. Sua estreia foi em Outubro de 2022.', imagem: imagem2 }} />
            <PostEpisodios />
        </main>
    );
}

export default SobreSerie;