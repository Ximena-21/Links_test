import { create } from "zustand";
//"http://ec2-54-160-84-172.compute-1.amazonaws.com:3000/auth/login?email=paula@gmail.com&password=e10adc3949ba59abbe56e057f20f883e"

const _url = 'http://ec2-54-160-84-172.compute-1.amazonaws.com:3000/auth'

const signInUser = (set : any, get: any)  => async (data : any)=> {

    // const signInUser = async (data: any) => {

        const params = {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }

        const response = await fetch(`${_url}/singin`, params)
        console.log(response, "hhhh");
        

        if (response.status !== 200) {
            throw "Error signin"
        }
            
        const dataUser = await response.json()
        console.log(dataUser, "data user");

        // console.log({
        //     url : `${_url}/singin`,
        //     params: params
        // })
            
        // return set({ user: dataUser})
    }

    const loginUser = (set : any, get: any)  => async (email : string , password: string) => {

        const params = {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'content-type': 'application/x-www-form-urlencoded'
            },
            body: ''
        }

        const response = await fetch(`${_url}/login?email=${email}&password=${password}`, params)
        console.log("data user login", response)

        
        if (response.status !== 200) {
            throw "Error login"
        }
        
        const dataUser = await response.json()
        console.log("data user login", dataUser)

        
            
        // return dataUser
    }


    // return {
    //     signInUser, 
    //     loginUser
    // }
    //hacer peticion 
    //setear data 
    // si sale mal error

// }

// const 


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



// const _url = `${config.urlApi}/auth`

// export const login = async (credentialResponse: any) => {
//   const authHeader = new Headers({ "Content-Type": "application/json" })

//   const params = {
//     headers: authHeader,
//     method: "POST",
//     body: JSON.stringify({ google_token: credentialResponse.credential, source: "backoffice" })
//   }

//   const response = await fetch(`${_url}/google/login`, params)

//   if (response.status !== 200) {
//     throw "Error on google login"
//   }

//   const data = await response.json()

//   return data
// }