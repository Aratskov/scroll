function markupPhoto({results}){
return results.map(({urls:{small},alt_description}) => {
return `
<li class="gallery__item">
<img src='${small} alt="${alt_description}" width = '200' height = '200'>
</li>

`

}).join('')

}

export default markupPhoto;