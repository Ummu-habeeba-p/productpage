// import "@/styles/globals.css";
// import type { AppProps } from "next/app";

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }
// import type { AppProps } from "next/app";
// import 'bootstrap/dist/css/bootstrap.min.css';

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }
import type { AppProps } from "next/app";
import Navbar from "./components/navbar/Navbar" // adjust path if needed
import "bootstrap/dist/css/bootstrap.min.css";

import { useEffect } from "react";
import Footer from "./components/footer/Footer";
 
import Head from "next/head";


export default function App({ Component, pageProps }: AppProps) {
   useEffect(() => {
    // @ts-ignore
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <>
     <Head>
        <title>NexCart</title>
        <meta
          name="description"
          content="My E-commerce Store"
        />
      </Head>
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1">
      <Component {...pageProps} />
      </main>
      <Footer/>
      </div>
    </>
  );
}