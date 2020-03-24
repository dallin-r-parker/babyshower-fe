import firebase from './';

const db = firebase.firestore();

export const setData = async (data: any, setError: any) => {
  const doc = db.collection('prod').doc(data.email);
  const { exists } = await doc.get();

  if (!exists) {
    doc.set(data);
  } else {
    setError('email', 'exists', 'This email has been taken');
  }
};
