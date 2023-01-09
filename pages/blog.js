import Layout from "../components/Layout/Layout";
import PostCard from "../components/PostsCards/PostCard";

import { posts } from ".././lib/Profile";

export default function blog() {
  return (
    <Layout title="Duanly|| Blog" dark footer={true} h1Title={"Duanly Blog"}>
      <div className="row">
        {posts.map((post, i) => (
          <PostCard post={post} key={i} />
        ))}
      </div>
    </Layout>
  );
}
