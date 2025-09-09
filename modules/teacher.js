import Person from "./person";
import Student from "./student";

export default class Teacher extends Person {
    _students = [];
    get students() {
        return [...this._students];
    }
    set students(value) {
        this._students = [...value];
    }

    constructor(options) {
        this.students = options?.students ? options.students : [];
    }
}