import { MusicWidget } from "../components/MusicWidget.js";
import { Song } from "../models/Song.js";
export function createWidgeth(list, container) {
  for (const audio of list) {
    const song = new Song(
      audio.id,
      audio.name,
      audio.author,
      audio.src,
      audio.img
    );
    container.appendChild(MusicWidget(song));
  }
}
