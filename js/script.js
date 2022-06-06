const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const clouds = document.querySelector('.clouds')
const clouds2 = document.querySelector('.clouds2')
const wasted = document.querySelector('.wasted')

const jump = () => {
  mario.classList.add('jump')

  setTimeout(() => {
    mario.classList.remove('jump')
  }, 500)
}
const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft
  const cloudsPosition = clouds.offsetLeft
  const clouds2Position = clouds2.offsetLeft
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = 'none'
    pipe.style.left = `${pipePosition}px`
    clouds.style.left = `${cloudsPosition}px`
    clouds2.style.left = `${clouds2Position}px`

    mario.style.animation = 'none'
    mario.style.bottom = `${marioPosition}px`

    mario.src = './images/game-over.png'
    mario.style.width = '4.9875rem'
    mario.style.marginLeft = '3.125rem'

    wasted.classList.add('show')

    clearInterval(loop)
  }
}, 10)

document.addEventListener('keydown', jump)
document.addEventListener('click', jump)
