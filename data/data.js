// Data source: https://www.allrecipes.com/search?q=alfredo+sauce

export const defaultIngredients2 = [
  "BUTTER",
  "GARLIC",
  "PEPPER_BLACK",
  "PEPPER_WHITE",
  "FLOUR",
  "CREAM_CHEESE",
];

export const defaultIngredients = [
  "BUTTER",
  "CREAM_CHEESE",
  "GARLIC",
  "MILK",
  "PARMESAN",
  "PEPPER_BLACK",
  "PEPPER_WHITE",
  "HEAVY_CREAM",
  "PARSLEY",
  "WHIPPING_CREAM",
  "NUTMEG",
  "MOZZARELLA",
  "SPINACH",
  "FLOUR",
  "ITALIAN_SEASONING",
];

export const ingredients = [
  {
    id: "BUTTER",
    name: "Butter",
  },
  {
    id: "CREAM_CHEESE",
    name: "Cream Cheese",
  },
  {
    id: "GARLIC",
    name: "Garlic / Garlic Powder",
  },
  {
    id: "MILK",
    name: "Milk",
  },
  {
    id: "PARMESAN",
    name: "Parmesan Cheese",
  },
  {
    id: "PEPPER_BLACK",
    name: "Black Pepper",
  },
  {
    id: "PEPPER_WHITE",
    name: "White Pepper",
  },
  {
    id: "HEAVY_CREAM",
    name: "Heavy Cream",
  },
  {
    id: "PARSLEY",
    name: "Parsley",
  },
  {
    id: "WHIPPING_CREAM",
    name: "Heavy Whipping Cream",
  },
  {
    id: "NUTMEG",
    name: "Ground Nutmeg",
  },
  {
    id: "MOZZARELLA",
    name: "Mozzarella",
  },
  {
    id: "SPINACH",
    name: "Spinach",
  },
  {
    id: "FLOUR",
    name: "Flour (All purpose)",
  },
  {
    id: "ITALIAN_SEASONING",
    name: "Italian Seasoning",
  },
].sort((a, b) => a.name.localeCompare(b.name));

// Recipe structure

