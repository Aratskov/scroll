const BASE_URL = 'https://api.unsplash.com/search/photos/'
const KEY = 'VDRjOkHDfhD0H_xSxZhUN-0j5XqlG3x5U1jE2UB7TUE'

export class UnsplashAPI{
    #BASE_URL="https://api.unsplash.com"
    #KEY = 'VDRjOkHDfhD0H_xSxZhUN-0j5XqlG3x5U1jE2UB7TUE'

constructor(){
this.page = 1;
this.query = null;
}
fetchPhoto(){
    const parametr = new URLSearchParams({
    query: this.query,
    page: this.page,
    per_page: 5,
    client_id: this.#KEY
    })

    return fetch(`${this.#BASE_URL}/search/photos/?${parametr}`).then(res =>{ 
    if(!res.ok){
    throw new Error(res.Error)
    }
    return res.json()})
}
}




// function fetchPhoto(){
// return fetch(`${BASE_URL}?client_id=${KEY}&query=cat&per_page=5`).then(res =>{ 
//     if(!res.ok){
//     throw new Error(res.Error)
//     }
//     return res.json()})
// }

// export default fetchPhoto;