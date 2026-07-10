
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

import { db } from "./firebase";

const ordersRef = collection(db, "orders");

export async function placeOrder(userId, order) {
  await addDoc(ordersRef, {
    userId,
    ...order,
    status: "Pending",
    createdAt: new Date(),
  });
}

export async function getOrders(userId) {
  const q = query(
    ordersRef,
    where("userId", "==", userId)
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}