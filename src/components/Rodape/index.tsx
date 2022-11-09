import styles from './Rodape.module.css';
import { ReactComponent as MarcaRegistrada} from '../../assets/marca-registrada.svg';

const Rodape = () => {

    return (
        <>
       <footer className={styles.rodape}>
        <MarcaRegistrada/>
        HBO
       </footer>
        </>
    )
}

export default Rodape;