const PostPreview = ({ post }) => {
  return (
    <>
      <h3>{post.title}</h3>
      <p>{post.description}</p>
    </>
  );
};

export default PostPreview;
