// Import a json file in ecmascript
import { GameConfig } from './../js/GameConfig.js';

export class Ball {
  canvas;
  x;
  y;
  dx;
  dy;
  radius;
  constructor(canvas, radius = GameConfig.ball.radius) {
    this.canvas = canvas;
    this.x = GameConfig.game.canvas.width / 2;
    this.y = GameConfig.game.canvas.height - 20;
    this.dx = GameConfig.ball.speed;
    this.dy = -GameConfig.ball.speed;
    this.radius = radius;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = '#fff';
    ctx.fill();
    ctx.closePath();
  }

  move(paddle) {
    if (this.x > this.canvas.width - this.radius || this.x < 0 + this.radius) {
      this.dx = -this.dx;
    }

    if (this.y + this.dy < 0 + this.radius) {
      this.dy = -this.dy;
    }

    const isBallSameXAsPaddle =
      this.x > paddle.x && this.x < paddle.x + paddle.width;
    const isBallTouchingPaddle = this.y + this.dy > paddle.y;
    if (isBallSameXAsPaddle && isBallTouchingPaddle) {
      this.dy = -this.dy;
    } else if (this.y > this.canvas.height - this.radius) {
      document.location.reload();
    }
    this.x += this.dx;
    this.y += this.dy;
  }
}
