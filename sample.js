var ModelViewer = require('./');

// To render with fixed dimensions:
// viewer({
//   pxNotRatio: true, // Dictates whether width & height are px or multiplied
//   width: 500,
//   height: 400,
//   targetDivId: 'modelDivLarge'
// })
//

var isMobile = detectMobile()

var viewer = ModelViewer({
  targetDivId: 'logo-container',
  followMouse: !isMobile,
  slowDrift: isMobile,
  // Dictates whether width & height are px or multiplied
  pxNotRatio: false,
  width: 0.4,
  height: 0.4,
  minWidth: 200,
  // To render with fixed dimensions:
  // pxNotRatio: true,
  // width: 500,
  // height: 400,
})

window.viewer = viewer

var container = document.getElementById('logo-container')
container.appendChild(viewer.canvas)

function detectMobile() {
  return (
      navigator.userAgent.match(/Android/i)
   || navigator.userAgent.match(/webOS/i)
   || navigator.userAgent.match(/iPhone/i)
   || navigator.userAgent.match(/iPad/i)
   || navigator.userAgent.match(/iPod/i)
   || navigator.userAgent.match(/BlackBerry/i)
   || navigator.userAgent.match(/Windows Phone/i)
  )
}
