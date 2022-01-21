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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.messages);
        }
    }
    return userRef;
};

/*
 export const addCollectionAndDocuments =  async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
       const  newDocRef = collectionRef.doc();
      batch.set(newDocRef,obj);
    });

    return await batch.commit();
};
*/

// Array to an object
export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        };
    });

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
};




export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signingWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
