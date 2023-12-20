<!-- <script>
const content = document.querySelector('.content')
let initialX = null
let endX = null
let initialStart = 0
let initialEnd = 0
// measure translate pixels
let current = 0

// Store slide number
let slide = 0

// set app height to be window.innerheight as vh doesnt work properly on mobile: https://dev.to/maciejtrzcinski/100vh-problem-with-ios-safari-3ge9
const doc = document.documentElement
const appHeight = () => {
  doc.style.setProperty('--app-height', `${window.innerHeight}px`)
  current = -slide * window.innerHeight
  content.style.transform = `translateY(-${slide * window.innerHeight}px)`
}
window.addEventListener('resize', appHeight)
appHeight()

function startTouch(evt) {
  initialStart = Date.now()
  initialX = evt.touches[0].clientX
}

function endTouch(evt) {
  initialEnd = Date.now()
  endX = evt.changedTouches[0].clientX
  if (initialEnd - initialStart < 800) {
    swipe()
  }
}

function swipe() {
  const deltaX = endX - initialX
  // Swipe right
  if (deltaX > 100) {
    if (current !== -(window.innerHeight * 5)) {
      current -= window.innerHeight
      slide++
    }
  }
  // Swipe left
  else if (deltaX < -100) {
    if (current !== 0) {
      current += window.innerHeight
      slide--
    }
  }
  content.style.transform = `translateY(${current}px)`
}

function moveTouch(e) {
  e.preventDefault()
}
</script> -->
