import Layout from "@/components/Layout";
import "@/styles/globals.css";
import store from "../redux/store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return <div>Helooo</div>;
  // return (
  //   <Provider store={store}>
  //     <Layout>
  //       <Component {...pageProps} />
  //     </Layout>
  //   </Provider>
  // );
}
