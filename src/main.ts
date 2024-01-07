import * as PIXI from 'pixi.js';

const appRoot = document.getElementById('app');

if (appRoot) {
    const app = new PIXI.Application<HTMLCanvasElement>();

    document.body.appendChild(app.view);
    
    const sprite = PIXI.Sprite.from('test-asset.png');
    app.stage.addChild(sprite);
    
    let elapsed = 0.0;
    app.ticker.add((delta) => {
        elapsed += delta;
        sprite.x = 100.0 + Math.cos(elapsed/50.0) * 100.0;
    });
}