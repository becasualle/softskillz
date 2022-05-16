import styles from "./post.module.scss";

const PostPreview = ({ post }) => {
  return (
    <div className={styles.post}>
      <h3>{post.title}</h3>
      <p>{post.description}</p>
    </div>
  );
};

export default PostPreview;
