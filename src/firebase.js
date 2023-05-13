import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import config from "./config";
firebase.initializeApp(config.firebase);
export default firebase.auth();
