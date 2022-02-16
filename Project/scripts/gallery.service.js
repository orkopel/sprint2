
var gId = 1
var gImgs = [];


function createImage(keyword) {
    return {
        id: gId,
        url: `img/${gId++}.jpg`,
        keywords: [keyword]
    }
}
function createImages(number = 18) {
    //create Array with keywords
    var keywords = ['funny', 'animal', 'baby', 'politic', 'sad', 'summer', 'winter', 'hat', 'cry', 'laugh', 'dj', 'smile', 'black', 'white', 'pink', 'green', 'purple', 'yellow']

    //for loop on the number
    for (var i = 0; i < number; i++) {
        var img = createImage(keywords[i])
        gImgs.push(img)
    }
    renderGallery()
}