export function resizePage() {
  const width = window.innerWidth

  if (width >= 992 && width <= 1600) {
    document.body.style.zoom = '90%'
  } else if (width >= 700 && width <= 767) {
    document.body.style.zoom = '80%'
  } else if (width >= 600 && width < 700) {
    document.body.style.zoom = '75%'
  } else if (width <= 600) {
    document.body.style.zoom = '50%'
  } else {
    document.body.style.zoom = '100%'
  }
}

