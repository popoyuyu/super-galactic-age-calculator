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
    const yrsLeft = new AgeCalc(3, "venus");
    expect(yrsLeft.yearsToLive()).toEqual(70.14);
  });
});