"use server";
import admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.NEXT_FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY!.replace(/\\n/g, "\n"),
    }),
    databaseURL: `https://${process.env.NEXT_FIREBASE_PROJECT_ID}.firebaseio.com`,
  });
}

const auth = admin.auth();
const db = admin.firestore();

export const getDb = async () => {
  return db;
};

export const getAuth = async () => {
  return auth;
};
