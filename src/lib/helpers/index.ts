import { config } from "../../config"

interface IApiFetch {
  method: "GET" | "POST" | "DELETE"
  url: string
  body?: any
}

export const apiFetch = async ({method, url, body = null} : IApiFetch) => {

  console.log(body, config)

  try{
    
    const user = JSON.parse(localStorage.getItem("user") || "{}")
    
    const allowWithoutToken = url.includes("auth")

    if(!user.token && !allowWithoutToken) return

    const fetchParams = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${user.token}`
        },
        body: body ? JSON.stringify(body) : null
    }

    console.log(fetchParams, "fetchparams")

    const response = await fetch(`${config.API_URL}${url}`, fetchParams)

    const responseData = await response.json()

    return responseData
  }catch(error){
    return { error }
  }
}
