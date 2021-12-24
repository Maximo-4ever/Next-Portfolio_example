import Link from "next/link";
import Layout from "../components/Layout";
import { posts } from "../Profile";

function blog() {
  return (
    <Layout>
      <h1>Blog</h1>
      <div className="row mt-4">
        {posts.map((post, i) => (
          <div className="col-md-4" key={i}>
            <div className="card h-100">
              <div className="overflow">
                <img
                  className="card-img-top h-100"
                  src={post.imageUrl}
                  alt={post.title}
                />
              </div>
              <div className="card-body">
                <h2>{post.title}</h2>
                <p>{post.content}</p>
                <Link href={`/post?title=${post.title}`} as={`/post/${post.title}`}>
                  <span className="btn btn-outline-primary">Read more</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default blog;
