import { AgeCalc } from "../src/galaxy.js";

describe("AgeCalc", () => {

  test("should calculate the age on planet", () => {
    const age = new AgeCalc(1);
    expect(age.planetAge()).toEqual(0.24);
  });

  test("should calculate the age on Venus", () => {
    const age = new AgeCalc(1);
    exepct(age.mercuryAge()).toEqual(0.24);
  });


});