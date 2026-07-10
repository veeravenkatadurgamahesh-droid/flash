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

const wishlistRef = collection(db, "wishlist");

export async function addToWishlist(userId, product) {
  await addDoc(wishlistRef, {
    userId,
    ...product,
  });
}

export async function getWishlist(userId) {
  const q = query(
    wishlistRef,
    where("userId", "==", userId)
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

export async function removeFromWishlist(id) {
  await deleteDoc(doc(db, "wishlist", id));
}