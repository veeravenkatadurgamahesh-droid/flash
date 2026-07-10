import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  query,
  where,
} from "firebase/firestore";

import { db } from "./firebase";

const cartRef = collection(db, "cart");

export async function addToCart(userId, product) {
  await addDoc(cartRef, {
    userId,
    ...product,
  });
}

export async function getCart(userId) {
  const q = query(
    cartRef,
    where("userId", "==", userId)
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

export async function removeFromCart(id) {
  await deleteDoc(doc(db, "cart", id));
}