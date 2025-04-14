
export function createFetchingObject(method, token, body){
    const fetchingPromp = {
        method: method,
        headers:{
            'Content-Type': 'application/json',
            ...(token && { authorization: `Bearer ${token}` })
        }
    }
    body && (fetchingPromp.body = JSON.stringify(body))
    return fetchingPromp
}

export async function getData(url, token) {
    try {
        const res = await fetch(url,createFetchingObject("GET", token))
        const data = await res.json()
        return data.result
    } catch (error) {
        console.log(error)
    }
}

export async function postDate(url, token = null, body) {
    try {
        const res = await fetch(url,createFetchingObject("POST",null,body))
        const data = await res.json()
        console.log(data)
        return data.token
    } catch (error) {
        console.log(error.message)
    }

}