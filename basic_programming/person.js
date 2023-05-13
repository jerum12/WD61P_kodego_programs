class Person {
  name;
  age;
  address;

  constructor(name2, age2, address2) {
    this.name = name2;
    this.age = age2;
    this.address = address2;
  }

  showDetails() {
    console.log(this.name + ' ' + this.age + ' ' + this.address);
  }
}
