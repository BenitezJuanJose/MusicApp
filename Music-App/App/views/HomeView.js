export function HomeView() {
  const HomeView = document.createElement("main");
  const session = JSON.parse(sessionStorage.getItem("user"));
  HomeView.innerHTML = `
        <section class="banner">
        <div class="banner_text">
            <h2>
            <span>Listen</span> to <br />
            new music.
            </h2>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            reprehenderit nemo, dolore inventore molestiae non nam quibusdam
            consect.
            </p>
            <button class="toRegister" >Register now</button>
        </div>
        </section>

        <section class="section_data">
        <h2>
            Unlimited Access to <br />
            100k traks
        </h2>
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
            provident voluptas cum exercitationem eligendi soluta nemo fugit,
            necessitatibus recusandae sit sed! Rerum et corrupti vitae odio
            excepturi error voluptatibus similique.
        </p>
        
        </section>

        <section class="banner">
        <div class="banner_text">
            <h2>
            <span>Listen</span> to <br />
            new music.
            </h2>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            reprehenderit nemo, dolore inventore molestiae non nam quibusdam
            consect.
            </p>
        </div>
        </section>
  `;

  const toRegister = HomeView.querySelector(".toRegister");
  toRegister.onclick = () => (location.hash = `#/register`);

  if (session) {
    const banner_text = HomeView.querySelector(".banner_text");
    banner_text.removeChild(toRegister);
  }

  return HomeView;
}
