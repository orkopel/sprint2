



function renderGallery() {
    //1) get gallery element
    var elGallery = document.querySelector('.gallery')
    var strHTML = ''
    //2) run on the gIms to get currImage
    for (var i = 0; i < gImgs.length; i++) {
        var currImg = gImgs[i]
        strHTML += `<img style="height:100px" src="${currImg.url}" onclick="onImgSelect(${currImg.id})">`
        elGallery.innerHTML = strHTML
    }
}

function onImgSelect(imgId) {
    setImg(imgId)
}