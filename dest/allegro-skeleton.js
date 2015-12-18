var GameObject = (function () {
    function GameObject(sprite, x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
        this._gfx = load_bmp(sprite);
    }
    GameObject.prototype.getGfx = function () {
        return this._gfx;
    };
    GameObject.prototype.draw = function () {
        draw_sprite(canvas, this._gfx, this.x, this.y);
    };
    GameObject.prototype.update = function () { };
    GameObject.prototype.collision = function (obj) {
        // TODO implement collision
    };
    return GameObject;
})();
/// <reference path="object.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Player = (function (_super) {
    __extends(Player, _super);
    function Player() {
        _super.apply(this, arguments);
    }
    Player.prototype.update = function () {
        _super.prototype.update.call(this);
        // Implement player's behavior here
    };
    return Player;
})(GameObject);
/// <reference path="object.ts" />
/// <reference path="player.ts" />
var Game = (function () {
    function Game(canvasId, width, height) {
        if (width === void 0) { width = 640; }
        if (height === void 0) { height = 480; }
        allegro_init_all(canvasId, width, height);
        this._gameObjects = [];
        this._player = new Player('assets/player.png', 10, 10);
        this._gameObjects.push(this._player);
    }
    Game.prototype.run = function () {
        this.loop();
    };
    Game.prototype.loop = function () {
        function _ready() {
            loop(_loop, BPS_TO_TIMER(60));
        }
        function _loop() {
            this.update();
            this.draw();
        }
        ready(_ready);
    };
    Game.prototype.update = function () {
        for (var currentObject in this._gameObjects) {
            currentObject.update();
        }
    };
    Game.prototype.draw = function () {
        clear_to_color(canvas, makecol(255, 255, 255));
        for (var currentObject in this._gameObjects) {
            currentObject.draw();
        }
    };
    return Game;
})();
/// <reference path="objects/game.ts" />
function main() {
    var game = new Game('game');
    game.run();
}
END_OF_MAIN();
