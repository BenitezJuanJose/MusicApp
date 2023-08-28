import { favorite_list } from "../models/FavoriteList.js";
export function FavoriteButton(song) {
  const session = JSON.parse(sessionStorage.getItem("user"));
  const userArr = JSON.parse(localStorage.getItem("UserList"));

  const FavoriteButton = document.createElement("button");
  FavoriteButton.id = "fav";

  FavoriteButton.onclick = () => {
    favorite_list.add(song);
    const index = getUser(userArr, session);
    setFavorites(userArr, index, favorite_list);
  };

  return FavoriteButton;
}

function getUser(arr, session) {
  const index = arr.findIndex((user) => user.name == session);
  return index;
}

/**
 *
 * @param {string[]} arr
 * @param {number} i
 * @param {string[]} newArr
 */
function setFavorites(arr, i, newArr) {
  const currentArr = arr[i].favorites.concat(newArr.list);
  arr[i].favorites = removeDuplicate(currentArr);
  localStorage.setItem("UserList", JSON.stringify(arr));
}

const removeDuplicate = (arr) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const item = newArr.some((item) => item.id === arr[i].id);
    if (!item) newArr.push(arr[i]);
  }
  return newArr;
};
