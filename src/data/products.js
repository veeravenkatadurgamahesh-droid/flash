export const stores = [
  { id: "blinkit", name: "Blinkit", color: "#F9C22E", dot: "#F9C22E" },
  { id: "instamart", name: "Instamart", color: "#FC8019", dot: "#FC8019" },
  { id: "bigbasket", name: "BigBasket", color: "#84C225", dot: "#84C225" },
  { id: "jiomart", name: "JioMart", color: "#0070C0", dot: "#0070C0" },
  { id: "amazon", name: "Amazon Fresh", color: "#FF9900", dot: "#FF9900" },
  { id: "zepto", name: "Zepto", color: "#8B5CF6", dot: "#8B5CF6" },
  { id: "flipkart", name: "Flipkart Minutes", color: "#2874F0", dot: "#2874F0" },
];

export const categories = [
  { id: "vegetables", label: "Vegetables", emoji: "🥦" },
  { id: "fruits", label: "Fruits", emoji: "🍎" },
  { id: "dairy", label: "Dairy", emoji: "🥛" },
  { id: "bakery", label: "Bakery", emoji: "🍞" },
  { id: "staples", label: "Staples", emoji: "🌾" },
  { id: "snacks", label: "Snacks", emoji: "🍪" },
  { id: "beverages", label: "Beverages", emoji: "🥤" },
  { id: "household", label: "Household", emoji: "🧼" },
];

export const products = [
  {
    id: 1,
    name: "Amul Full Cream Milk",
    category: "dairy",
    emoji: "🥛",
    qty: "1 L",
    rating: 4.5,
    reviews: 2340,
    image: "https://images.pexels.com/photos/236010/pexels-photo-236010.jpeg?auto=compress&cs=tinysrgb&w=200",
    prices: [
      { store: "bigbasket", price: 55, original: 60 },
      { store: "blinkit", price: 58, original: 60 },
      { store: "instamart", price: 57, original: 60 },
      { store: "jiomart", price: 56, original: 60 },
      { store: "amazon", price: 59, original: 60 },
      { store: "zepto", price: 60, original: 60 },
    ],
    tags: ["bestseller", "daily"],
  },
  {
    id: 2,
    name: "Fresho Apple Shimla",
    category: "fruits",
    emoji: "🍎",
    qty: "1 kg",
    rating: 4.3,
    reviews: 1890,
    image: "https://images.pexels.com/photos/1510392/pexels-photo-1510392.jpeg?auto=compress&cs=tinysrgb&w=200",
    prices: [
      { store: "jiomart", price: 120, original: 150 },
      { store: "amazon", price: 122, original: 150 },
      { store: "bigbasket", price: 125, original: 150 },
      { store: "blinkit", price: 130, original: 150 },
      { store: "instamart", price: 128, original: 150 },
      { store: "zepto", price: 135, original: 150 },
    ],
    tags: ["fresh"],
  },
  {
    id: 3,
    name: "Tata Salt",
    category: "staples",
    emoji: "🧂",
    qty: "1 kg",
    rating: 4.7,
    reviews: 5670,
    image: "https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg?auto=compress&cs=tinysrgb&w=200",
    prices: [
      { store: "jiomart", price: 22, original: 28 },
      { store: "bigbasket", price: 24, original: 28 },
      { store: "blinkit", price: 25, original: 28 },
      { store: "instamart", price: 25, original: 28 },
      { store: "amazon", price: 26, original: 28 },
      { store: "zepto", price: 27, original: 28 },
    ],
    tags: ["staple"],
  },
  {
    id: 4,
    name: "Britannia Bread",
    category: "bakery",
    emoji: "🍞",
    qty: "400 g",
    rating: 4.2,
    reviews: 3210,
    image: "https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=200",
    prices: [
      { store: "bigbasket", price: 42, original: 50 },
      { store: "blinkit", price: 44, original: 50 },
      { store: "jiomart", price: 43, original: 50 },
      { store: "amazon", price: 45, original: 50 },
      { store: "instamart", price: 46, original: 50 },
      { store: "zepto", price: 48, original: 50 },
    ],
    tags: ["bakery"],
  },
  {
    id: 5,
    name: "Lays Classic Salted",
    category: "snacks",
    emoji: "🍪",
    qty: "52 g",
    rating: 4.4,
    reviews: 8900,
    image: "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=200",
    prices: [
      { store: "blinkit", price: 20, original: 20 },
      { store: "zepto", price: 20, original: 20 },
      { store: "jiomart", price: 18, original: 20 },
      { store: "bigbasket", price: 20, original: 20 },
      { store: "instamart", price: 20, original: 20 },
      { store: "amazon", price: 19, original: 20 },
    ],
    tags: ["snack"],
  },
  {
    id: 6,
    name: "Tropicana Orange Juice",
    category: "beverages",
    emoji: "🥤",
    qty: "1 L",
    rating: 4.1,
    reviews: 1560,
    image: "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=200",
    prices: [
      { store: "amazon", price: 115, original: 140 },
      { store: "bigbasket", price: 118, original: 140 },
      { store: "jiomart", price: 120, original: 140 },
      { store: "blinkit", price: 125, original: 140 },
      { store: "instamart", price: 122, original: 140 },
      { store: "zepto", price: 130, original: 140 },
    ],
    tags: ["beverage"],
  },
  {
    id: 7,
    name: "Bananas",
    category: "fruits",
    emoji: "🍌",
    qty: "1 dozen",
    rating: 4.6,
    reviews: 4320,
    image: "https://images.pexels.com/photos/1093038/pexels-photo-1093038.jpeg?auto=compress&cs=tinysrgb&w=200",
    prices: [
      { store: "instamart", price: 35, original: 45 },
      { store: "bigbasket", price: 38, original: 45 },
      { store: "blinkit", price: 40, original: 45 },
      { store: "jiomart", price: 36, original: 45 },
      { store: "amazon", price: 42, original: 45 },
      { store: "zepto", price: 39, original: 45 },
    ],
    tags: ["fresh"],
  },
  {
    id: 8,
    name: "Tomatoes",
    category: "vegetables",
    emoji: "🍅",
    qty: "500 g",
    rating: 4.0,
    reviews: 2100,
    image: "https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=200",
    prices: [
      { store: "zepto", price: 28, original: 40 },
      { store: "bigbasket", price: 30, original: 40 },
      { store: "blinkit", price: 32, original: 40 },
      { store: "jiomart", price: 29, original: 40 },
      { store: "amazon", price: 33, original: 40 },
      { store: "instamart", price: 31, original: 40 },
    ],
    tags: ["fresh"],
  },
  {
    id: 9,
    name: "Vim Dishwash Bar",
    category: "household",
    emoji: "🧼",
    qty: "250 g",
    rating: 4.5,
    reviews: 3400,
    image: "https://images.pexels.com/photos/4239146/pexels-photo-4239146.jpeg?auto=compress&cs=tinysrgb&w=200",
    prices: [
      { store: "jiomart", price: 30, original: 38 },
      { store: "bigbasket", price: 32, original: 38 },
      { store: "blinkit", price: 34, original: 38 },
      { store: "instamart", price: 33, original: 38 },
      { store: "amazon", price: 31, original: 38 },
      { store: "zepto", price: 35, original: 38 },
    ],
    tags: ["household"],
  },
  {
    id: 10,
    name: "Aashirvaad Atta",
    category: "staples",
    emoji: "🌾",
    qty: "5 kg",
    rating: 4.6,
    reviews: 7800,
    image: "https://images.pexels.com/photos/1510392/pexels-photo-1510392.jpeg?auto=compress&cs=tinysrgb&w=200",
    prices: [
      { store: "bigbasket", price: 230, original: 270 },
      { store: "amazon", price: 235, original: 270 },
      { store: "jiomart", price: 228, original: 270 },
      { store: "blinkit", price: 240, original: 270 },
      { store: "instamart", price: 238, original: 270 },
      { store: "zepto", price: 245, original: 270 },
    ],
    tags: ["staple", "bestseller"],
  },
];

