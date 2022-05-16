import styles from "./post.module.scss";
import Link from "next/link";

const PostPreview = ({ id, post }) => {
  return (
    <Link href={`/posts/${id}`}>
      <div className={styles.post}>
        <h3>{post.title}</h3>
        <p>{post.description}</p>
      </div>
    </Link>
  );
};

export default PostPreview;
