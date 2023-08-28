import { routes } from "./routes.js";
export function router(app) {
  const { hash } = location;
  const render = !hash ? routes["#/home"] : routes[hash];
  render(app);
}
