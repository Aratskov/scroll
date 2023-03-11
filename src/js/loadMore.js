import { Notify } from 'notiflix/build/notiflix-notify-aio';

import ref from "./ref";
import { UnsplashAPI } from "./api/const";
import markupPhoto from "./markupImage";

const unsplashAPI = new UnsplashAPI();

function loadMorePhoto(){
    unsplashAPI.page += 1;
    unsplashAPI.fetchPhoto().then(data=>{
        if(data.total_pages === unsplashAPI.page){
        ref.loadMoreEl.classList.add('is-hidden')
        Notify.info("We're sorry, but you've reached the end of search results.")
        }
        
        ref.gallery.insertAdjacentHTML('beforeend', markupPhoto(data));
    }).catch(console.log)

}

export default loadMorePhoto;