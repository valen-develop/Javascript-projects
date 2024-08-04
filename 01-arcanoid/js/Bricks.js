import { GameConfig } from '../js/GameConfig.js';

export class Bricks {
  constructor(sprite) {
    this.sprite = sprite;
    this.row = GameConfig.bricks.row;
    this.column = GameConfig.bricks.column;
    this.width = GameConfig.bricks.width;
    this.height = GameConfig.bricks.height;
    this.padding = GameConfig.bricks.padding;
    this.offsetTop = GameConfig.bricks.offsetTop;
    this.offsetLeft = GameConfig.bricks.offsetLeft;
    this.status = GameConfig.bricks.status.ACTIVE;
    this.bricks = [];
  }

  create() {
    for (let c = 0; c < this.column; c++) {
      this.bricks[c] = [];
      for (let r = 0; r < this.row; r++) {
        const brickX = c * (this.width + this.padding) + this.offsetLeft;
        const brickY = r * (this.height + this.padding) + this.offsetTop;

        const randomColor = Math.floor(Math.random() * 8);

        this.bricks[c][r] = {
          x: brickX,
          y: brickY,
          color: randomColor,
          status: this.status,
        };
      }
    }
  }

  draw(ctx) {
    for (let c = 0; c < this.column; c++) {
      for (let r = 0; r < this.row; r++) {
        const currentBrick = this.bricks[c][r];
        if (currentBrick.status === GameConfig.bricks.status.DESTROYED)
          continue;
        const clipX = currentBrick.color * 32;
        ctx.drawImage(
          this.sprite,
          clipX,
          0,
          31,
          14,
          currentBrick.x,
          currentBrick.y,
          this.width,
          this.height
        );
      }
    }
  }

  onColision(ball) {
    console.log(ball);

    for (let c = 0; c < this.column; c++) {
      for (let r = 0; r < this.row; r++) {
        const currentBrick = this.bricks[c][r];

        if (currentBrick.status === GameConfig.bricks.status.DESTROYED)
          continue;

        const isBallAtSameXAsBrick =
          ball.x > currentBrick.x && ball.x < currentBrick.x + this.width;

        const isBallTouchingBrick =
          ball.y > currentBrick.y && ball.y < currentBrick.y + this.height;

        if (isBallAtSameXAsBrick && isBallTouchingBrick) {
          ball.dy = -ball.dy;
          currentBrick.status = GameConfig.bricks.status.DESTROYED;
        }
      }
    }
  }
}
