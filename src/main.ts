import * as PIXI from 'pixi.js';

const appRoot = document.getElementById('app');

if (appRoot) {
    const app = new PIXI.Application<HTMLCanvasElement>();
    document.body.appendChild(app.view);
}