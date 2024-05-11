import { useEffect } from "react";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import store from "@/store"; 
import { loadUser } from "@/actions/userActions";

export default function App({ Component, pageProps }) {

  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return( 
  <Provider store={store}>
      {/* <Header/> */}
      {/* <Auth> */}
      <Component {...pageProps} />
      {/* </Auth> */}
      {/* <Footer/> */}
      {/* <ToastContainer /> */}
    </Provider>
  )
  ;
}
