import { AgeCalc } from "../src/galaxy";

describe("AgeCalc", () => {

  test("should calculate the age on Mercury", () => {
    const age = new AgeCalc(1);
    expect(AgeCalc.mercuryAge).toEqual(0.24);
  });
});