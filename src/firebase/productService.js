import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
} from "firebase/firestore";

import { db } from "./firebase";

const productsRef = collection(db, "products");

// Add Product
export async function addProduct(product) {
  const docRef = await addDoc(productsRef, product);
  return docRef.id;
}

// Get Products
export async function getProducts() {
  const snapshot = await getDocs(productsRef);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),

  }));
}
export async function getProductById(id) {
  const productRef = doc(db, "products", id);

  const snapshot = await getDoc(productRef);

  if (!snapshot.exists()) return null;

  return {
    id: snapshot.id,
    ...snapshot.data(),
  };
}
// Update Product
export async function updateProduct(id, product) {
  const productRef = doc(db, "products", id);

  await updateDoc(productRef, product);
}

// Delete Product
export async function deleteProduct(id) {
  const productRef = doc(db, "products", id);

  await deleteDoc(productRef);
}