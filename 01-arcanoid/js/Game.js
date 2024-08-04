import { GameConfig } from '../js/GameConfig.js';

export class Game {
  static canvas;
  static ctx;

  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.initCanvas();
  }

  initContext(ctx) {
    this.canvas.getContext(ctx);
  }

  initCanvas() {
    this.canvas.width = GameConfig.game.canvas.width;
    this.canvas.height = GameConfig.game.canvas.height;
  }

  clearCanvas() {
    this.ctx.clearRect(
      0,
      0,
      GameConfig.game.canvas.width,
      GameConfig.game.canvas.height
    );
  }
}
