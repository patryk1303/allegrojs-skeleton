/// <reference path="object.ts" />
/// <reference path="player.ts" />

class Game {
	_gameObjects: Array<GameObject>;
	_player: Player;

	constructor(canvasId: string, width: number = 640, height: number = 480) {
		allegro_init_all(canvasId, width, height);
		this._gameObjects = [];
		this._player = new Player('assets/player.png', 10, 10);
		
		this._gameObjects.push(this._player);
	}
	
	run() {
		this.loop();
	}
	
	loop() {
		function _ready() {
			loop(_loop, BPS_TO_TIMER(60));
		}
		
		function _loop() {
			this.update();
			this.draw();
		}
		
		ready(_ready);
	}
	
	update() {
		for(var currentObject in this._gameObjects) {
			currentObject.update();
		}
	}
	
	draw() {
		clear_to_color(canvas, makecol(255, 255, 255));
		for(var currentObject in this._gameObjects) {
			currentObject.draw();
		}
	}
}