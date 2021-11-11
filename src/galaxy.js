export class AgeCalc {
  constructor(age) {
    this.age = age
    this.planets = { "mercury": 0.24, "venus": 0.62, "mars": 1.88, "jupiter": 11.86 };
  }

  mercuryAge() {
    for (const planet in this.planets) {
      this.age = ((this.age * this.planets[planet]).toFixed(2));
      return parseFloat(this.age);
    }
  }
}
