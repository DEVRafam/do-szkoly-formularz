let sum = 0;
//
[...document.querySelectorAll(`.${"price-part"}`)].forEach((pricePart) => {
    sum += pricePart.textContent.split(" ")[0] * 1;
});
//
const sumParts = String(sum).split(".");
sum = `${sumParts[0]}.${sumParts[1].slice(0, 2)}`;
//
document.getElementById("price-sum").textContent = `${sum} zł`;
