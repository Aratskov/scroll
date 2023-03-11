import fetchPhoto from "./api/const";
import searchPhoto from "./searchForm";
import ref from "./ref";
import loadMorePhoto from "./loadMore";


ref.searchEl.addEventListener('submit', searchPhoto);
ref.loadMoreEl.addEventListener('click', loadMorePhoto)