import Person from "./person";

export default class Student extends Person {
    _marks = [];
    get marks() {
        return [...this._marks];
    }
    set marks(value) {
        this._marks = [...value];
    }

    constructor(options) {
        this.marks = options?.marks ? options.marks : [];
    }
}