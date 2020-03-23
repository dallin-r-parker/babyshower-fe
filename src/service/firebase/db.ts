import firebase from './';

const db = firebase.firestore();

export const checkDB = () => {
  db.collection('guest_list')
    .doc('non_prod')
    .onSnapshot((doc) => {
      console.log('Current data: ', doc.id);
    });
};
