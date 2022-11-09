import style from './MenuLink.module.css';
import {Link, useLocation} from 'react-router-dom';

interface MenuLinkInterface {
    children : any;
    to : any;
}


const MenuLink = ({ children, to }: MenuLinkInterface) => {
    const localizacao = useLocation(); 

    return (
        <Link className={`
        ${style.link}
        ${localizacao.pathname === to ? style.linkSublinhado : ''}
        `} to={to}>
            {children} 
        </Link>
    );
}



export default MenuLink;