function add(numbers) {
  if (!numbers) return 0;

  let delimiter = /,|\n/;
  let numberSection = numbers;

  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    delimiter = new RegExp(parts[0].slice(2));
    numberSection = parts[1];
  }

  const tokens = numberSection.split(delimiter).map(Number);
  const negatives = tokens.filter((n) => n < 0);
  if (negatives.length) {
    throw new Error("negatives not allowed: " + negatives.join(","));
  }

  return tokens.reduce((sum, n) => sum + n, 0);
}

module.exports = add;
