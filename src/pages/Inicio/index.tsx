import style from './Inicio.module.css';
import posts from '../../json/posts.json';
import PostCard from '../../components/PostCard';

const Inicio = () => {
    return (
        <div className={style.fundo}> 
            <ul className={style.posts}>
                {posts.map((post) => (
                    <li key={post.id}>
                        <PostCard post={post} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Inicio;
