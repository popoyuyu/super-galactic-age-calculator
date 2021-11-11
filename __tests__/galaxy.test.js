import { AgeCalc } from "../src/galaxy.js";

describe("AgeCalc", () => {

  test("should calculate the age on planet", () => {
    const age = new AgeCalc(3, "venus");
    expect(age.planetAge()).toEqual(1.86);
  });




});