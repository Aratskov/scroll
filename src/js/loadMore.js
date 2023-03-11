import ref from "./ref";
import { UnsplashAPI } from "./api/const";
import markupPhoto from "./markupImage";

const unsplashAPI = new UnsplashAPI();

function loadMorePhoto(){
    unsplashAPI.page += 1;
    unsplashAPI.fetchPhoto().then(data=>{
        ref.gallery.insertAdjacentHTML('beforeend', markupPhoto(data));
    }).catch(console.log)

}

export default loadMorePhoto;