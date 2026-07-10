import { storage } from "./firebase";
import {
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

export async function uploadImage(file) {
  const imageRef = ref(
    storage,
    `products/${Date.now()}-${file.name}`
  );

  await uploadBytes(imageRef, file);

  return await getDownloadURL(imageRef);
}