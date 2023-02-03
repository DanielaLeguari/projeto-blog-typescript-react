import Inicio from "./pages/Inicio";
import SobreSerie from "./pages/SobreASerie";
import Menu from "./components/Menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaPadrao from "./components/PaginaPadrao";
import Error from "./pages/Error";
import Rodape from "./components/Rodape";
import Contato from "./pages/contato";


function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<PaginaPadrao />}>
            <Route path="/" element={<Inicio />} />
          </Route>
          <Route path="/contato" element={<Contato />} />
          <Route path="/SobreSerie" element={<SobreSerie />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Rodape />
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
