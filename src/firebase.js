// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBQdEaBqqwRz00fq8zXl-lq1TaKfSTexcE',
  authDomain: 'social-network-redux.firebaseapp.com',
  projectId: 'social-network-redux',
  storageBucket: 'social-network-redux.appspot.com',
  messagingSenderId: '62300233164',
  appId: '1:62300233164:web:6a3f0d66bc9ebd43bc9169',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
// Sign in with Google
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
