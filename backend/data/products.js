const products = [
  {
    id: 1,
    name: "Weight Lose",
    calories: "750 kcal",
    imageUrl: [
      {
        id: 1,
        url: "https://res.cloudinary.com/lightsulka/image/upload/v1634293267/750kcal/750_1_s4flip.png",
      },
    ],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    additionalInfo: "4 meals per day",
    cpfc: "calories: 750, proteins: 55 gr., fats: 35 gr., carbohydrates: 55 gr",
    prices: [
      { id: 1, days: 2, price: 40 },
      { id: 2, days: 6, price: 35 },
      { id: 3, days: 12, price: 30 },
      { id: 4, days: 20, price: 25 },
      { id: 5, days: 24, price: 20 },
      { id: 6, days: 30, price: 15 },
    ],
    countInStock: 5,
  },
  {
    id: 2,
    name: "Weight Lose",
    calories: "1000 kcal",
    imageUrl:
      "https://images.unsplash.com/photo-1478144592103-25e218a04891?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1375&q=80",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    additionalInfo: "5 meals per day",
    cpfc: "calories: 1000, proteins: 75 gr., fats: 45 gr., carbohydrates: 80 gr",
    prices: [
      { id: 1, days: 2, price: 45 },
      { id: 2, days: 6, price: 40 },
      { id: 3, days: 12, price: 35 },
      { id: 4, days: 20, price: 30 },
      { id: 5, days: 24, price: 35 },
      { id: 6, days: 30, price: 30 },
    ],
    countInStock: 5,
  },
  {
    id: 3,
    name: "Weight Lose",
    calories: "1500 kcal",
    imageUrl:
      "https://images.unsplash.com/photo-1478144592103-25e218a04891?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1375&q=80",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    additionalInfo: "6 meals per day",
    cpfc: "calories: 1500, proteins: 110 gr., fats: 60 gr., carbohydrates: 130 gr",
    prices: [
      { id: 1, days: 2, price: 50 },
      { id: 2, days: 6, price: 45 },
      { id: 3, days: 12, price: 40 },
      { id: 4, days: 20, price: 35 },
      { id: 5, days: 24, price: 30 },
      { id: 6, days: 30, price: 25 },
    ],
    countInStock: 5,
  },
  {
    id: 4,
    name: "Weight Balance",
    calories: "2000 kcal",
    imageUrl:
      "https://images.unsplash.com/photo-1478144592103-25e218a04891?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1375&q=80",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    additionalInfo: "6 meals per day",
    cpfc: "calories: 2000, proteins: 130 gr., fats: 75 gr., carbohydrates: 200 gr",
    prices: [
      { id: 1, days: 2, price: 55 },
      { id: 2, days: 6, price: 50 },
      { id: 3, days: 12, price: 45 },
      { id: 4, days: 20, price: 40 },
      { id: 5, days: 24, price: 35 },
      { id: 6, days: 30, price: 30 },
    ],
    countInStock: 5,
  },
];

module.exports = products;
