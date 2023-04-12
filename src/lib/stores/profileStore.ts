import { create } from "zustand";

const _url = 'http://ec2-54-160-84-172.compute-1.amazonaws.com:3000'


const getDataUrls = (set : any, get: any)  => async () => {
    const response = await fetch(`${_url}/links`, {
        headers: {
            'accept': 'application/json'
        }
    })

    console.log("response get data", response);
    

    if (response.status !== 200) {
        throw "Error signin"
    }
        
    const dataUrls = await response.json()
    console.log(dataUrls, "urls data");

    // return set({urls: dataUrls})
}


const deleteUrl = (set : any, get: any)  => async (id : any ) => { 
    const params = {
        method: 'DELETE',
        headers: {
            'accept': 'application/json'
        }
    }

    const response = await fetch(`${_url}/links`, params)
        console.log(response, "hhhh");
        

        if (response.status !== 200) {
            throw "Error add url"
        }
            
        const dataUrl = await response.json()
        console.log(dataUrl, "data user");

}

const addUrl = (set : any, get: any)  => async (data : any) => { 
    const params = {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    const response = await fetch(`${_url}/links/add`, params)
        console.log(response, "hhhh");
        

        if (response.status !== 200) {
            throw "Error add url"
        }
            
        const dataUrl = await response.json()
        console.log(dataUrl, "data user");

      //  return set({urls: dataUrls})

}



export const useProfileStore = create((set, get) => ({
    urls: [],
    getDataUrls: getDataUrls(set, get),
    deleteUrl: deleteUrl(set, get),
    addUrl: addUrl(set, get)
    // increasePopulation: () => set((state:any) => {
    //     return { bears: state.bears + 1 }
    //     )},
    // removeAllBears: () => set({ bears: 0 }),
}))