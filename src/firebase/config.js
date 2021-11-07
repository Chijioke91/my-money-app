import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBhmBUAmJBzmqBMVJhM8PdD2vQVmf4T2yQ',
  authDomain: 'mymoney-cba9c.firebaseapp.com',
  projectId: 'mymoney-cba9c',
  storageBucket: 'mymoney-cba9c.appspot.com',
  messagingSenderId: '439149612682',
  appId: '1:439149612682:web:8defe79c3a17c79518a773',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

const timestamp = firebase.firestore.Timestamp;

export { db, auth, timestamp };
