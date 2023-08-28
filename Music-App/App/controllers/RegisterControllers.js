import { User } from "../models/User.js";
const RegisterErrors = {
  EmptyInput: "Complete all filds",
  PasswordNotEqual: "The password are not equals ",
  PasswordLength: "The password need 8 characters ",
  UserExist: "User all readi exist",
};

export const register = (user, password, r_password) => {
  const inputValidated = validateInpusts(user, password, r_password);
  if (inputValidated != true) return alert(RegisterErrors[inputValidated]);
  if (serchUser(user, password) == true) alert(RegisterErrors["UserExist"]);
  if (serchUser(user, password) == false) addUser(user, password);
};

const validateInpusts = (user, password, r_password) => {
  if (user == "" || password == "" || r_password == "") return "EmptyInput";
  if (password != r_password) return "PasswordNotEqual";
  if (password.length < 8) return "PasswordLength";
  return true;
};

const serchUser = (user, password) => {
  const UserList = JSON.parse(localStorage.getItem("UserList"));
  if (UserList == undefined) {
    createFirstUser(user, password);
    return undefined;
  } else {
    return UserList.some((item) => item.name === user);
  }
};

const createFirstUser = (user, password) => {
  const firstUser = new User(user, password);
  let UserList = [];
  UserList.push(firstUser);
  localStorage.setItem("UserList", JSON.stringify(UserList));
  alert("User add successfully");
  location.hash = "#/login";
};

const addUser = (user, password) => {
  const newUser = new User(user, password);
  const UserList = JSON.parse(localStorage.getItem("UserList"));
  UserList.push(newUser);
  localStorage.setItem("UserList", JSON.stringify(UserList));
  location.hash = "#/login";
};
