import PostCard from '../PostCard';

import styles from './Cards.module.css';

import posts from '../../json/posts.json';

const Cards = () => {
  return (
    <div>
      <section className={styles.fundo}>
                <ul className={styles.posts}>
                    {posts.map((post) => (
                        <li key={post.id}>
                            <PostCard post={post} />
                        </li>
                    ))}
                </ul>
            </section>
    </div>
  );
}

export default Cards;
