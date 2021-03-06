import { AgeCalc } from "../src/galaxy.js";

describe("AgeCalc", () => {

  test("should calculate the age on planet", () => {
    const age = new AgeCalc(3, "venus");
    expect(age.planetAge()).toEqual(1.86);
  });

  test("should calculate the age on planet", () => {
    const age = new AgeCalc(2, "mars");
    expect(age.planetAge()).toEqual(3.76);
  });

  test("should calculate the age on planet", () => {
    const age = new AgeCalc(43, "jupiter");
    expect(age.planetAge()).toEqual(509.98);
  });

  test("should calculate how many years left to live on each planet", () => {
    const age = new AgeCalc(3, "venus");
    expect(age.yearsToLive()).toEqual(70.14);
  });

  test("should calculate how many years past life expectancy on each planet", () => {
    const age = new AgeCalc(9, "jupiter");
    expect(age.yearsPastExp()).toEqual(34.74);
  });
});