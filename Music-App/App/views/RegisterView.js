import { register } from "../controllers/RegisterControllers.js";
export function RegisterView() {
  const RegisterView = document.createElement("section");
  RegisterView.className = "section_form";
  RegisterView.innerHTML = `
      <h2><span>REG</span>ISTER</h2>
      <form action="">
        <input type="text" placeholder="User" id='user'/>
        <input type="password" placeholder="Password"  id='password'/>
        <input type="password" placeholder="Password" id='r_password'/>
        <input type="submit" value="Login" />
        <p>If you have acount <a href="#/login">click here</a></p>
      </form>
    `;

  document.onsubmit = (e) => {
    e.preventDefault();
    const user = RegisterView.querySelector("#user").value;
    const password = RegisterView.querySelector("#password").value;
    const r_password = RegisterView.querySelector("#r_password").value;
    register(user, password, r_password);
  };

  return RegisterView;
}
