import db from "@/firebase/firestore";
import type { UserType } from "@/types/usertype";
import { addDoc, collection, getDocs, Timestamp } from "firebase/firestore";

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


export const fetchUsers = async (): Promise<UserType[]> => {
  const snapshot = await getDocs(collection(db, "users"));

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...(doc.data() as UserType),
  }));
};