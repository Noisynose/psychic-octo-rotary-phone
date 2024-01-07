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

    // Create a smaller key sprite
    const smallerKey = PIXI.Sprite.from('/key.svg');
    smallerKey.scale.set(0.5); // Adjust the scale as needed
    smallerKey.anchor.set(1); // Set the anchor point to the center
    player.addChild(smallerKey);
    smallerKey.visible = false; // Hide the smaller key initially

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

        // Check for collision between player and key
        if (isColliding(player, key)) {
            // Player picked up the key
            app.stage.removeChild(key);
            smallerKey.visible = true;
            console.log('Key picked up!');
        }
    });
}

// Function to check collision between two sprites
function isColliding(spriteA: PIXI.Sprite, spriteB: PIXI.Sprite): boolean {
    const boundsA = spriteA.getBounds();
    const boundsB = spriteB.getBounds();
    return boundsA.x + boundsA.width > boundsB.x &&
           boundsA.x < boundsB.x + boundsB.width &&
           boundsA.y + boundsA.height > boundsB.y &&
           boundsA.y < boundsB.y + boundsB.height;
  }