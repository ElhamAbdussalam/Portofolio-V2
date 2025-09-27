import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Helmet, HelmetProvider } from "react-helmet-async"; // ⬅️ Tambah ini

import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import LoadingScreen from "../src/components/assets/Loading/LoadingScreen";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2000); // Simulasi loading
    return () => clearTimeout(timeout);
  }, []);

  return (
    <HelmetProvider>
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loading" />
        ) : (
          <BrowserRouter>
            {/* SEO Global Default */}
            <Helmet>
              <title>Portofolio M Elham Abdussalam</title>
              <meta
                name="description"
                content="Portofolio Full Stack Developer dengan pengalaman MERN Stack, Laravel, dan UI/UX Design."
              />
              <meta
                name="keywords"
                content="Portofolio, Full Stack Developer, React, Laravel, MERN, UI/UX"
              />
              <meta
                property="og:title"
                content="Portofolio M Elham Abdussalam"
              />
              <meta
                property="og:description"
                content="Lihat project dan pengalaman saya sebagai Full Stack Developer."
              />
              <meta property="og:type" content="website" />
            </Helmet>

            <Routes>
              <Route index element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        )}
      </AnimatePresence>
    </HelmetProvider>
  );
}

export default App;
