const form = document.querySelector("form");
const income = document.querySelector("input");
const tax = document.querySelector("p");

const slabs = [
  { slab: 2400000, taxRate: 0.3 },
  { slab: 2000000, taxRate: 0.25 },
  { slab: 1600000, taxRate: 0.2 },
  { slab: 1200000, taxRate: 0.15 },
];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let amount = parseInt(income.value);
  let sum = 0;

  slabs.forEach(({ slab, taxRate }) => {
    if (amount > slab) {
      sum += (amount - slab) * taxRate;
      amount = slab;
    }
  });

  tax.textContent = `Your total tax is ${sum}₹`;
});
