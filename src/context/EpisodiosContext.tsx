import URL from "../utils/api";
import { toastConfig } from "../utils/toast";

import { toast } from "react-toastify";
import { createContext, useState } from "react";

import { IChildren } from "../utils/interface";
import { TEpisodio, TEpisodioContext } from "../utils/type";

export const EpisodiosContext = createContext({} as TEpisodioContext);

export const EpisodiosProvider = ({ children }: IChildren) => {

    const [episodios, setEpisodios] = useState<TEpisodio[]>([]);

    const listarEpisodios = async () => {
        try {
            const response = await fetch(`${URL}/episodios`, {
                method: "GET",
                headers: {
                    "Access-Control-Allow-Origin": "*"
                }
            });
            if (response.ok) {
                const data = await response.json();
                setEpisodios(data);
            } else {
                toast.error("Ocorreu um erro na listagem dos episódios, tente novamente!", toastConfig);
            }

        } catch (error) {
            toast.error("Ocorreu um erro na listagem dos episódios, tente novamente!", toastConfig);

        }
    };


    return (
        <EpisodiosContext.Provider value={{ listarEpisodios, episodios }}>
            {children}
        </EpisodiosContext.Provider>
    )
}


