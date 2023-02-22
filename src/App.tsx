import Inicio from "./pages/Inicio";
import SobreSerie from "./pages/SobreASerie";

import Error from "./pages/Error";
import Contato from "./pages/contato";

import Rodape from "./components/Rodape";
import Menu from "./components/Menu";

import { ToastContainer } from 'react-toastify';
import { EpisodiosProvider } from "./context/EpisodiosContext";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";

function AppRoutes() {
  return (
    <>
      <BrowserRouter>
      <ToastContainer />
        <Menu />
        <EpisodiosProvider>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/SobreSerie" element={<SobreSerie />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </EpisodiosProvider>
        <Rodape />
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
