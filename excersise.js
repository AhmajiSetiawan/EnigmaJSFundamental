class Person {
  #firstName;
  #lastName;
  constructor(firstName, lastName) {
    this.#firstName = firstName;
    this.#lastName = lastName;
  }
  #firstLast() {
    return `${this.#firstName} ${this.#lastName}`;
  }
  #lastFirst() {
    return `${this.#lastName}, ${this.#firstName}`;
  }
  getFullName(format = false) {
    return format ? this.#firstLast() : this.#lastFirst();
  }
}
let person = new Person("John", "Doe");
let fullName = person.getFullName();
console.log(fullName);
