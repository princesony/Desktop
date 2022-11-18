const prices = [1000, 2000,3000,4000];

const tax = 1;
const taxAdjustedPrices [];

for (const price of prices) {
    taxAdjustedPrices.push(price*(1+tax));
}
console.log(taxAdjustedPrices)