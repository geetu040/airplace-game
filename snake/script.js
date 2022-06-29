startGame()




// ENGINE

function engine() {
	if (collided()){
		endGame()
	} else {
		if (eaten()) {
			addBody()
			updateFood()
			updateScore()
		}
		moveBody()
		moveHead()
	}
}
function startGame() {
	// starting with variables
	foodV = {x: 10, y: 15}
	headV = {x: 15, y: 20}
	bodyV = []
	dir = {x: 0, y: 0}
	current_score = 0
	movement = 'none'
	grid = 20
	game = document.getElementsByClassName('game')[0]
	game.style.setProperty('grid-template-columns', `repeat(${grid}, 1fr)`)
	game.style.setProperty('grid-template-rows', `repeat(${grid}, 1fr)`)

	// setting score board
	score.innerText = '0'
	high_score = localStorage.getItem('high_score')
	if (high_score == null) {
		high_score = 0;
	}
	highScore.innerText = String(high_score)

	// removing previous bodies
	bodies = document.getElementsByClassName('body')
	while (bodies.length != 0) {
		bodies[0].remove()
	}
	// initiating the positions
	moveHead()
	updateFood()

	// starting the engine loop
	lastPaintTime = 0
	main = (ctime) => {
	intervalVairable = window.requestAnimationFrame(main)
	if ( (ctime-lastPaintTime)/1000 < 0.1 ) { return }
	lastPaintTime = ctime
	engine()    // code
	}
	intervalVairable = window.requestAnimationFrame(main)
}
function endGame() {
	window.cancelAnimationFrame(intervalVairable)
	alert("GAME OVER")
	startGame()
}





// FUNCTIONS

function updateFood() {
	// finding random position for food
	foodV.x = Math.floor(Math.random() * (grid-2)) + 1;
	foodV.y = Math.floor(Math.random() * (grid-2)) + 1;

	food.style.setProperty('grid-area', `${foodV.y} / ${foodV.x}`)
}
function moveHead() {
	headV.x += dir.x
	headV.y += dir.y
	head.style.setProperty('grid-area', `${headV.y} / ${headV.x}`)
}
function addBody() {
	bodyV.push({x: 0, y: 0})  // adding new item in body array
	// creating new part element in html
	bodyNode = document.createElement('div')
	bodyNode.classList.add('body')
	game.appendChild(bodyNode)
}
function moveBody() {
	// positioning each part
	for (i in bodyV){
		if (i != bodyV.length-1) {
			bodyV[bodyV.length-i-1].x = bodyV[bodyV.length-i-2].x
			bodyV[bodyV.length-i-1].y = bodyV[bodyV.length-i-2].y
		} else if (i == bodyV.length-1) {
			bodyV[bodyV.length-i-1].x = headV.x
			bodyV[bodyV.length-i-1].y = headV.y
		}
	}
	// displaying all parts
	bodyV.forEach((part, index) => {
		body = document.getElementsByClassName('body')[index]
		body.style.setProperty('grid-area', `${part.y} / ${part.x}`)
	});
}
function updateScore() {
	// changing score
	current_score ++
	score.innerText = String(current_score)
	// changing high score incase
	if (current_score >= high_score) {
		localStorage.setItem('high_score', current_score)
		highScore.innerText = String(current_score)
	}
}
function eaten() {
	if (foodV.x == headV.x && foodV.y == headV.y) {
		return true
	} else { return false }
}
function collided() {
	collision = false
	if (headV.x < 1 | headV.x > grid | headV.y < 1 | headV.y > grid) { // collision with the walls
		collision = true
	} else {
		bodyV.forEach((part)=>{
			if (part.x == headV.x && part.y == headV.y) { // collision with itself
				collision = true
			}
		})
	}
	return collision
}







// SETTING CONTROLS

document.onkeydown = (pressed)=>{
	if (pressed.key == 'ArrowUp'){
		if (movement != 'down') {
			dir.x = 0;
			dir.y = -1;
			movement = 'up'
		}
	}
	if (pressed.key == 'ArrowDown'){
		if (movement != 'up') {
			dir.x = 0;
			dir.y = 1;
			movement = 'down'
		}
	}
	if (pressed.key == 'ArrowLeft'){
		if (movement != 'right') {
			dir.x = -1;
			dir.y = 0;
			movement = 'left'
		}
	}
	if (pressed.key == 'ArrowRight'){
		if (movement != 'left') {
			dir.x = 1;
			dir.y = 0;
			movement = 'right'
		}
	}
	if (pressed.key == ' '){
		// restarting the game
		window.cancelAnimationFrame(intervalVairable)
		startGame()
	}
}