export const recipes = [
  {
    source:
      "https://www.allrecipes.com/recipe/19402/quick-and-easy-alfredo-sauce/",
    id: "19402",
    name: "Quick and Easy Alfredo Sauce",
    description:
      "I experimented with Alfredo sauce until I found a quick, cheap, and easy Alfredo sauce combination — the secret ingredient is cream cheese!",
    image:
      "https://www.allrecipes.com/thmb/pxgfMIs12R7_EaCUBpigaN-mvc8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/19402-quick-and-easy-alfredo-sauce-DDMFS-4x3-17abb2055c714807944172db9172b045.jpg",

    prepTime: "5",
    cookTime: "5",
    servings: "10",
    ingredients: [
      { item: "BUTTER", qty: "1/2 cup butter" },
      { item: "CREAM_CHEESE", qty: "1 (8 ounce) package cream cheese" },
      {
        item: "GARLIC",
        qty: "2 teaspoons garlic powder",
      },
      {
        item: "MILK",
        qty: "2 cups milk",
      },
      { item: "PARMESAN", qty: "6 ounces grated Parmesan cheese" },
      {
        item: "PEPPER_BLACK",
        qty: "1/8 teaspoon ground black pepper",
      },
    ],
    directions: [
      {
        description: "Gather all ingredients.",
      },
      {
        description:
          "Melt butter in a medium, non-stick saucepan over medium heat. Add cream cheese and garlic powder, stirring with a wire whisk until smooth. Add milk, a little at a time, whisking to smooth out lumps. Stir in Parmesan cheese and pepper.",
      },
      {
        description: "Toss with hot pasta to serve.",
      },
    ],
  },
  {
    source: "https://www.allrecipes.com/recipe/22831/alfredo-sauce/",
    id: "22831",
    name: "Alfredo Sauce",
    description:
      "This Alfredo sauce recipe always turns out rich and creamy! A delicious way to transform plain fettuccine pasta or steamed vegetables.",
    image:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpublic-assets.meredithcorp.io%2F241314795d0741a899d7931a02a2453c%2F165438861416543886002054403983139353302407.jpg&q=60&c=sc&orient=true&poi=auto&h=512",

    prepTime: "10",
    cookTime: "20",
    servings: "4",
    ingredients: [
      { item: "BUTTER", qty: "1/4 cup butter" },
      { item: "HEAVY_CREAM", qty: "1 cup heavy cream" },
      {
        item: "GARLIC",
        qty: "2 teaspoons garlic powder",
      },
      {
        item: "PARMESAN",
        qty: "1 1/2 cups freshly grated Parmesan cheese",
      },
      { item: "GARLIC", qty: "1 clove garlic, crushed" },
      {
        item: "PARSLEY",
        qty: "1/4 cup chopped fresh parsley",
      },
    ],
    directions: [
      {
        description: "Gather all ingredients.",
      },
      {
        description:
          "Melt butter in a medium saucepan over low heat. Stir in cream and simmer for 5 minutes.",
      },
      {
        description:
          "Add cheese and garlic; whisk continuously until heated through. Stir in parsley and serve.",
      },
      {
        description: "Serve immediately and enjoy!",
      },
    ],
  },
  {
    source: "https://www.allrecipes.com/recipe/267874/easy-keto-alfredo-sauce/",
    id: "267874",
    name: "Easy Keto Alfredo Sauce",
    description:
      "This creamy keto Alfredo sauce is easy to make and a lovely treat for yourself and your guests! It pairs well with pasta or zoodles (spiralized zucchini). You can even add chicken or shrimp. Sauce will become very thick if stored in the refrigerator. Simply heat the sauce up for it to be pourable.",
    image:
      "https://www.allrecipes.com/thmb/0auOS7ghgpyIGA0oHS6dIKK2W9M=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/5681786-6aaa6f5be9d4491f97110958950b8fd5.jpg",
    prepTime: "5",
    cookTime: "10",
    servings: "6",
    ingredients: [
      { item: "BUTTER", qty: "1/2 cup butter" },
      {
        item: "GARLIC",
        qty: "2 cloves garlic, crushed",
      },
      { item: "WHIPPING_CREAM", qty: "2 cups heavy whipping cream" },

      {
        item: "CREAM_CHEESE",
        qty: "1/2 (4 ounce) package cream cheese, softened",
      },
      { item: "PARMESAN", qty: "1 1/2 cups grated Parmesan cheese" },
      {
        item: "NUTMEG",
        qty: "1 pinch ground nutmeg, or to taste",
        optional: true,
      },
      {
        item: "PEPPER_WHITE",
        qty: "1 pinch ground white pepper, or to taste",
        optional: true,
      },
    ],
    directions: [
      {
        description:
          "Melt butter in a medium saucepan over low heat. Add garlic and cook until fragrant, about 2 minutes.",
      },
      {
        description:
          "Stir in heavy cream and cream cheese. Gradually add Parmesan cheese, stirring constantly until well incorporated and melted, about 5 to 7 minutes. Stir in salt, nutmeg, and white pepper. The sauce will thicken as it cools.",
      },
    ],
  },
  {
    source:
      "https://www.allrecipes.com/recipe/237995/better-than-olive-garden-alfredo-sauce/",
    id: "237995",
    name: "Better-Than-Olive Garden Alfredo Sauce",
    description:
      "This Olive Garden Alfredo sauce is better than the famous Italian restaurant chain's version. Alfredo sauce has always had my heart, whether chicken Alfredo or fettuccine Alfredo. This is a simple and basic recipe for Italian starters. Sprinkle some freshly chopped parsley over your plate for an added touch. Enjoy!",
    image:
      "https://www.allrecipes.com/thmb/kicGB5G3ACWGbpxI3uDxEtTwcJo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/237995-betterthanolivegardenalfredo-cd-3174-2000-76f9532e066446dd9deeb4bd75720798.jpg",

    prepTime: "10",
    cookTime: "25",
    servings: "4",
    ingredients: [
      { item: "BUTTER", qty: "3 tablespoons sweet butter" },
      { item: "WHIPPING_CREAM", qty: "2 cups heavy whipping cream" },
      {
        item: "GARLIC",
        qty: "2 cloves garlic, minced",
      },
      {
        item: "PEPPER_WHITE",
        qty: "1/4 teaspoon ground white pepper",
      },
      { item: "PARMESAN", qty: "1/2 cup grated Parmesan cheese" },
      {
        item: "MOZZARELLA",
        qty: "3/4 cup shredded mozzarella cheese",
      },
    ],
    directions: [
      {
        description:
          "Melt butter and olive oil in a saucepan over medium-low heat. Add cream, garlic, and white pepper; bring to just under a boil. Reduce heat and simmer, stirring often, until mixture is slightly reduced, about 5 minutes.",
      },
      {
        description:
          "Stir Parmesan cheese into cream mixture; simmer until sauce is thickened and smooth, 8 to 10 minutes. Add mozzarella cheese; cook and stir until melted, about 5 minutes.",
      },
      {
        description:
          "While the sauce is cooking, bring a large pot of lightly salted water to a boil. Add pasta; cook, stirring occasionally, until cooked through but firm to the bite, 3 to 5 minutes.",
      },
      {
        description:
          "Drain and transfer pasta to serving plates. Spoon sauce over pasta.",
      },
    ],
  },
  {
    source:
      "https://www.allrecipes.com/recipe/231860/spinach-alfredo-sauce-better-than-olive-garden/",
    id: "231860",
    name: "Spinach Alfredo Sauce (Better than Olive Garden)",
    description:
      "This spinach Alfredo tastes better than the version you get at Olive Garden! Top with grilled chicken on fettuccine pasta for a complete meal or use as a dip for bread sticks. When I make this dish, everyone raves over it. Add more spinach if you're a spinach lover or leave it out if you're not a fan. I like adding lots of garlic.",
    image:
      "https://www.allrecipes.com/thmb/69T3C7tVKbmW94Z4JIzKggSwMWY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/1040732-691db36442b344978467fce34c7de00a.jpg",

    prepTime: "5",
    cookTime: "20",
    servings: "5",
    ingredients: [
      { item: "BUTTER", qty: "1/2 cup butter" },
      { item: "SPINACH", qty: "3/4 cup thawed frozen chopped spinach" },
      {
        item: "WHIPPING_CREAM",
        qty: "1 pint heavy whipping cream",
      },
      {
        item: "CREAM_CHEESE",
        qty: "3 tablespoons cream cheese",
      },
      { item: "PARMESAN", qty: "1 cup grated Parmesan cheese" },
      { item: "GARLIC", qty: "1 teaspoon garlic powder" },
      {
        item: "PEPPER_BLACK",
        qty: "1 pinch salt and freshly ground black pepper",
      },
    ],
    directions: [
      {
        description:
          "Melt butter in a saucepan over low heat. Add spinach; cook and stir until warmed through, about 1 minute. Stir in heavy cream and cream cheese until cream cheese is melted, about 5 minutes.",
      },
      {
        description:
          "Fold in Parmesan cheese and garlic powder; season with salt and pepper. Simmer until sauce is thickened and smooth, about 10 more minutes.",
      },
      {
        description: "Toss with hot pasta to serve.",
      },
    ],
  },
  {
    source: "https://www.allrecipes.com/recipe/236973/creamy-alfredo-sauce/",
    id: "236973",
    name: "Creamy Alfredo Sauce",
    description:
      "This Alfredo sauce with milk, Parmesan cheese, and garlic is a quick and easy recipe that your family will love! You may add more Parmesan, garlic, and salt to taste. You can easily add anything you like, such as grilled shrimp, chicken, etc. I also love pouring this sauce over pasta with sautéed peppers.",
    image:
      "https://www.allrecipes.com/thmb/B-OTFUgCWDzoqr9TH4sjY5AjdPY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/AR-236973-CreamyAlfredoSauce-0238-4x3-1-01e7091f47ae452d991abe32cbed5921.jpg",

    prepTime: "10",
    cookTime: "20",
    servings: "4",
    ingredients: [
      { item: "BUTTER", qty: "1/4 cup butter, or more to taste" },
      {
        item: "GARLIC",
        qty: "1 clove garlic, minced",
      },
      { item: "FLOUR", qty: "1/4 cup all-purpose flour" },
      { item: "PARMESAN", qty: "2 tablespoons grated Parmesan cheese" },
      {
        item: "MILK",
        qty: "2 cups milk",
      },
      {
        item: "ITALIAN_SEASONING",
        qty: "1 1/2 teaspoons Italian seasoning",
      },
      {
        item: "PEPPER_BLACK",
        qty: "1 pinch ground black pepper",
      },
    ],
    directions: [
      {
        description:
          "Melt butter in a large saucepan over medium-high heat; add garlic and sauté until golden, 2 to 3 minutes.",
      },
      {
        description:
          "Reduce heat to medium and gradually stir in flour until smooth, 3 to 5 minutes.",
      },
      {
        description:
          "Add Parmesan cheese and stir until melted and mixture is thickened, 2 to 3 minutes.",
      },
      {
        description:
          "Slowly whisk in milk, stirring constantly, until smooth, about 5 minutes.",
      },
      {
        description:
          "Season with Italian seasoning, salt, and pepper. Cook and stir until sauce reaches desired consistency, 5 to 10 minutes.",
      },
    ],
  },
  {
    source: "https://thesaltymarshmallow.com/best-homemade-alfredo-sauce/",
    id: "best-homemade-alfredo-sauce",
    name: "Best Homemade Alfredo Sauce",
    description:
      "Best Homemade Alfredo Sauce is rich, creamy, and packed with garlic parmesan flavor!  This Alfredo Sauce is easy to make and perfect with your favorite pasta!",
    image:
      "https://thesaltymarshmallow.com/wp-content/uploads/2018/08/alfredo-sauce3.jpg",
    prepTime: "5",
    cookTime: "5",
    servings: "2",
    ingredients: [
      { item: "BUTTER", qty: "1/2 cup butter" },
      { item: "WHIPPING_CREAM", qty: "1 1/2 Cups Heavy Whipping Cream" },
      {
        item: "GARLIC",
        qty: "2 Teaspoons Garlic Minced",
      },
      {
        item: "ITALIAN_SEASONING",
        qty: "1/2 Teaspoon Italian Seasoning",
      },
      { item: "PARMESAN", qty: "2 Cups Freshly Grated Parmesan Cheese" },
      {
        item: "PEPPER_BLACK",
        qty: "1/4 Teaspoon Pepper",
      },
    ],
    directions: [
      {
        description: "Add the butter and cream to a large skillet.",
      },
      {
        description: "Simmer over low heat for 2 minutes.",
      },
      {
        description:
          "Whisk in the garlic, Italian seasoning, salt, and pepper for one minute.",
      },
      { description: "Whisk in the parmesan cheese until melted." },
      { description: "Serve immediately." },
    ],
  },
  {
    source:
      "https://www.foodnetwork.com/recipes/ree-drummond/alfredo-sauce-2165760",
    id: "2165760",
    name: "Alfredo Sauce by Ree Drummond",
    description:
      "Experience the ultimate in creamy indulgence with our Homemade Alfredo Sauce. Rich, garlicky, and packed with parmesan goodness, this easy-to-make sauce elevates any pasta dish into a gourmet delight. Perfect for both chefs and home cooks, it turns ordinary dinners into culinary adventures, delivering pure decadence in every bite.",
    image:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/8/20/0/WU0511H_alfredo-sauce-recipe_s4x3.jpg.rend.hgtvcom.1280.720.suffix/1433674870581.jpeg",
    prepTime: "10",
    cookTime: "10",
    servings: "2",
    ingredients: [
      { item: "BUTTER", qty: "1 stick butter" },
      { item: "HEAVY_CREAM", qty: "1 cup heavy cream" },
      { item: "PARMESAN", qty: "2 cups freshly grated Parmesan" },
      {
        item: "PEPPER_BLACK",
        qty: "Freshly ground black pepper ",
      },
    ],
    directions: [
      {
        description:
          "In a saucepan or skillet, warm the butter and cream. Season with salt and pepper. Add the Parmesan and stir until melted.",
      },
      {
        description: "Toss to combine, thinning with pasta water if necessary.",
      },
    ],
  },
  {
    source: "https://bellyfull.net/homemade-alfredo-sauce/",
    id: "homemade-alfredo-sauce",
    name: "Homemade Alfredo Sauce",
    description:
      "The best homemade Alfredo sauce recipe made from scratch with only a handful of natural ingredients. It’s so easy, comes together in just minutes, and will knock your pasta socks off! Store-bought Alfredo doesn’t even compare.",
    image:
      "https://bellyfull.net/wp-content/uploads/2021/02/Alfredo-Sauce-blog.jpg",
    prepTime: "10",
    cookTime: "10",
    servings: "2",
    ingredients: [
      {
        item: "BUTTER",
        qty: "1/2 cup butter , cut into large cubes or slices",
      },
      { item: "WHIPPING_CREAM", qty: "2 cups heavy whipping cream" },
      { item: "GARLIC", qty: "1 clove garlic , minced" },
      { item: "GARLIC", qty: "3/4 teaspoon garlic powder" },
      { item: "ITALIAN_SEASONING", qty: "3/4 teaspoon Italian Seasoning" },
      {
        item: "PARMESAN",
        qty: "2 cups freshly grated Parmigiano-Reggiano cheese",
      },
      {
        item: "PEPPER_BLACK",
        qty: "Freshly ground black pepper ",
      },
    ],
    directions: [
      {
        description:
          "Add the butter and cream to a large nonstick saute pan, over medium-low heat; whisk until butter has melted.",
      },
      {
        description:
          "Add in the minced garlic, garlic powder, Italian seasoning, salt, and pepper; whisk until combined and smooth.",
      },
      {
        description:
          "Bring to a gentle simmer (do not boil) and cook for 3-4 minutes, whisking constantly, until it starts to thicken.",
      },
      {
        description:
          "Stir in the parmesan cheese just until melted and the sauce is smooth.",
      },
      {
        description:
          "Take off the heat and toss with cooked fettuccine noodles (or your favorite pasta.)",
      },
      {
        description:
          "(If the sauce isn't quite thick enough, allow it to stand for 2-3 minutes before tossing with the pasta.)",
      },
    ],
  },
  {
    source:
      "https://www.delish.com/cooking/recipe-ideas/a43353119/alfredo-sauce-recipe/",
    id: "a43353119",
    name: "Homemade Alfredo Sauce by Francesca Zani",
    description:
      "We love Alfredo sauce, and are constantly trying to use it in creative ways. Classic chicken fettuccine Alfredo, weeknight-friendly one- pan ranch chicken Alfredo, and party perfect Alfredo asparagus bundles are three of our faves, but there’s no limit to how you can use this creamy sauce.",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/delish-23-03-29-alfredosauce-ls-191-secondary-643446dc662ed.jpg?resize=980:*",
    prepTime: "5",
    cookTime: "15",
    servings: "20",
    ingredients: [
      {
        item: "BUTTER",
        qty: "3 tbsp. unsalted butter",
      },
      { item: "WHIPPING_CREAM", qty: "2 c. heavy cream" },
      { item: "GARLIC", qty: "1 clove garlic, finely grated" },
      {
        item: "PARMESAN",
        qty: "1 c. finely grated Parmesan (about 2 oz.)",
      },
    ],
    directions: [
      {
        description:
          "In a medium saucepan over medium heat, melt butter. Add garlic and cook, stirring frequently, until fragrant, about 2 minutes. Stir in cream and bring to a simmer. Cook, stirring occasionally, until sauce thickens slightly, about 10 minutes.",
      },
      {
        description:
          "Remove pot from heat. Gradually add Parmesan, whisking constantly, until sauce is smooth and creamy. Whisk in salt.",
      },
    ],
  },
];
