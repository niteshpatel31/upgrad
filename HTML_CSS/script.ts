var state = true;

function change_state(state: boolean): boolean {
  let mState = document.getElementById("change_state") as HTMLInputElement;
  mState.disabled = state;
  mState.value = (state) ? "Unclickable " : "Clickable";
  return !state;
}

function msg(): void {
  alert("This Button is working");
  return;
}

function enable(): void {
  state = change_state(state);
  if (state) alert("Button is enabled");
  else alert("Button is disabled");
  return;
}


