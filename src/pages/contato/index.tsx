import BannerPrincipal from '../../components/BannerPrincipal';
import Form from '../../components/Form';
import imagem3 from '../../assets/bannerContato.png';


const Contato = () => {
  return (
    <main>
      <BannerPrincipal banner={{ titulo: 'Os Winchesters', paragrafo: ' Se você é fã de "Supernatural" e está assistindo "Os Whinchesters", deixe sua opinião sobre a série.', imagem: imagem3 }} />
      <Form />
    </main>
  );
}

export default Contato;



