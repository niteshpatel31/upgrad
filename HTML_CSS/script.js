"use strict";
var state = true;
function change_state(state) {
  let mState = document.getElementById("change_state");
  mState.disabled = state;
  mState.value = (state) ? "Unclickable " : "Clickable";
  return !state;
}
function msg() {
  alert("This Button is working");
  return;
}
function enable() {
  writeText();
  state = change_state(state);
  if (state)
    alert("Button is enabled");
  else
    alert("Button is disabled");
  return;
}

function writeText() {
  const data = document.getElementsByTagName("div");
  document.getElementById("txt").value(data);
}
