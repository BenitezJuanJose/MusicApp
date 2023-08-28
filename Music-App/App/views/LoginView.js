import { login } from "../controllers/LoginControllers.js";
export function LoginView() {
  const LoginView = document.createElement("section");
  LoginView.className = "section_form";
  LoginView.innerHTML = `
      <h2><span>LOG</span>IN</h2>
      <form action="">
        <input type="text" placeholder="User" id="user"/>
        <input type="password" placeholder="Password" id="password"/>
        <input type="submit" value="Login" />
        <p>If you haven't acount <a href="#/register">click here</a></p>
      </form>
    `;
  document.onsubmit = (e) => {
    e.preventDefault();
    const user = LoginView.querySelector("#user").value;
    const password = LoginView.querySelector("#password").value;
    login(user, password);
  };

  return LoginView;
}
