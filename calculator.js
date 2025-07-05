function add(numbers) {
  if (!numbers) return 0;

  let delimiter = /,|\n/;
  let numberSection = numbers;

  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    delimiter = new RegExp(parts[0].slice(2)); // get custom delimiter
    numberSection = parts[1];
  }

  const tokens = numberSection.split(delimiter);
  const parsed = tokens.map((n) => parseInt(n));
  return parsed.reduce((acc, val) => acc + val, 0);
}

module.exports = add;
