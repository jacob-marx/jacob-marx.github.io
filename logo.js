let canvas = document.getElementById("c1")
let painter = canvas.getElementById("2d")

painter.fillstyle = "#000000"
painter.fillRect(0, 0, 400, 400)
painter.fillstyle = "#00FF00"
painter.fillRect(10, 10, 20, 20)
painter.fillRect(10 + 20 + 10, 10, 20, 20)
painter.fillRect(10 + 20 + 10 + 20 + 10, 10, 20, 20)

let c = 0;
while (c < 13){
    painter.fillRect(10+c*30, 10, 20, 20)
    ++c;
}
for (let r = 0; r < 13; ++r) { 
    for (let c = 0; c < 13;) {
        if (c%2 === 1 && r%2 === 1, c%2 === 1 && r%2 === 1 ) {
        
    painter.fillRect(10+c*30, 10, 20, 20) 
        }
    }
}