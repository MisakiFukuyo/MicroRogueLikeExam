var MAX_MAP_SIZE = 16;
var MIN_MAP_SIZE = 4;

var rogue = {};

rogue.player = {};

rogue.player.x = undefined;
rogue.player.y = undefined;

rogue.map = {};

rogue.map.width = undefined;
rogue.map.height = undefined;

// min以上max以下を返す関数
function randomInt(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

rogue.start = function() {
  rogue.map.width = randomInt(MIN_MAP_SIZE, MAX_MAP_SIZE);
  rogue.map.height = randomInt(MIN_MAP_SIZE, MAX_MAP_SIZE);
  rogue.player.x = randomInt(0, rogue.map.width);
  rogue.player.y = randomInt(0, rogue.map.height);
}

rogue.player.move = function(x, y) {
  var moveToX = rogue.player.x + x;
  if (moveToX >= 0 && moveToX <= rogue.map.width) {
    rogue.player.x = moveToX;
  }

  var moveToY = rogue.player.y + y;
  if (moveToY >= 0 && moveToY <= rogue.map.height) {
    rogue.player.y = moveToY;
  }
}

rogue.player.up = function() {
  rogue.player.move(0, -1);
}

rogue.player.down = function() {
  rogue.player.move(0, 1);
}

rogue.player.left = function() {
  rogue.player.move(-1, 0);
}

rogue.player.right = function() {
  rogue.player.move(1, 0);
}
