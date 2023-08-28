export function actionStates(state, song) {
  state ? play(song) : pause(song);
}

export function play(song) {
  song.play();
}
export function pause(song) {
  song.stop();
}

export function setIcon(obj, state) {
  state
    ? (obj.style.backgroundImage = `url(./app/assets/icons/pausa.svg)`)
    : (obj.style.backgroundImage = `url(./app/assets/icons/play.svg)`);
}
