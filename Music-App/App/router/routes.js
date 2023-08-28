import { HomeView } from "../views/HomeView.js";
import { LoginView } from "../views/LoginView.js";
import { MusicView } from "../views/MusicView.js";
import { RegisterView } from "../views/RegisterView.js";
import { FavoriteView } from "../views/FavoriteView.js";
export const routes = {
  "#/home": (app) => app.appendChild(HomeView()),
  "#/login": (app) => app.appendChild(LoginView()),
  "#/register": (app) => app.appendChild(RegisterView()),
  "#/favorites": (app) => app.appendChild(FavoriteView()),
  "#/music": (app) => app.appendChild(MusicView()),
};
