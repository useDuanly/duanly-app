import Link from "next/link";
import Layout from "../components/Layout/Layout";

export default function FourOhFour() {
  return (
    <Layout>
      <section className="container d-flex justify-content-center flex-column align-items-center">
        <Link href="/" legacyBehavior>
          <a>Go back home</a>
        </Link>
      </section>
    </Layout>
  );
}
