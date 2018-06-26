const Doubler = class {
    constructor(n = 3) {
        this.n = n;
    }
    double() {
        this.n = this.n * 2;
        return this;
    }
    get result() {
        return this.n;
    }
};
const el = new Doubler();
console.log(
    el.double().double().result
);
