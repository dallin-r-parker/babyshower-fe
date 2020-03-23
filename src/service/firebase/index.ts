import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/firebase-analytics';

const firebaseConfig = {};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics(); //TODO: FIGURE THIS OUT

export default firebase;

// export const db = firebase.firestore();
