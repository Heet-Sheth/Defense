const arr = [45, 75, 53, 53, 46, 46, 46, 46, 46, 54, 3, 35];
const data = require("./data.json").products;

Array.prototype.filtering_machanism = function (callback) {
  const ans = [];
  for (let element of this) if (callback(element)) ans.push(element);
  return ans;
};
Array.prototype.mapping_mechanism = function (callback) {
  const ans = [];
  for (let element of this) ans.push(callback(element));
  return ans;
};
Array.prototype.unique = function () {
  const ans = [];
  for (let element of this) if (!ans.includes(element)) ans.push(element);

  return ans;
};
console.log(arr.filtering_machanism((num) => num > 50));
console.log(arr.mapping_mechanism((num) => num ** 2));
console.log(arr.unique());

console.log(
  data
    .filtering_machanism((item) => item.category === "laptops")
    .mapping_mechanism((item) => ({
      index: item.id,
      name: item.title,
      cost: item.price,
      brand: item.brand,
    }))
);
