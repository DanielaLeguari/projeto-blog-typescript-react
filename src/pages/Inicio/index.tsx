import posts from '../../json/posts.json';
import PostCard from '../../components/PostCard';

import style from './Inicio.module.css';
import BannerPrincipal from '../../components/BannerPrincipal';

const Inicio = () => {
    return (
        <>
        <BannerPrincipal/> 
        <section className={style.fundo}> 
            <ul className={style.posts}>
                {posts.map((post) => (
                    <li key={post.id}>
                        <PostCard post={post} />
                    </li>
                ))}
            </ul>
        </section>
        </>
    );
}

export default Inicio;
