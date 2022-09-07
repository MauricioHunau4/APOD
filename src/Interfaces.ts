export interface Information {
    copyright: string,
    date: string,
    explanation: string,
    hdurl: string,
    title: string,
    url: string
}

export interface InformationNASA {
    date: string | undefined,
    title: string| undefined,
    url:string| undefined,
    loading:boolean| undefined,
    error:boolean| undefined,
    searchDate: string | undefined,
    searchTitle: string | undefined,
    searchUrl: string | undefined,
}
