import { ref } from 'vue'

export function useImageZoom() {
  const image = ref(null)
  const lens = ref(null)
  const preview = ref(null)

  const handleMouseMove = (e) => {
    const x = e.clientX - image.value.offsetLeft
    const y = e.clientY - image.value.offsetTop

    const scale = 3

    const offsetX = (x - 1000 / 2 / 6) * -scale + 500
    const offsetY = (y - 500 / 2 / 6) * -scale + 500

    lens.value.style.display = 'block'
    lens.value.style.left = x + 'px'
    lens.value.style.top = y - 80 + 'px'
    preview.value.style.display = 'block'
    preview.value.style.backgroundPosition = `${offsetX}px ${offsetY}px`
  }

  const handleMouseOut = () => {
    lens.value.style.display = 'none'
    preview.value.style.display = 'none'
  }

  return {
    image,
    lens,
    preview,
    handleMouseMove,
    handleMouseOut
  }
}
