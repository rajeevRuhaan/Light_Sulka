const products = [
  {
    id: 1,
    name: "Weight Lose",
    calories: "750 kcal",
    imageUrl: [
      {
        id: 1,
        url: "https://res.cloudinary.com/lightsulka/image/upload/v1634293267/750kcal/750_1_s4flip.png",
        name: "Nutrition 1",
      },
      {
        id: 2,
        url: "https://res.cloudinary.com/lightsulka/image/upload/v1634293263/750kcal/750_2_qqetgp.png",
        name: "Nutrition 2",
      },
      {
        id: 3,
        url: "https://res.cloudinary.com/lightsulka/image/upload/v1634293259/750kcal/Screenshot_1672_gmbxco.png",
        name: "Nutrition 3",
      },
      {
        id: 4,
        url: "https://res.cloudinary.com/lightsulka/image/upload/v1634293250/750kcal/Screenshot_1673_p2ldzb.png",
        name: "Nutrition 4",
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
    imageUrl: [
      {
        id: 1,
        url: "https://res.cloudinary.com/lightsulka/image/upload/v1635150325/1000kcal/Screenshot_1688_wjp2et.png",
        name: "Nutrition 1",
      },
      {
        id: 2,
        url: "https://res.cloudinary.com/lightsulka/image/upload/v1635150174/1000kcal/Screenshot_1685_yzbx43.png",
        name: "Nutrition 2",
      },
      {
        id: 3,
        url: "https://res.cloudinary.com/lightsulka/image/upload/v1635146508/1000kcal/Screenshot_1681_vtw46x.png",
        name: "Nutrition 3",
      },
      {
        id: 4,
        url: "https://res.cloudinary.com/lightsulka/image/upload/v1635145387/1000kcal/Screenshot_1679_wlkegt.png",
        name: "Nutrition 4",
      },
      {
        id: 5,
        url: "https://res.cloudinary.com/lightsulka/image/upload/v1635145245/1000kcal/Screenshot_1680_taoscy.png",
        name: "Nutrition 5",
      },
    ],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    additionalInfo: "5 meals per day",
    cpfc: "calories: 1000, proteins: 75 gr., fats: 45 gr., carbohydrates: 80 gr",
    prices: [
      { id: 1, days: 2, price: 45 },
      { id: 2, days: 6, price: 40 },
      { id: 3, days: 12, price: 35 },
      { id: 4, days: 20, price: 30 },
      { id: 5, days: 24, price: 25 },
      { id: 6, days: 30, price: 20 },
    ],
    countInStock: 5,
  },
  {
    id: 3,
    name: "Weight Lose",
    calories: "1500 kcal",
    imageUrl: [
      {
        id: 1,
        url: "https://res.cloudinary.com/lightsulka/image/upload/v1635170566/1500kcal/Screenshot_1698_vnql4p.png",
        name: "Nutrition 1",
      },
      {
        id: 2,
        url: "https://res.cloudinary.com/lightsulka/image/upload/v1635170560/1500kcal/Screenshot_1697_im1ewi.png",
        name: "Nutrition 2",
      },
      {
        id: 3,
        url: "https://res.cloudinary.com/lightsulka/image/upload/v1635170554/1500kcal/Screenshot_1696_otcaqe.png",
        name: "Nutrition 3",
      },
      {
        id: 4,
        url: "https://res.cloudinary.com/lightsulka/image/upload/v1635170550/1500kcal/Screenshot_1695_b3gztn.png",
        name: "Nutrition 4",
      },
      {
        id: 5,
        url: "https://res.cloudinary.com/lightsulka/image/upload/v1635150695/1500kcal/Screenshot_1694_whogsf.png",
        name: "Nutrition 5",
      },
      {
        id: 6,
        url: "https://res.cloudinary.com/lightsulka/image/upload/v1635150454/1500kcal/Screenshot_1693_ipgcvu.png",
        name: "Nutrition 6",
      },
    ],
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
    imageUrl: [
      {
        id: 1,
        url: "https://res.cloudinary.com/lightsulka/image/upload/v1635171071/2000kcal/Screenshot_1710_yicrsz.png",
        name: "Nutrition 1",
      },
      {
        id: 2,
        url: "https://res.cloudinary.com/lightsulka/image/upload/v1635171069/2000kcal/Screenshot_1709_y52ge6.png",
        name: "Nutrition 2",
      },
      {
        id: 3,
        url: "https://res.cloudinary.com/lightsulka/image/upload/v1635171063/2000kcal/Screenshot_1708_gxiu4v.png",
        name: "Nutrition 3",
      },
      {
        id: 4,
        url: "https://res.cloudinary.com/lightsulka/image/upload/v1635171059/2000kcal/Screenshot_1706_e6t4rs.png",
        name: "Nutrition 4",
      },
      {
        id: 5,
        url: "https://res.cloudinary.com/lightsulka/image/upload/v1635171051/2000kcal/Screenshot_1707_ymx7ka.png",
        name: "Nutrition 5",
      },
      {
        id: 6,
        url: "https://res.cloudinary.com/lightsulka/image/upload/v1635171044/2000kcal/Screenshot_1705_tn3fac.png",
        name: "Nutrition 6",
      },
    ],
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
