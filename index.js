// CANVAS STUFSD
const canvas = document.getElementById('canvas');
canvas.width = 400;
canvas.height = 400;

const c = canvas.getContext('2d');

c.fillStyle = 'black';
c.fillRect(0, 0, canvas.width, canvas.height);

class Sprite
{
    constructor(width, height, posX, posY, xSpeed, ySpeed)
    {
        this.width = width;
        this.height = height;
        this.posX = posX;
        this.posY = posY;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
    }
    
    draw()
    {
        c.fillStyle = 'blue';
        c.fillRect(this.posX, this.posY, this.width, this.height);
    }
    
    update()
    {
        this.draw();
        
        this.posX += this.xSpeed;
        this.posY += this.ySpeed;
    }
}

function rectangularCollision()
{
    
}

let player = new Sprite(40, 40, 0, 0, 1, 1);
player.draw();

let rock = new Sprite (80, 50, 250, 200, 0, 0);

function mainLoop()
{
    c.clearRect(0, 0, canvas.width, canvas.height);
    c.fillStyle = 'black';
    c.fillRect(0, 0, canvas.width, canvas.height);
    
    player.update();
    
    rock.update();
    
    window.requestAnimationFrame(mainLoop);
}

mainLoop();

window.addEventListener('keydown', (event) =>
{
    switch(event.key)
    {
        case 'ArrowUp':
            player.ySpeed = -1;
            break;
    }
});

window.addEventListener('keyup', (event) =>
{
    switch(event.key)
    {
        case 'ArrowUp':
            player.ySpeed = 0;
            break;
    }
});
