import { ref } from 'vue'
export function useZoom() {
  const magnifyingArea = ref(null)
  const magnifyingImg = ref(null)
  let isZoomed = false
  let lastClickTime = 0
  const debounceDelay = 200

  const handleClick = (event) => {
    const currentTime = Date.now()

    if (currentTime - lastClickTime < debounceDelay) {
      return
    }

    lastClickTime = currentTime

    // If already zoomed, reset the transformation
    if (isZoomed) {
      magnifyingImg.value.style.transform = 'translate(-50%, -50%) scale(1)'
      isZoomed = false
    } else {
      // If not zoomed, apply the zoom transformation
      const clientX = event.clientX - magnifyingArea.value.offsetLeft
      const clientY = event.clientY - magnifyingArea.value.offsetTop
      const mWidth = magnifyingArea.value.offsetWidth
      const mHeight = magnifyingArea.value.offsetHeight

      const transformedX = (clientX / mWidth) * 100
      const transformedY = (clientY / mHeight) * 100

      magnifyingImg.value.style.transform = `translate(-${transformedX}%, -${transformedY}%) scale(2)`
      magnifyingImg.value.style.cursor = 'zoom-in'

      window.addEventListener('mousemove', handleMouseMove)

      magnifyingArea.value.addEventListener('mouseleave', handleMouseLeave, { once: true })

      isZoomed = true
    }
  }

  const handleMouseMove = (event) => {
    const clientX = event.clientX - magnifyingArea.value.offsetLeft
    const clientY = event.clientY - magnifyingArea.value.offsetTop
    const mWidth = magnifyingArea.value.offsetWidth
    const mHeight = magnifyingArea.value.offsetHeight

    const transformedX = (clientX / mWidth) * 100
    const transformedY = (clientY / mHeight) * 100

    magnifyingImg.value.style.transform = `translate(-${transformedX}%, -${transformedY}%) scale(2)`
    magnifyingImg.value.style.cursor = 'zoom-out'
  }

  const handleMouseLeave = () => {
    magnifyingImg.value.style.transform = 'translate(-50%, -50%) scale(1)'

    window.removeEventListener('mousemove', handleMouseMove)
    magnifyingImg.value.style.cursor = 'auto'
    isZoomed = false
  }
  return {
    magnifyingArea,
    magnifyingImg,
    isZoomed,
    lastClickTime,
    handleClick,
    handleMouseMove,
    handleMouseLeave
  }
}
