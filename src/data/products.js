import riceImg from "../assets/images/rice.png";
import milkImg from "../assets/images/milk.png";
import appleImg from "../assets/images/apple.png";
import eggsImg from "../assets/images/eggs.png";
import spinachImg from "../assets/images/spinach.png";
import cookiesImg from "../assets/images/cookies.png";

export const products = [
  {
    id: 1,
    name: "Premium Rice",
    category: "Groceries",
    qty: "5 kg",
    image: riceImg,
    price: 320,
    oldPrice: 360,
    rating: 4.8,
    discount: "11% OFF",
    stores: [
      {
        name: "Blinkit",
        price: 299,
        delivery: "10 mins",
        url: "https://blinkit.com/",
      },
      {
        name: "Zepto",
        price: 301,
        delivery: "12 mins",
        url: "https://www.zeptonow.com/",
      },
      {
        name: "Instamart",
        price: 305,
        delivery: "15 mins",
        url: "https://www.swiggy.com/instamart",
      },
      {
        name: "JioMart",
        price: 310,
        delivery: "30 mins",
        url: "https://www.jiomart.com/",
      },
    ],
  },

  {
    id: 2,
    name: "Fresh Milk",
    category: "Dairy",
    qty: "1 L",
    image: milkImg,
    price: 65,
    oldPrice: 75,
    rating: 4.7,
    discount: "13% OFF",
    stores: [
      {
        name: "Blinkit",
        price: 60,
        delivery: "10 mins",
        url: "https://blinkit.com/",
      },
      {
        name: "Zepto",
        price: 61,
        delivery: "12 mins",
        url: "https://www.zeptonow.com/",
      },
      {
        name: "Instamart",
        price: 63,
        delivery: "15 mins",
        url: "https://www.swiggy.com/instamart",
      },
      {
        name: "JioMart",
        price: 64,
        delivery: "30 mins",
        url: "https://www.jiomart.com/",
      },
    ],
  },

  {
    id: 3,
    name: "Apple",
    category: "Fruits",
    qty: "1 kg",
    image: appleImg,
    price: 180,
    oldPrice: 220,
    rating: 4.8,
    discount: "18% OFF",
    stores: [
      {
        name: "Blinkit",
        price: 170,
        delivery: "10 mins",
        url: "https://blinkit.com/",
      },
      {
        name: "Zepto",
        price: 175,
        delivery: "12 mins",
        url: "https://www.zeptonow.com/",
      },
      {
        name: "Instamart",
        price: 178,
        delivery: "15 mins",
        url: "https://www.swiggy.com/instamart",
      },
      {
        name: "JioMart",
        price: 179,
        delivery: "30 mins",
        url: "https://www.jiomart.com/",
      },
    ],
  },

  {
    id: 4,
    name: "Eggs",
    category: "Dairy",
    qty: "12 pcs",
    image: eggsImg,
    price: 95,
    oldPrice: 110,
    rating: 4.8,
    discount: "14% OFF",
    stores: [
      {
        name: "Blinkit",
        price: 89,
        delivery: "10 mins",
        url: "https://blinkit.com/",
      },
      {
        name: "Zepto",
        price: 90,
        delivery: "12 mins",
        url: "https://www.zeptonow.com/",
      },
      {
        name: "Instamart",
        price: 92,
        delivery: "15 mins",
        url: "https://www.swiggy.com/instamart",
      },
      {
        name: "JioMart",
        price: 94,
        delivery: "30 mins",
        url: "https://www.jiomart.com/",
      },
    ],
  },

  {
    id: 5,
    name: "Spinach",
    category: "Vegetables",
    qty: "250 g",
    image: spinachImg,
    price: 35,
    oldPrice: 45,
    rating: 4.6,
    discount: "22% OFF",
    stores: [
      {
        name: "Blinkit",
        price: 30,
        delivery: "10 mins",
        url: "https://blinkit.com/",
      },
      {
        name: "Zepto",
        price: 31,
        delivery: "12 mins",
        url: "https://www.zeptonow.com/",
      },
      {
        name: "Instamart",
        price: 33,
        delivery: "15 mins",
        url: "https://www.swiggy.com/instamart",
      },
      {
        name: "JioMart",
        price: 34,
        delivery: "30 mins",
        url: "https://www.jiomart.com/",
      },
    ],
  },

  {
    id: 6,
    name: "Cookies",
    category: "Snacks",
    qty: "300 g",
    image: cookiesImg,
    price: 120,
    oldPrice: 145,
    rating: 4.7,
    discount: "17% OFF",
    stores: [
      {
        name: "Blinkit",
        price: 115,
        delivery: "10 mins",
        url: "https://blinkit.com/",
      },
      {
        name: "Zepto",
        price: 117,
        delivery: "12 mins",
        url: "https://www.zeptonow.com/",
      },
      {
        name: "Instamart",
        price: 118,
        delivery: "15 mins",
        url: "https://www.swiggy.com/instamart",
      },
      {
        name: "JioMart",
        price: 119,
        delivery: "30 mins",
        url: "https://www.jiomart.com/",
      },
    ],
  },
];