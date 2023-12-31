const app = new PIXI.Application({ width: 640, height: 360 });

document.body.appendChild(app.view);

const sprite = PIXI.Sprite.from('test-asset.png');
app.stage.addChild(sprite);