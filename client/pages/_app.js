import TopNav from "../components/TopNav";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "../public/css/styles.css";
import "react-toastify/dist/ReactToastify.css";

import { Provider } from "../context";


   
function MyApp({ Component, pageProps }) {
  return (
    <Provider>
     <ToastContainer position="top-center" />
  
      <TopNav />
      <Component {...pageProps} />
      </Provider>
  );
}

export default MyApp;
