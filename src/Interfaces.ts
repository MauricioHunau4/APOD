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
    loading:boolean| undefined,
    error:boolean| undefined,
    image:string| undefined
}