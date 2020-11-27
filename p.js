class P {
    constructor(brain) {
        this.y = height / 2;
        this.x = 64;
        this.lift = -10
        this.velocity = 0;
        this.score = 0;
        this.fitness = 0;
        this.gravity = .7;
        this.optimizerfitness = 0;
        this.dea = true

        if (brain) {
            this.brain = brain.copy();
        } else {
            this.brain = new NeuralNetwork(2, 8, 2);
        }
    }
    mutate () {
        this.brain.mutate(0.1);

    }
    dispose () {
        // this.brain.dispose();
        // console.log(this.brain.dispose);
    }
    think () {
        let inputs = []
        inputs[0] = this.y / height;
        inputs[1] = this.velocity / 10;
        // console.log(inputs);
        let ouput = this.brain.predict(inputs)
        // console.log(ouput);
        if (ouput[0] > ouput[1]) {
            this.up()
        }

    }
    show () {
        stroke(255);
        fill(255, 100);
        ellipse(this.x, this.y, 32, 32);
    }
    offScreen () {
        return this.y > height || this.y < 0;
    }
    update () {
        if (this.y >= 450 || this.y <= 100) {
            setInterval(() => {
                this.dea = false;
            }, 1000);
        } else {
            this.dea = true
        }
        this.score++;
        this.velocity += this.gravity;
        this.y += this.velocity
    }
    up () {
        this.velocity += this.lift
        this.update()
    }
    mutate () {
        this.brain.mutate(0.1)
    }
}