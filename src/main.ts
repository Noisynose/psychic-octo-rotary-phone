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

    // Key
    const key = PIXI.Sprite.from('/key.svg');

    // Generate random coordinates for the key's position
    const randomX = Math.random() * (app.screen.width - key.width);
    const randomY = Math.random() * (app.screen.height - key.height);
    key.position.set(randomX, randomY);
    app.stage.addChild(key);

    // Exit
    const exit = PIXI.Sprite.from('/exit.svg');
    app.stage.addChild(exit);

    // Set up keyboard event listeners
    const keys: Record<string, boolean> = {};
    window.addEventListener('keydown', (event) => {
        keys[event.code] = true;
    });

    window.addEventListener('keyup', (event) => {
        keys[event.code] = false;
    });

    // Update player position based on keyboard input
    app.ticker.add(() => {
        const speed = 2.5;

        if (keys['KeyW']) {
            player.y -= speed;
        }

        if (keys['KeyA']) {
            player.x -= speed;
        }

        if (keys['KeyS']) {
            player.y += speed;
        }

        if (keys['KeyD']) {
            player.x += speed;
        }
    });
}