
export type TEpisodio = {
    id: string,
    titulo: string,
    texto: string,
    favorito: boolean,
    temporada: number,
    numero: number
}

export type TEpisodioContext = {
    listarEpisodios: () => Promise<void>,
    episodios: TEpisodio[]
}