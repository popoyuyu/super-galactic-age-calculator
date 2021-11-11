export class AgeCalc {
  constructor(age, planet) {
    this.age = age
    this.planets = { "mercury": 0.24, "venus": 0.62, "mars": 1.88, "jupiter": 11.86 };
    this.avgLife = 72;
    this.chosenPlanet = planet;
  }

  planetAge() {
    return parseFloat((this.planets[this.chosenPlanet] * this.age).toFixed(2));
  }

}
