import { actionStates, setIcon } from "../utilities/ActionStates.js";
export function ActionButton(song) {
  const ActionButton = document.createElement("button");
  let state = true;
  ActionButton.id = "ply";

  ActionButton.onclick = () => {
    actionStates(state, song);
    setIcon(ActionButton, state);
    state = !state;
  };

  return ActionButton;
}
