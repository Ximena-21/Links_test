import { create } from "zustand";

const _url = 'http://ec2-54-160-84-172.compute-1.amazonaws.com:3000'


const getDataUrls = (set : any, get: any)  => async (token: string) => {    

    const params = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${token}`
        }
    }

    const response = await fetch(`${_url}/links`, params)

    if (response.status !== 200) {
        throw "Error signin"
    }
        
    const dataUrls = await response.json()

    set({urls: {data: dataUrls.data}})

    
}


const deleteUrl = (set : any, get: any)  => async (token : string, id: number ) => { 
    const params = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            id: id
        })
    }

    const response = await fetch(`${_url}/links`, params)
        console.log(response, "hhhh");
        

        if (response.status !== 200) {
            throw "Error add url"
        }
            
        const dataUrl = await response.json()
        console.log(dataUrl, "data delete");

}

const addUrl = (set : any, get: any)  => async (token: string, data : any) => { 
    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
    }

    const response = await fetch(`${_url}/links/add`, params)
        

        if (response.status !== 200) {
            throw "Error add url"
        }
            
        const dataUrl = await response.json()
        console.log(dataUrl, "data user");

        const urlsCurrent = get().urls
    
        set({urls: {...urlsCurrent, data: [...urlsCurrent.data, dataUrl.data]}})
}



export const useProfileStore = create((set, get) => ({
    urls: {},
    getDataUrls: getDataUrls(set, get),
    deleteUrl: deleteUrl(set, get),
    addUrl: addUrl(set, get)
}))