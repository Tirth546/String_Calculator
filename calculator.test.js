const add = require("./calculator");

test("returns 0 for empty string", () => {
  expect(add("")).toBe(0);
});

test("returns number itself if one number", () => {
  expect(add("1")).toBe(1);
});

test("returns sum of two numbers", () => {
  expect(add("1,2")).toBe(3);
});

test("returns sum of multiple numbers", () => {
  expect(add("1,2,3,4")).toBe(10);
});

test("handles newline as delimiter", () => {
  expect(add("1\n2,3")).toBe(6);
});
