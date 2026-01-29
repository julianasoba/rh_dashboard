import db from "@/firebase/firestore";
import type { UserType } from "@/types/usertype";
import { addDoc, collection, Timestamp } from "firebase/firestore";

export const createUserInFirestore = async (user:  Omit<UserType, "id" | "createdAt">) => {
try {
    const docRef = await addDoc(collection(db, "users"), {
      ...user,
      createdAt: Timestamp.now(),
    });
    return docRef.id;
  } catch (error) {
    return error;
  }
};
