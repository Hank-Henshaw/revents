import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDVYd_emes6V3c1E0AtEfmOKo15ldDA6JU",
    authDomain: "reventscourse-4432a.firebaseapp.com",
    projectId: "reventscourse-4432a",
    storageBucket: "reventscourse-4432a.appspot.com",
    messagingSenderId: "751970908610",
    appId: "1:751970908610:web:317907ed88b1e4592cbe5b"
  };

 firebase.initializeApp(firebaseConfig);
 firebase.firestore();

 export default firebase;