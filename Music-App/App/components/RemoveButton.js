export function RemoveButton(id) {
  const session = JSON.parse(sessionStorage.getItem("user"));
  const userArr = JSON.parse(localStorage.getItem("UserList"));

  const RemoveButton = document.createElement("button");
  RemoveButton.id = "remF";

  RemoveButton.onclick = () => {
    const user = getUser(userArr, session);
    updateFavorites(userArr, user, id);
  };
  return RemoveButton;
}

function getUser(arr, session) {
  const index = arr.findIndex((user) => user.name == session);
  return index;
}

function updateFavorites(arr, i, id) {
  arr[i].favorites = removeFavorites(arr[i].favorites, id);
  localStorage.setItem("UserList", JSON.stringify(arr));
  location.reload();
}

const removeFavorites = (arr, id) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id != id) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
