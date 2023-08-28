import { MusicWidget } from "../components/MusicWidget.js";
import { createWidgeth } from "../utilities/CreateWidgeth.js";
export function FavoriteView() {
  const FavoriteView = document.createElement("section");
  FavoriteView.className = `section_music`;
  const session = JSON.parse(sessionStorage.getItem("user"));

  if (!session) {
    alert("Login to see you favorites");
    location.hash = "#/login";
  } else {
    const favoriteSongs = JSON.parse(localStorage.getItem("UserList"));
    const Song = serchFavorites(favoriteSongs, session);

    Song.forEach(({ favorites }) => {
      createWidgeth(favorites, FavoriteView);
    });

    return FavoriteView;
  }
}

function serchFavorites(arr, session) {
  const newArr = arr.map((fav) => {
    if (fav.name == session) {
      return fav;
    }
  });
  const favs = newArr.filter((item) => item != undefined);

  return favs;
}
