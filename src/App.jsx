import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Route, Routes } from "react-router-dom";

import Home from "./pages/home/home";
import Layout from "./Layout";
import ScrollToTopButton from "./components/shared/ScrollToTopButton/ScrollToTopButton";



function App() {
  return (
    <>
      <Routes>
        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
      <ScrollToTopButton />
    </>
  );
}

export default App;