'use strict'

//BUGS: text is outline from the canvas

var gElCanvas = document.querySelector('#my-canvas');
var gCtx = gElCanvas.getContext("2d");
var gImg

function init() {
  addListeners()
  createImages()
  renderMeme()
  setLineIndicator()
}

function renderMeme() {
  renderImage()

}

function setLineIndicator() {
  var elLineIndicator = document.querySelector('.line-indicator')
  elLineIndicator.innerText = gMeme.selectedLineIdx
}

function renderImage() {
  var img = new Image();
  var currImage = findImgById(gMeme.selectedImgId)
  img.src = currImage.url;
  img.onload = () => {
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height) //img,x,y,xend,yend
    getMeme().lines.map((line) => drawText(line.txt, line.x, line.y, line.size, line.color))

    gImg = img
  }
}

function drawText(text, x, y, textSize, textColor) {
  gCtx.font = `${textSize}px impact`;

  gCtx.fillStyle = textColor;
  gCtx.strokeStyle = 'black';

  gCtx.fillText(text, x, y);
  gCtx.strokeText(text, x, y);

  gCtx.fill();
  gCtx.stroke();
}

function addListeners() {
  window.addEventListener('resize', resizeCanvas)
}

function resizeCanvas() {
  var elContainer = document.querySelector('.canvas-container');
  // gElCanvas.width = elContainer.offsetWidth
  // gElCanvas.width = elContainer.offsetWidth
  // gElCanvas.height = elContainer.offsetHeight
  // renderMeme()
}


function onSelectLineUp() {
  if (gMeme.selectedLineIdx <= 0) return
  gMeme.selectedLineIdx--
  setLineIndicator()
  const line = findLineByIdx(gMeme.selectedLineIdx)


}
function onSelectLineDown() {


  if (gMeme.selectedLineIdx >= gMeme.lines.length - 1) return
  gMeme.selectedLineIdx++
  setLineIndicator()
  const line = findLineByIdx(gMeme.selectedLineIdx)
}


function onSetTextColor(color) {
  const line = findLineByIdx(gMeme.selectedLineIdx)
  line.color = color
  getMeme().lines.map((line) => drawText(line.txt, line.x, line.y))
  renderMeme()
}

function onIncreaseSize() {
  const line = findLineByIdx(gMeme.selectedLineIdx)
  line.size += 5
  renderMeme()
}

function onDecreaseSize() {
  const line = findLineByIdx(gMeme.selectedLineIdx)
  line.size -= 5
  renderMeme()
}