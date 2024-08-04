import { GameConfig } from '../js/GameConfig.js';
export class Paddle {
  sripte;
  canvas;
  clipX;
  clipY;
  width;
  height;
  x;
  y;
  rigthPress = false;
  leftPress = false;
  sensibility;

  constructor(sripte, canvas) {
    this.sripte = sripte;
    this.canvas = canvas;
    this.width = GameConfig.paddle.width;
    this.height = GameConfig.paddle.height;
    this.clipX = GameConfig.paddle.clipX;
    this.clipY = GameConfig.paddle.clipY;
    this.x = (canvas.width - this.width) / 2;
    this.y = canvas.height - this.height - 10;

    this.sensibility = GameConfig.paddle.sensibility;
  }

  draw(ctx) {
    ctx.drawImage(
      this.sripte,
      this.clipX,
      this.clipY,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  onMove() {
    if (this.rigthPress && this.x < this.canvas.width - this.width)
      this.x += this.sensibility;
    else if (this.leftPress && this.x > 0) this.x -= this.sensibility;
  }

  setRightPress(bool) {
    this.rigthPress = bool;
  }

  setLeftPress(bool) {
    this.leftPress = bool;
  }
}
