import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { posts } from "../Profile";
import { useEffect } from "react";

const post = () => {
  const router = useRouter();
  const currentPost = posts.filter((post) => post.title === router.query.title)[0];

  useEffect(() => {
    if (!currentPost) {
      router.push("/blog");
    }
  }, []);

  return (
    <Layout>
      {currentPost !== undefined && (
        <>
          <h1>Post</h1>
          <div className="text-center">
            <img src={currentPost.imageUrl} alt="" style={{ width: "60%" }} />
            <p>{currentPost.content}</p>
          </div>
        </>
      )}
    </Layout>
  );
};

export default post;
