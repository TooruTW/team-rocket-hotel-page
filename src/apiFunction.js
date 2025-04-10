
export function createFetchingObject(method, token, body){
    const fetchingPromp = {
        method: method,
        headers:{
            Authorization: token
        }
    }
    body && (fetchingPromp.body = body)
    return fetchingPromp
}

export async function getData(url, token) {
    const res = await fetch(url,createFetchingObject("GET", token))
    const data = await res.json()
    return data.result
}

export async function getCulinary(token) {
    const url = "https://team-rocket-hotelapi-from-freyja.onrender.com/api/v1/admin/culinary/"
    const res = await fetch(url,createFetchingObject("GET", token))
    const data = await res.json()
    return data.result
}