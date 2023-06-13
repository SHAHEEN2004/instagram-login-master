import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

//import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyDlo8dffr6aN-kOYXUe9MIxm_Z5oy4Ig9I",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

//seedDatabase(firebase);

export { firebase, FieldValue };
