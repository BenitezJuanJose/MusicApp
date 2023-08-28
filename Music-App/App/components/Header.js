export function Header() {
  const session = JSON.parse(sessionStorage.getItem("user"));
  const Header = document.createElement("header");
  Header.id = `header`;
  Header.innerHTML = `
      <h2><span>SOL</span>MUSIC</h2>
      <nav>
        <a href="#/home">Home</a>
        <a href="#/music">Music</a>
        <a href="#/favorites">Favorites</a>
      </nav>
      <button id="profile"></button>
  `;

  const profile = Header.querySelector("#profile");
  if (session) {
    profile.setAttribute("session-user", session);
    profile.onclick = () => {
      sessionStorage.clear();
      location.reload();
    };
  } else {
    profile.onclick = () => (location.href = "#/login");
  }

  return Header;
}
