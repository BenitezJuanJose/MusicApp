import { useFetch } from "../utilities/useFetch.js";
import { createWidgeth } from "../utilities/CreateWidgeth.js";
export function MusicView() {
  const MusicList = useFetch("./App/json/music.json");
  const MusicView = document.createElement("section");
  MusicView.className = "section_music";
  MusicList.then((music) => {
    createWidgeth(music, MusicView);
  });
  return MusicView;
}
