import { create } from "zustand";
import { apiFetch } from "../helpers";
import { IUrlForm } from "../../views/profile";


interface IUrl{
    id: number
    name: string
    url: string
    user_id : string
}

interface  IProfileStore {
    urls: IUrl[]
    getDataUrls: () => void
    addUrl: (data: IUrlForm) => void
}

const getDataUrls = (set : any, get: any)  => async () => {    

    const response = await apiFetch({method: "GET", url: "/links"})

    console.log(response)

    if(response.message === "success"){
        set({urls: response.data})
    }


}

const deleteUrl = (set : any, get: any)  => async (id: number) => {

    const _urls = get().urls

    const response = await apiFetch({method: "DELETE", url: "/links", body: {id}})

    console.log(response)

    if(response.message === "success"){
        const newUrls = [..._urls].filter( url => url.id !== id)
        set({urls: newUrls})
    }


}
const addUrl = (set : any, get: any)  => async (data : IUrlForm) => { 
    const urlsCurrent = get().urls
    const response = await apiFetch({method: "POST", url: "/links/add", body: data })

    console.log(response)

    if(response.message === "success"){
        set({urls: [...urlsCurrent, response.data]})
    }
    
}

export const useProfileStore = create<IProfileStore>((set, get) => ({
    urls: [],
    getDataUrls: getDataUrls(set, get),
    deleteUrl: deleteUrl(set, get),
    addUrl: addUrl(set, get)
}))