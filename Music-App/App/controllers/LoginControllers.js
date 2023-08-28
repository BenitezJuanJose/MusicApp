export const login = (user, password) => {
  if (validateInput(user, password)) return alert("complete all the filds");
  if (!serchUser(user, password)) return alert("Invalid user or password");
  else starSession(user);
};

const validateInput = (user, password) => {
  return user == "" || password == "";
};

const serchUser = (user, password) => {
  const UserList = JSON.parse(localStorage.getItem("UserList"));
  if (UserList == undefined) {
    return alert("User dont exist");
  } else {
    return UserList.some(
      (item) => item.name === user && item.password === password
    );
  }
};

const starSession = (user) => {
  sessionStorage.setItem("user", JSON.stringify(user));
  location.hash = "#/home";
};
