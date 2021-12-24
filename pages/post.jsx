import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { posts } from "../Profile";

const post = () => {
  const router = useRouter();
  const currentPost = posts.filter((post) => post.title === router.query.title)[0];

  return (
    <Layout>
      <h1>Post</h1>
      <div className="text-center">
        <img src={currentPost.imageUrl} alt="" style={{ width: "60%" }} />
        <p>{currentPost.content}</p>
      </div>
    </Layout>
  );
};

export default post;
