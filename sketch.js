let saveitems = [];
let items = [];
let slider;
const TOTAL = 5;

function setup () {
    createCanvas(640, 480);
    tf.setBackend('cpu');
    //     slider = createSlider(1, 10, 1);
    //     for (let i = 0; i < TOTAL; i++) {
    //         birds[i] = new Bird();
    //     }
    background(50);
    slider = createSlider(1, 10, 1);

    for (let i = 0; i < TOTAL; i++) {
        items[i] = new P();
    }
}

function draw () {
    background(50);
    if (items.length === 0) {
        nextGeneration()
    }
    items.forEach((b, i) => {
        b.show()
        if ((b.y < height && b.y > 0) && b.dea) {
            b.think()
            b.update()
            console.log(items[0].y);

        } else {
            saveitems.push(items.splice(i, 1));
        }

    })




}

function keyPressed () {
    if (key == ' ') {
        items[0].up();
        //console.log("SPACE");
    }
}