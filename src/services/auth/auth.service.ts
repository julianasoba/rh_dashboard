import { auth } from "@/firebase/auth";
import db from "@/firebase/firestore";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  type User,
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import type { AuthUser } from "@/types/auth.types";

export async function login(email: string, password: string) {
  return signInWithEmailAndPassword(auth, email, password);
}

export async function logout() {
  return signOut(auth);
}

export function subscribeToAuth(
  callback: (user: AuthUser | null) => void
) {
  return onAuthStateChanged(auth, async (firebaseUser: User | null) => {
    if (!firebaseUser) {
      callback(null);
      return;
    }

    const docRef = doc(db, "users", firebaseUser.uid);
    const docSnap = await getDoc(docRef);

    const data = docSnap.exists() ? docSnap.data() : null;

    const user: AuthUser = {
      uid: firebaseUser.uid,
      email: firebaseUser.email,
      name: data?.name ?? "User",
      role: data?.role ?? "employee",
    };

    callback(user);
  });
}