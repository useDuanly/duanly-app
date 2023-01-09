import "bootswatch/dist/cosmo/bootstrap.min.css";
import "../styles/globals.css";
import ErrorBoundary from "../components/ErrorBoundary";
import "nprogress/nprogress.css";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        strategy="lazyOnload"
        onError={(e) => {
          console.error("Error Loading", e);
        }}
      />
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
    </>
  );
}

export default MyApp;
