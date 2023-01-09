import Layout from "../components/Layout/Layout";
import Image from "next/legacy/image";
import { useState } from "react";

const Github = ({ data }) => {
  const [getData, setGetData] = useState(data);
  const { name, avatar_url, bio, html_url, message } = getData;
  const URL = "https://github.com/useDuanly";

  return (
    <Layout title="Duanly || Github">
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card card-body text-center">
            <h1>{name || message}</h1>
            {
              <Image
                src={avatar_url || "/duanly.jpg"}
                alt={name || message}
                width={100}
                height={250}
              />
            }

            <p>{bio || message}</p>

            <a href={html_url || URL} className="btn btn-outline-secondary">
              Go to Github
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://api.github.com/users/useDuanly");
  const data = await res.json();
  //console.log(data.message);

  return {
    props: {
      data,
    },
  };
}
export default Github;
