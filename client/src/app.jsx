import { RouterProvider } from "react-router-dom";
import Head from "./components/head";
import { SITE } from "./lib/consts";
import { router } from "./router";
import Toast from "./components/toast";

function App() {
  return (
    <>
      <Head site={SITE} />
      <RouterProvider router={router} />
      <Toast />
    </>
  );
}

export default App;
