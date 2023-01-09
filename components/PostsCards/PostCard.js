import Image from "next/legacy/image";
import Link from "next/link";
export default function PostCard({ post }) {
  return (
    <div className="col-md-4 ">
      <div className="card ">
        <div className="overflow ">
          <Image
            src={post.imageURL}
            alt={post.title}
            width={414}
            height={218}
            layout="responsive"
            className="card-img-top"
          />
        </div>
        <div className="card-body">
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <Link passHref href={`/post?title=${post.title}`} legacyBehavior>
            <button className="btn btn-light">
              <a>Reader</a>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
