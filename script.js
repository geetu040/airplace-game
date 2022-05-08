
// Game Constants
screenHeight = getComputedStyle(container).getPropertyValue('height').replace('px', '')
planeV = 70
deployV = 2
attackV = 2
deployFrac = 1.1     // between 1 and 2
attackFrac = 1.01
senstivity = 75
totAttacks = 0
attackPos = { x: 0, y: 0 }
score = 0;
stopped = false;
sky.classList.add('skymove')

planePos = { x: 0, y: 0 }
planePos.x = parseFloat(getComputedStyle(plane).getPropertyValue('left').replace('px', ''))
planePos.y = parseFloat(getComputedStyle(plane).getPropertyValue('top').replace('px', ''))


// Game Functions
createAttack = () => {
    attackEle = document.createElement('div')
    attackEle.classList.add(`attack`)
    attackEle.style.setProperty('left', `${parseFloat(getComputedStyle(plane).getPropertyValue('left').replace('px', ''))}px`)
    container.appendChild(attackEle)
    totAttacks++
    
}
destroyAttack = () => {
    for (let i = 0; i < totAttacks; i++) {
        a = document.getElementsByClassName('attack')[i]
        if (a != undefined) {
            a.style.setProperty('animation-duration', `${attackV}s`)
            b = getComputedStyle(a)
            c = parseFloat(b.getPropertyValue('top').replace('px', ''))
            if (c > screenHeight) {
                score++
                switch (score) {
                    case 5:
                        attackV = 1.75
                        deployV = 1.75
                        break;
                    case 10:
                        attackV = 1.5
                        deployV = 1.5
                        break;
                    case 15:
                        attackV = 1.25
                        deployV = 1.25
                        break;
                    case 20:
                        attackV = 1
                        deployV = 1
                        break;
                    case 25:
                        attackV = 0.8
                        deployV = 0.8
                        break;
                
                    default:
                        break;
                }
                // attackV /= attackFrac
                // deployV /= deployFrac
                container.removeChild(a)
            }
        }
    }
}
isCollide = () => {
    for (let i = 0; i < totAttacks; i++) {
        a = document.getElementsByClassName('attack')[i]
        if (a != undefined) {
            b = getComputedStyle(a)
            attackPos.x = parseFloat(b.getPropertyValue('left').replace('px', ''))
            attackPos.y = parseFloat(b.getPropertyValue('top').replace('px', ''))
            topD = Math.abs(planePos.y - attackPos.y)
            leftD = Math.abs(planePos.x - attackPos.x)
            if (topD < senstivity && leftD < senstivity) { endGame() }
        }
    }
    scoreBar.innerText = `Your Score: ${score}`
}
endGame = () => {
    window.cancelAnimationFrame(vari)
    // clearInterval(createInt)
    clearInterval(destroyInt)
    clearInterval(collideInt)
    over.style.visibility = 'visible'
    plane.style.setProperty('left', `${planePos.x}px`)
    plane.style.setProperty('top', `${planePos.y}px`)
    stopped = true
    sky.classList.remove('skymove')
}


// starting the game
// createInt = setInterval(createAttack, 10000 / deployV);
destroyInt = setInterval(destroyAttack, 100);
collideInt = setInterval(isCollide, 10);

// lastPaintTime = 0
// function main(ctime) {
//     window.requestAnimationFrame(main);
//     if((ctime - lastPaintTime)/1000 < 1){ return }
//     lastPaintTime = ctime;
//     isCollide();
//     destroyAttack();
// }



lastPaintTime = 0
function main(ctime) {
    window.requestAnimationFrame(main);
    if((ctime - lastPaintTime)/1000 < deployV){ return }
    lastPaintTime = ctime;
    createAttack()
}
vari = window.requestAnimationFrame(main);



// Binding the Keys
document.addEventListener('keydown', function (keydown) {
    switch (keydown.key) {
        case 'ArrowRight':
            if (planePos.x < window.innerWidth-80) {
                planePos.x += planeV
            }
            break;
        case 'ArrowLeft':
            if (planePos.x > 0) {
                planePos.x -= planeV
            }
            break;
        case 'ArrowUp':
            if (planePos.y > 0) {
                planePos.y -= planeV
            }
            break;
        case 'ArrowDown':
            if (planePos.y < window.innerHeight - 80) {
                planePos.y += planeV
            }
            break;
        case ' ':
            // startGame()
            location.reload()
            break;
        default:
            break;
    }
    if (!stopped) {
        plane.style.setProperty('left', `${planePos.x}px`)
        plane.style.setProperty('top', `${planePos.y}px`)
    }
})

