import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import App from "./App";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import ScrollToTop from "./components/ScrollToTop";
import "./i18n";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import { UserProvider } from "./context/UserContext";


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <UserProvider>
    <ScrollToTop />
    <ProgressBar />
      <Layout>
        <App />
      </Layout>
  </UserProvider>
  </BrowserRouter>
);
