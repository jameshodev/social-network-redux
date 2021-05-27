// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBwvnkmiDGClX1l18cJ7Z_G57se9g9xKbY',
  authDomain: 'social-network-93633.firebaseapp.com',
  projectId: 'social-network-93633',
  storageBucket: 'social-network-93633.appspot.com',
  messagingSenderId: '620160714894',
  appId: '1:620160714894:web:30437ab551c4bd352561df',
  measurementId: 'G-3YTE9KLJ5T',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
// Sign in with Google
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
