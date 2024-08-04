export const GameConfig = {
  game: {
    canvas: {
      width: 648,
      height: 600,
    },
    context: '2D',
  },
  ball: {
    radius: 3,
    speed: 3,
  },
  paddle: {
    clipX: 29,
    clipY: 174,
    width: 50,
    height: 10,
    sensibility: 7,
  },
  bricks: {
    row: 7,
    column: 19,
    width: 32,
    height: 16,
    padding: 0,
    offsetTop: 40,
    offsetLeft: 20,
    status: {
      ACTIVE: 1,
      DESTROYED: 0,
    },
  },
};
