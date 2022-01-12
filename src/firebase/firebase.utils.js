import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCX8FCVDpWK4aguNOx_sYZEfEL6PxzQg0g",
    authDomain: "crwn-db-bf613.firebaseapp.com",
    projectId: "crwn-db-bf613",
    storageBucket: "crwn-db-bf613.appspot.com",
    messagingSenderId: "643485968171",
    appId: "1:643485968171:web:ee20629f00a9e010f6076e"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signingWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
