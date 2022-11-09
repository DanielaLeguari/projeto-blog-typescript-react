import style from './PostCard.module.css';

// tipo Json
type PostType = {
    id: number,
    titulo: string,
    texto: string
}

interface PostCardProps {
    post: PostType
}

//desestruturação a interface PostCardProps
const PostCard: React.FC<PostCardProps> = ({ post }) => {
    return (
        <>
            <div className={style.post}>
                <img className={style.capa}
                    src={`/assets/posts/${post.id}/img.png`}
                    alt="Imagem do Post"
                />
            </div>
            <h2 className={style.titulo}>
                {post.titulo}
            </h2>
        </>
    );

}

export default PostCard;