import firebase from './';

const db = firebase.firestore();
console.log(`DB: `, db);
// export const checkDocExists = async (collection: any, data: any) =>
//   (await db.collection(collection).doc(data.email).get()).exists;

// export const setData = (data: any) => {
//   db.collection('non_prod').doc(data.email).set(data);
//   // .onSnapshot((doc) => {
//   //   console.log('Current data: ', doc.id);
//   // });
// };

export const setData = async (data: any, setError: any) => {
  const doc = db.collection('non_prod').doc(data.email);
  const { exists } = await doc.get();
  //TODO: look into writing a better email validation
  if (!exists) {
    doc.set(data);
  } else {
    setError('email', 'exists', 'This email has been taken');
  }
};
