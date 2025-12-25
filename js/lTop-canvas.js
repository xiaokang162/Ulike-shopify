// Minimal helper extracted for .lTop-canvas: keep canvas size in sync and expose helper selector
;(function () {
  'use strict'
  function setCanvasSize() {
    var container = document.querySelector('.lTop-canvas')
    if (!container) return
    var canvas = container.querySelector('canvas')
    if (!canvas) return
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    // also set styles to match dimensions
    canvas.style.width = window.innerWidth + 'px'
    canvas.style.height = window.innerHeight + 'px'
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setCanvasSize)
  } else {
    setCanvasSize()
  }

  window.addEventListener('resize', setCanvasSize)

  // expose for other scripts (non-enumerable)
  try {
    Object.defineProperty(window, 'lTopCanvasHelper', {
      value: { setCanvasSize: setCanvasSize },
      configurable: true,
      enumerable: false,
      writable: false,
    })
  } catch (e) {
    // noop
  }
})()
