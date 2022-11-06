const totalCategories = document.querySelectorAll('.item');
console.log('Number of categories:', totalCategories.length);

const categoryArray = [...totalCategories].map(category => `Category: ${category.children[0].textContent} 
Elements: ${category.children[1].children.length} `)
.join('\n');
console.log(categoryArray);