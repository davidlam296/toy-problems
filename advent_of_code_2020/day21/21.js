const fs = require('fs');

const food = fs
  .readFileSync(__dirname + '/21.txt', 'utf8')
  .split('\n')
  .reduce((food, row) => {
    const sliceIndex = row.indexOf('(');

    food.push({
      ingredients: row.slice(0, sliceIndex - 1).split(' '),
      allergens: row.slice(sliceIndex + 10, row.length - 1).split(', '),
    });
    return food;
  }, []);

// Allergen Assessment

const part1 = (food) => {
  let allIngredients = [];
  const allergies = {};
  const ingredientsWithAllergen = new Set();

  for (const { ingredients, allergens } of food) {
    ingredients.forEach((ingredient) => allIngredients.push(ingredient));

    for (const type of allergens) {
      if (!allergies[type]) {
        allergies[type] = new Set(ingredients);

        for (const item of ingredientsWithAllergen) {
          allergies[type].delete(item);
        }
      } else {
        for (const ingredient of allergies[type]) {
          if (!ingredients.includes(ingredient)) {
            allergies[type].delete(ingredient);
          }
        }

        if (allergies[type].size === 1) {
          const food = allergies[type].values().next().value;

          ingredientsWithAllergen.add(food);

          for (const allergen in allergies) {
            if (allergen === type) continue;
            allergies[allergen].delete(food);
          }
        }
      }
    }
  }

  while (ingredientsWithAllergen.size < 8) {
    for (const type in allergies) {
      if (allergies[type].size === 1) {
        const food = allergies[type].values().next().value;

        ingredientsWithAllergen.add(food);

        for (const otherType in allergies) {
          if (type === otherType) continue;
          allergies[otherType].delete(food);
        }
      }
    }
  }

  for (const ingredient of ingredientsWithAllergen) {
    allIngredients = allIngredients.filter((i) => i !== ingredient);
  }

  return [allIngredients.length, allergies];
};

const part2 = (ingredientsWithAllergies) => {
  const ingredients = [];

  for (const type in ingredientsWithAllergies) {
    ingredients.push([
      type,
      ingredientsWithAllergies[type].values().next().value,
    ]);
  }

  return ingredients
    .sort(([typeA], [typeB]) => typeA.charCodeAt(0) - typeB.charCodeAt(0))
    .reduce((res, [type, item]) => res + item + ',', '')
    .slice(0, -1);
};

const [p1Answer, allergies] = part1(food);

console.log(p1Answer); // Answer: 2315
console.log(part2(allergies)); // Answer: 'cfzdnz,htxsjf,ttbrlvd,bbbl,lmds,cbmjz,cmbcm,dvnbh'
