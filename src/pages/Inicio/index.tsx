import BannerPrincipal from '../../components/BannerPrincipal';

import imagem from '../../assets/imagem.png';
import Cards from '../../components/Cards';

const Inicio = () => {
    return (
        <main>
            <BannerPrincipal banner={{ titulo: 'Os Winchesters', paragrafo: '"Os Winchesters" gira em torno dos pais de Dean e Sam Winchester, John e Mary, e é descrito como "a história de amor épica e não contada de como John conheceu Mary e como eles colocaram tudo em risco não apenas para salvar seu amor, mas o mundo inteiro, será contado a partir da perspectiva de seu filho mais velho, Dean com Ackles narrando.', imagem: imagem }} />
            <Cards/>
        </main>
    );
}

export default Inicio;
