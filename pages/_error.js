import Link from "next/link";
import Layout from "../components/Layout/Layout";

function Error({ statusCode }) {
  return (
    <Layout title={"Error"}>
      <div className="row">
        <p className="text-center ">
          {statusCode
            ? `An error ${statusCode} occurred on server`
            : "An error occurred on client"}
        </p>
        <Link href={"/"} legacyBehavior>
          <a className="text-center">Return to Home</a>
        </Link>
      </div>
    </Layout>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
