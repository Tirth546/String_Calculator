function add(numbers) {
  if (!numbers) return 0;

  const replaced = numbers.replace(/\n/g, ",");
  const parts = replaced.split(",");
  const sum = parts.reduce((acc, val) => acc + parseInt(val), 0);
  return sum;
}

module.exports = add;
