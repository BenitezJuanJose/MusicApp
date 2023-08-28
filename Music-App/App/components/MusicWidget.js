import { ActionButton } from "./ActionButton.js";
import { FavoriteButton } from "./FavoriteButton.js";
import { RemoveButton } from "./RemoveButton.js";

export function MusicWidget(song) {
  const session = sessionStorage.getItem("user");
  const MusicWidget = document.createElement("div");
  MusicWidget.className = `widget_card`;

  MusicWidget.innerHTML = `    
            <div class="card_face">
            <img
                src="${song.img}"
            />
            <div class="widget_card-info">
                <h3>${song.name}</h3>
                <span>${song.author}</span>
            </div>
            </div>
            <div class="card_controls">
            
            </div>
  `;
  if (session && location.hash != "#/favorites") {
    MusicWidget.appendChild(FavoriteButton(song));
  }
  if (session && location.hash == "#/favorites") {
    MusicWidget.appendChild(RemoveButton(song.id));
  }
  const ActionButtons = MusicWidget.querySelector(".card_controls");
  ActionButtons.appendChild(ActionButton(song));

  return MusicWidget;
}
