$(document).ready(function () {

	// utils.js --------------

	function getGameTime(date) {
		return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.${date.getMilliseconds()}`;
	}


	// ----------------------

	const GAME_STEP_DELAY = 1/1000;

	const objects = [];
	const bricks = [];
	let score = 0;
	let blockRows = 2;
	let blockCols = 7;
	let blockWidth = Math.floor((document.documentElement.clientWidth / (blockCols + 1)));
	let blockHeight = Math.floor((document.documentElement.clientHeight / 30));
	let blockColor = "orange";

	function createBricks () {
		for(let i=0; i < blockRows; i++) {
			for(let j = 0; j < blockCols; j++) {
				let blockX = (j*(blockWidth + 5)) + 20;
				let blockY = (i*(blockHeight + 5)) + 20;
				const brick = new Brick();

				function Brick() {
					this.height = blockHeight;
					this.width = blockWidth;

					this.x = blockX;
					this.y = blockY;

					this._createView = function () {
						let result = document.createElement('div');
						result.style.cssText = `
						display: inline-block;
						position: absolute;
						background: ${blockColor};
						height: ${this.height}px;
						width: ${this.width}px;
						top: ${blockY}px;
						left: ${blockX}px;
						margin: 0;`;
						result.style.className = "brick";

						document.body.append(result);
						return result;
					}

					this._div = this._createView();


					this.live = function () {
						this.renderState();
						this.renderView();
					}

					this.renderState = function () {
					}

					this.renderView = function () {
						this._div.style.left = `${this.x}px`;
						this._div.style.top = `${this.y}px`;
					}
					this.remove = function () {
						this._div.remove();
					}
				}
				bricks.push(brick);
			}
		}
	}
	createBricks();

	function Ball(options) {
		this.id = Math.trunc(1000 * Math.random());
		this.color = options.color;
		this.size = options.size;
		this.height = this.size*8;
		this.width = this.size*8;

		this.x = Math.round(document.documentElement.clientWidth / 2);
		this.y = document.documentElement.clientHeight - 50;
		this.directionX = 1;
		this.directionY = -1;

		this._createView = function () {
			let result = document.createElement('div');
			result.innerText = this.id;
			result.style.cssText = `
			display: inline-block;
			position: absolute;
			background: ${this.color};
			border-radius: 50%;
			height: ${this.height}px;
			width: ${this.width}px;
			margin: 0;`;

			document.body.append(result);
			return result;
		}

		this._div = this._createView();
		

		this.live = function () {
			this.renderState();
			this.renderView();
		}

		this.renderState = function () {
			this.x = this.x + this.directionX;
			this.y = this.y + this.directionY;
		}

		this.renderView = function () {
			this._div.style.left = `${this.x}px`;
			this._div.style.top = `${this.y}px`;
		}
	}

	function Wall (options) {
		this.x = options.x;
		this.y = options.y;
		this.width = options.width;
		this.height = options.height;

		this._createView = function () {
			let result = document.createElement('div');
			result.style.cssText = `
			display: inline-block;
			position: absolute;
			left: ${this.x}px;
			top: ${this.y}px;
			width: ${this.width}px;
			height: ${this.height}px;
			background: black;
			`;

			document.body.append(result);
			return result;
		}

		this._div = this._createView();

		this.live = function () {
			this.renderState();
			this.renderView();
		}

		this.renderState = function () {}

		this.renderView = function () {}
	}

	function Racket (options) {
		this.x = options.x || 10;
		this.y = options.y || 10;
		this.width = Math.min(options.width, 100);
		this.width = Math.max(this.width, 10);
		this.height = Math.min(options.height, 100);
		this.height = Math.max(this.height, 10);

		this._createView = function () {
			let result = document.createElement('div');
			result.style.cssText = `
			display: inline-block;
			position: absolute;
			left: ${this.x}px;
			top: ${this.y}px;
			width: ${this.width}px;
			height: ${this.height}px;
			background: red;
			`;

			document.body.append(result);
			return result;
		}

		this._div = this._createView();

		this.live = function () {
			this.renderState();
			this.renderView();
		}

		this.renderState = function () {}

		this.renderView = function () {
			this._div.style.left = `${this.x}px`;
			this._div.style.top = `${this.y}px`;
		}

		this.onMouseMove = function(event) {
			this.x = event.x;
		}

	}

	


	objects.push(new Ball(
	{
		color: 'skyblue',
		size: 9,
	})
	);

	objects.push(new Wall(
	{
		x: 0,
		y: 0,
		width: 10,
		height: document.documentElement.clientHeight,
	})
	);


	objects.push(new Wall(
	{
		x: document.documentElement.clientWidth-10,
		y: 0,
		width: 10,
		height: document.documentElement.clientHeight,
	})
	);

	objects.push(new Wall(
	{
		x: 0,
		y: 0,
		width: document.documentElement.clientWidth,
		height: 10,
	})
	);


	let r = new Racket(
	{
		y: document.documentElement.clientHeight - 20,
		width: 100,
		height: 20,
	});
	objects.push(r);
	document.addEventListener('mousemove', r.onMouseMove.bind(r));

	function checkCollision (objectA, objectB) {
		if (objectA !== objectB) {
			let ball = null;
			let wall = null;
			let racket = null;
			let brick = null;
			if (objectA instanceof Ball) {
				ball = objectA;
			} else if (objectB instanceof Ball) {
				ball = objectB;
			}

			if (objectA instanceof Wall) {
				wall = objectA;
			} else if (objectB instanceof Wall) {
				wall = objectB;
			}

			if (objectA instanceof Racket) {
				racket = objectA;
			} else if (objectB instanceof Racket) {
				racket = objectB;
			}

			if (ball && wall) {
				if (ball.x === wall.x + wall.width && ball.y > wall.y && ball.y < wall.height) {
					ball.directionX = ball.directionX * -1;
				}
				if (ball.x + ball.width === wall.x && ball.y > wall.y && ball.y < wall.height) {
					ball.directionX = ball.directionX * -1;
				}
				if (ball.y === wall.y + wall.height) {
					ball.directionY = ball.directionY * -1;
				}
			}

			if (ball && racket) {
				if (ball.x > racket.x + 5 && ball.x < racket.x + racket.width - 5 && ball.y + ball.height > racket.y + racket.height) {
					ball.directionY = ball.directionY * -1;
				}
				if (ball.x > racket.x && ball.x < racket.x + 5 && ball.y + ball.height > racket.y + racket.height) {
					ball.directionY = ball.directionY * -1;
					ball.directionX = ball.directionX * -1;
				}
				if (ball.x > racket.x + racket.width - 5 && ball.x < racket.x + racket.width && ball.y + ball.height > racket.y + racket.height) {
					ball.directionY = ball.directionY * -1;
					ball.directionX = ball.directionX * -1;
				}
			}
		}
	}
	function checkCollisionWithBlocks (objectC) {
		for ( i = 0; i < bricks.length; i++) {
			let brick = bricks[i];
			let ball = null;
			if (objectC instanceof Ball) {
				ball = objectC;
				if (ball && brick) {
					if (ball.x + ball.width > brick.x && ball.x + ball.width < brick.x + brick.width && ball.y < brick.y + brick.height && ball.y > brick.y) {
						ball.directionY = ball.directionY * -1;
						brick.remove();
						score++;
						console.log('Ваш счет:', score);
						
					}
					if (ball.x === brick.x + brick.width && ball.y + ball.height > brick.y && ball.y + ball.height < brick.y + brick.height) {
						ball.directionX = ball.directionX * -1;
						brick.remove();
						score++;
						console.log('Ваш счет:', score);
					}
					if (ball.x + ball.width === brick.x && ball.y + ball.height > brick.y && ball.y + ball.height < brick.y + brick.height) {
						ball.directionX = ball.directionX * -1;
						brick.remove();
						score++;
						console.log('Ваш счет:', score);
					}
					if (ball.x > brick.x && ball.x < brick.x + brick.width && ball.y + ball.height === brick.y) {
						ball.directionY = ball.directionY * -1;
						brick.remove();
						score++;
						console.log('Ваш счет:', score);
					}
					if (ball.x + (ball.width / 2) > brick.x && ball.x + (ball.width / 2) < brick.x + brick.width && ball.y === brick.y + brick.height) {
						ball.directionY = ball.directionY * -1;
						brick.remove();
						score++;
						console.log('Ваш счет:', score);					}
					}
				}
			}
		}



		function isGameOver (ball, racket) {
			return ball.y > racket.y;
		}

		function doGameStep () {
			let gameOver = false;

			let currentGameTime = getGameTime(new Date());

			for (let i = 0; i < objects.length; i++) {
				objects[i].live();
			}
			for (let i = 0; i < objects.length; i++) {
				let objectA = objects[i];
				for (let j = i + 1; j < objects.length; j++) {
					let objectB = objects[j];
					checkCollision(objectA, objectB);
				}
			}
			for (let i = 0; i < objects.length; i++) {
				let objectC = objects[i];
				checkCollisionWithBlocks(objectC);
			}
			let ball = objects.find(item => item instanceof Ball);
			let racket = objects.find(item => item instanceof Racket);
			let wall = objects.find(item => item instanceof Wall);
			gameOver = isGameOver(ball, racket);
			if (racket.x + racket.width > document.documentElement.clientWidth - wall.width) {
				racket.x = document.documentElement.clientWidth - racket.width - wall.width;
			}
			if (racket.x - wall.width < 0) {
				racket.x = racket.x + wall.width;
			}
			currentGameStep++;
			if (currentGameStep < 1000000 && !gameOver) {
				setTimeout(doGameStep, GAME_STEP_DELAY);
			} else {
				alert('Game over');
			}
		} 

		let currentGameStep = 0;
		setTimeout(doGameStep, GAME_STEP_DELAY);
	});