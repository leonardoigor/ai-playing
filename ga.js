function nextGeneration () {
    console.log('next generation');
    calculateFitness();
    for (let i = 0; i < TOTAL; i++) {
        items[i] = pickOne();
    }
    for (let i = 0; i < TOTAL; i++) {
        saveitems[i][0].dispose();
    }
    saveitems = [];
}

function pickOne () {
    let index = 0;
    let r = random(1);
    while (r > 0) {
        r = r - saveitems[index][0].fitness;
        index++;
    }
    index--;
    let bird = saveitems[index][0];
    let child = new P(bird.brain);
    child.mutate();
    return child;
}

function calculateFitness () {
    let sum = 0;
    for (let bird of saveitems) {
        sum += bird[0].score;
    }
    for (let bird of saveitems) {
        bird[0].fitness = bird[0].score / sum;
    }
}
