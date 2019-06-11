import firebase from 'firebase/app';
import "firebase/firestore";

let config = {
  apiKey: "AIzaSyBe2QWeHqJvjkSurqXhqZuU-qqyaOCC4KY",
  authDomain: "test-firestore-847fa.firebaseapp.com",
  databaseURL: "https://test-firestore-847fa.firebaseio.com",
  projectId: "test-firestore-847fa",
  storageBucket: "test-firestore-847fa.appspot.com",
  messagingSenderId: "1067319899742",
  appId: "1:1067319899742:web:8c701210401314f8"
 
}

firebase.initializeApp(config);
window.firebase=firebase;
export const db = firebase.firestore()