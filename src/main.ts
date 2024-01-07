import * as PIXI from 'pixi.js';

const appRoot = document.getElementById('app');

if (appRoot) {
    const app = new PIXI.Application<HTMLCanvasElement>();
    document.body.appendChild(app.view);

    // Player
    const player = PIXI.Sprite.from('/player.svg');
    player.anchor.set(0.5);
    player.x = app.screen.width / 2;
    player.y = app.screen.height / 2;
    app.stage.addChild(player);

    // Create a sprite using the key texture
    const key = PIXI.Sprite.from('/key.svg');

    // Generate random coordinates for the key's position
    const randomX = Math.random() * (app.screen.width - key.width);
    const randomY = Math.random() * (app.screen.height - key.height);
    key.position.set(randomX, randomY);
    app.stage.addChild(key);
}