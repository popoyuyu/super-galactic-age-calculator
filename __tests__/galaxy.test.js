import { AgeCalc } from "../src/galaxy.js";

describe("AgeCalc", () => {

  test("should calculate the age on Mercury", () => {
    const age = new AgeCalc(1);
    expect(age.mercuryAge()).toEqual(0.24);
  });
});