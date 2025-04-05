import { scenes } from "./scenes.js";

const btn = document.querySelector(".btn");
const sceneOutput = document.querySelector(".scene");

window.onload = loadScene();

btn.addEventListener("click", loadScene);

function loadScene() {
  for (let scene of scenes) {
    let randomIndex = Math.floor(Math.random() * scenes.length);
    sceneOutput.querySelector(".type").textContent = scenes[randomIndex].type;
    sceneOutput.querySelector(".description").textContent =
      scenes[randomIndex].description;
  }
}
