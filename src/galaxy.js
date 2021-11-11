export class AgeCalc {
  constructor(age) {
    this.age = age
    this.planets = { "mercury": 0.24, "venus": 0.62, "mars": 1.88, "jupiter": 11.86 };
  }

  mercuryAge() {
    for (let i = 0; i < this.planets.length; i++) {
      this.age = ((this.age * this.planets[i]).toFixed(2));
      return (this.age);
    }
  }

  function2() {

  }
}
