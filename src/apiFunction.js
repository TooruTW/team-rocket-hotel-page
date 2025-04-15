
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
        !data.status && console.log(data.message)
        return data.result
    } catch (error) {
        console.log(error.message)
        alert(error.message)
    }
}

export async function postDate(url, token = null, body) {
    try {
        const res = await fetch(url,createFetchingObject("POST",null,body))
        const data = await res.json()
        console.log(data)
        return data
    } catch (error) {
        console.log(error.message)
        alert(error.message)
    }
}

export async function isEmailRegisted(body) {
    const url = "https://team-rocket-hotelapi-from-freyja.onrender.com/api/v1/verify/email"
    try {
        const data = postDate(url,null,body)
        return data
    } catch (error) {
        console.log(error.message)
    }
}
