const apiUrl = 'http://ec2-54-160-84-172.compute-1.amazonaws.com:3000'


interface IApiFetch {
  method: "GET" | "POST" | "DELETE"
  url: string
  body?: any
}

export const apiFetch = async ({method, url, body = null} : IApiFetch) => {

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

    console.log(fetchParams)

    const response = await fetch(`${apiUrl}${url}`, fetchParams)

    const responseData = await response.json()

    return responseData
  }catch(error){
    return { error }
  }
}
