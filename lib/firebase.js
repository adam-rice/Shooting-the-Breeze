import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyA8l9xOVb5fI0RS9ji8390kWH1rh3SlCW4',
  authDomain: 'shooting-the-breeze.firebaseapp.com',
  databaseURL: 'https://shooting-the-breeze.firebaseio.com',
  storageBucket: 'shooting-the-breeze.appspot.com',
  messagingSenderId: '168784055773'
};

firebase.initializeApp(config);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;
export const signIn = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();
export const reference = firebase.database().ref('messages');
