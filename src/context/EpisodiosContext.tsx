import URL from "../utils/api";
import { toastConfig } from "../utils/toast";
import { toast } from "react-toastify";

const listarEpisodios = async () => {
    try {

    } catch (error) {
        toast.error("Ocorreu um erro na listagem dos episódios, tente novamente!", toastConfig);
    }

}