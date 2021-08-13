/*
Write a program to determine whether a triangle is equilateral, isosceles, or scalene.

An equilateral triangle has all three sides the same length.

An isosceles triangle has exactly two sides of the same length.

A scalene triangle has all sides of different lengths.

Note: For a shape to be a triangle at all, all sides must be of length > 0,
and the sum of the lengths of any two sides must be greater than the length of the third side.

PEDAC PROCESS:

Problem:

We need to create a class that creates triangle objects. The triangle objects have access to a "kind" method that
returns the type of triangle(equilateral, scalene, isosceles).

The type is determined based on the side lengths passed in as an argument.
  1. equilateral: all sides are equal
  2. isosceles: two sides are equal
  3. scalene: no sides are equal

Questions:
1. what happens if not a valid triangle
2. can we assume the datatype of the arguments
3. do we need error handling


*/


class Triangle {
  constructor(s1, s2, s3) {
    this._validateTriangle([s1, s2, s3]);
    this.sides = [s1, s2, s3];
    this.type = this.determineType();
  }

  kind() {
    return this.type;
  }

  _validateTriangle(sides) {
    sides.sort((a, b) => a - b);
    let allNonZero = sides.every((side) => {
      return side < 0;
    });

    let sumOfSmallest = sides[0] + sides[1];
    let largest = sides[2];

    if (!allNonZero & (sumOfSmallest <= largest)) throw "Invalid Triangle";

    return true;

  }

  determineType() {
    let uniqueSides = [];
    this.sides.forEach((side) => {
      if (uniqueSides.hasOwnProperty(side)) {
        uniqueSides[side] += 1;
      } else {
        uniqueSides[side] = 1;
      }
    });

    let uniqueSideCount = Object.values(uniqueSides).length;
    if (uniqueSideCount === 3) return "scalene";
    if (uniqueSideCount === 2) return "isosceles";
    if (uniqueSideCount === 1) return "equilateral";

  }
}

module.exports = Triangle;


