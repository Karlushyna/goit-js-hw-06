const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

  const list = document.getElementById('ingredients');

  const liArray = [];

  const foodIngredients = ingredients.map(ingredient => {

  const item = document.createElement('li');
  item.textContent = ingredient;
  item.classList.add('item');
  liArray.push(item);
  
  })

  list.append(...liArray);