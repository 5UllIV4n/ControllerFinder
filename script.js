const output = document.querySelector(".output");


window.addEventListener("gamepadconnected", (e) => {
  const gp = e.gamepad;

  output.classList.remove("andU");

  output.textContent =
    `Controller found: 
Index: ${gp.index}
ID: ${gp.id}
Buttons: ${gp.buttons.length}
Axes: ${gp.axes.length}`;
});

function updateGamepad() {
  const padinfo = document.getElementById("gamepadInfo")
  const gamepads = navigator.getGamepads();
  const gp = gamepads[0];

  if (gp) {
    padinfo.textContent =
      `gamepad info:
${gp.buttons.map((b, i) => `Button ${i}: ${b.pressed}`)}

Axes:
${gp.axes.map((a, i) => `Axis ${i}: ${a.toFixed(2)}`)}`;
  }

  requestAnimationFrame(updateGamepad);
}

window.addEventListener("gamepadconnected", () => {
  updateGamepad();
});
