// const categories = document.querySelector("ul#categories");
// console.log(categories);
const items = document.querySelectorAll("li.item");

console.log(`Number of categories: ${items.length}`);

items.forEach(element => {
    console.log(`Category: ${element.querySelector("h2").textContent}`);
    console.log(`Elements: ${element.querySelectorAll(".item ul li").length}`);
});