export const coupons = [
  { code: "SAVE20", discount: "20% OFF", store: "BigBasket", color1: "#0E7C66", color2: "#1aaa8c", min: "Min ₹500" },
  { code: "BLINK50", discount: "₹50 OFF", store: "Blinkit", color1: "#D97706", color2: "#F59E0B", min: "Min ₹300" },
  { code: "FRESH15", discount: "15% OFF", store: "Amazon Fresh", color1: "#1F9D55", color2: "#22c55e", min: "Min ₹400" },
  { code: "ZEPTO30", discount: "₹30 OFF", store: "Zepto", color1: "#7C3AED", color2: "#9333ea", min: "Min ₹250" },
  { code: "JIO100", discount: "₹100 OFF", store: "JioMart", color1: "#0070C0", color2: "#0ea5e9", min: "Min ₹800" },
];

export const popularSearches = [
  "Milk", "Bread", "Eggs", "Atta", "Rice", "Dal", "Onion", "Tomato",
  "Banana", "Apple", "Curd", "Butter", "Chips", "Juice", "Soap"
];

export function getLowestPrice(product) {
  return product.prices.reduce((min, p) => p.price < min.price ? p : min, product.prices[0]);
}

export function getStoreById(id) {
  return stores.find(s => s.id === id);
}

export function getProductsByCategory(catId) {
  return products.filter(p => p.category === catId);
}

export function searchProducts(query) {
  const q = query.toLowerCase();
  return products.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q) ||
    p.emoji.includes(q)
  );
}
