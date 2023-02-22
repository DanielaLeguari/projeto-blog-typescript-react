import Inicio from "./pages/Inicio";
import SobreSerie from "./pages/SobreASerie";
import Menu from "./components/Menu";
import PaginaPadrao from "./components/PaginaPadrao";
import Error from "./pages/Error";
import Rodape from "./components/Rodape";
import Contato from "./pages/contato";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import { EpisodiosProvider } from "./context/EpisodiosContext";


function AppRoutes() {
  return (
    <>
      <BrowserRouter>
      <ToastContainer />
        <Menu />
        <EpisodiosProvider>
          <Routes>
            <Route path="/" element={<PaginaPadrao />}>
              <Route path="/" element={<Inicio />} />
            </Route>
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
