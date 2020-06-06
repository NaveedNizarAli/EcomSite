import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCuIk-tk0UhozuHxVw8hxdlk-G9op5X_78",
    authDomain: "e-com-site-87ae8.firebaseapp.com",
    databaseURL: "https://e-com-site-87ae8.firebaseio.com",
    projectId: "e-com-site-87ae8",
    storageBucket: "e-com-site-87ae8.appspot.com",
    messagingSenderId: "997652010874",
    appId: "1:997652010874:web:e5d12f69d9d8c77686e8c3",
    measurementId: "G-NPRBE2W9BT"
};

export const createUserProfileDocument = async(userAuth, additionalData) =>{
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot= await userRef.get();
    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
            })
        }catch(error){
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;