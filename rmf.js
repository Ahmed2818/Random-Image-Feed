
var container = document.querySelector('.container')
var unpurl = 'https://source.unsplash.com/random/'
var rows = 10

for(let i = 0; i < rows * 3; i++){
    var img = document.createElement('img')
    img.src = `${unpurl}${getrandomSize()}`
    container.appendChild(img)
}

console.log(getrandomSize())

function getrandomSize(){
    return `${getrandomnr()}x${getrandomnr()}`
}

function getrandomnr(){
    return Math.floor(Math.random() * 10) + 300
}