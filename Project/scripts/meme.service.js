var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }


var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            id: 0,
            txt: '',
            size: 40,
            align: 'left',
            color: 'white',
            x: 20,
            y: 50,
        },
        {
            id: 1,
            txt: '',
            size: 40,
            align: 'left',
            color: 'white',
            x: 120,
            y: 450,
        },
    ]
}


function getMeme() {
    return gMeme
}

function setLineTxt(text) {
    gMeme.lines[gMeme.selectedLineIdx].txt = text
    renderMeme()
}

function setImg(imgId) {
    gMeme.selectedImgId = imgId
    renderMeme()
}

function findImgById(imgId) {
    const currImg = gImgs.find((img) => img.id === imgId);
    return currImg
}
function findLineByIdx(lineId) {
    const currLine = gMeme.lines.find((line) => line.id === lineId);
    return currLine
}
