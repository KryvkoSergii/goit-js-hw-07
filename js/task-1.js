const categories = document.querySelector("ul#categories");
console.log(`Number of categories ${categories.children.length}`);

for (let element of categories.children) {
    const h2 = element.querySelector("h2");
    console.log(`Category: ${h2.textContent}`);
    const list = element.querySelector("ul");
    console.log(`Elements: ${list.children.length}`);
}

