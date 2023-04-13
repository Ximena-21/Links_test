import { create } from "zustand";


const _url = 'http://ec2-54-160-84-172.compute-1.amazonaws.com:3000/auth'

const signInUser = (set : any, get: any)  => async (data : any)=> {

        const currentUser = get()
        const params = {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }

        console.log("params", params);
        

        const response = await fetch(`${_url}/singin`, params)
        console.log(response, "hhhh");
        

        if (response.status !== 200) {
            throw "Error signin"
        }
            
        const dataUser = await response.json()
        console.log(dataUser, "data user");

        // set({ currentUser, data: dataUser.data}) //data usuario 
    }

    const loginUser = (set : any, get: any)  => async (data : any) => {

        // console.log("data entra peticion login", data);
        // const currentUser = get()
        // console.log("usuario actual", currentUser);
        

        const params = {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }

        const response = await fetch(`${_url}/login`, params)
        console.log("data user login", response)

        
        if (response.status !== 200) {
            throw "Error login"
        }
        
        const dataUser = await response.json() //recibo el token
        console.log("data user login", dataUser)

        if (dataUser.message === 'success' ) { // asi el mensaje sea diferente entra al condicional
            
            const user = {data: dataUser.data, token: dataUser.token}
            localStorage.setItem("user", JSON.stringify(user))
            set({ user: user})
            console.log("si hay ususario que loguear")
            
        } else {

            console.log("no hay usuario para loguear");
        }

    }




export const useUserStore = create((set, get) => ({
    user: {},
    signInUser: signInUser(set, get),
    loginUser: loginUser(set, get)
    // ...effects(set, get),
    // increasePopulation: () => set((state:any) => {
    //     return { bears: state.bears + 1 }
    //     )},
    // removeAllBears: () => set({ bears: 0 }),
  }))
