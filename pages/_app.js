import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import "@/styles/main.scss";


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
