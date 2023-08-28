import { Header } from "./components/Header.js";
import { router } from "./router/router.js";

function App() {
  const app = document.querySelector("#app");
  app.innerHTML = ``;
  app.appendChild(Header());
  router(app);
}
export default App;
