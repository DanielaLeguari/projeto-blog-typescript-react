import MenuLink from '../../pages/MenuLink';
import style from './Menu.module.css';

function Menu() {
    return (
        <>
            <header>
                <nav className={style.navegacao}>
                    <MenuLink to="/">
                        Início
                    </MenuLink>
                    <MenuLink to="/SobreSerie">
                        Sobre
                    </MenuLink>
                    <MenuLink to="/contato">
                        Opinião
                    </MenuLink>
                </nav>
            </header>
        </>

    );
}

export default Menu;