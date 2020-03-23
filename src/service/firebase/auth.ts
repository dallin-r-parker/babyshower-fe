// https://firebase.google.com/docs/auth/admin/manage-sessions

// firebase.auth().signInAnonymously().catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   console.log('errorCode: ', errorCode);
//   var errorMessage = error.message;
//   console.log('errorMessage: ', errorMessage);
//   // ...
// });

// firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     // User is signed in.
//     var isAnonymous = user.isAnonymous;
//     console.log('isAnonymous: ', isAnonymous);
//     var uid = user.uid;
//     console.log('uid: ', uid);
//     // ...
//   } else {
//     // User is signed out.
//     // ...
//   }
//   // ...
// });

export const none = 0;
