import * as PIXI from './pixi.min.js';
let type = "WebGL";
if (!PIXI.utils.isWebGLSupported()) {
    type = "canvas";
}

PIXI.utils.sayHello(type);
// Create a Pixi Application
const app = new PIXI.Application({});

// Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);
app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.autoDensity = true;
app.resizeTo = window;