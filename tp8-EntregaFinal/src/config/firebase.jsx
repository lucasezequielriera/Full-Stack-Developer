import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDOwitngAT0qGuXMo5iJFA2GyzZc5pF_VI",
    authDomain: "utn-ecommerce.firebaseapp.com",
    projectId: "utn-ecommerce",
    storageBucket: "utn-ecommerce.appspot.com",
    messagingSenderId: "1054113941830",
    appId: "1:1054113941830:web:427debb72f6652b4f1bd47"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.auth = firebase.auth();
firebase.db = firebase.firestore();
export default firebase;