
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

export type TBannerTexto = {
    titulo: string,
    paragrafo: string
}

export type TBannerImagem = {
    imagem: string
}

export type TBanner = {
    titulo: string,
    paragrafo: string,
    imagem: string
}