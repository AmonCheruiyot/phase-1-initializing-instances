// Write your code here
// 1. Create a class for Breakfast
class Breakfast {
    constructor(food, drink) {
      this.food = food;
      this.drink = drink;
    }
  }

  // 2. Create a class for Lunch
  class Lunch {
    constructor(salad, soup, drink) {
      this.salad = salad;
      this.soup = soup;
      this.drink = drink;
    }
  }

  // 3. Create a class for Dinner
  class Dinner {
    #dessert;
    constructor(salad, soup, entree, dessert) {
      this.salad = salad;
      this.soup = soup;
      this.entree = entree;
      this.#dessert = dessert;
    }
  }

  // Example usage
  let breakfast = new Breakfast("toast", "coffee");
  let lunch = new Lunch("Caesar salad", "Tomato soup", "Iced tea");
  let dinner = new Dinner("Green salad", "Pumpkin soup", "Grilled salmon", "Cheesecake");

  console.log(breakfast); // Breakfast { food: 'toast', drink: 'coffee' }
  console.log(lunch);     // Lunch { salad: 'Caesar salad', soup: 'Tomato soup', drink: 'Iced tea' }
  console.log(dinner);    // Dinner { salad: 'Green salad', soup: 'Pumpkin soup', entree: 'Grilled salmon' }
