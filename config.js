import firebase from 'firebase';
require("@firebase/firestore");

  var firebaseConfig = {
    apiKey: "AIzaSyDwaXhLH9qtMNVXMhVxr3JBmanUOpY9Zio",
    authDomain: "storyhub-a1839.firebaseapp.com",
    projectId: "storyhub-a1839",
    storageBucket: "storyhub-a1839.appspot.com",
    messagingSenderId: "224785225949",
    appId: "1:224785225949:web:5c717215f80069719ae334",
    measurementId: "G-5QRLRT3D2F"
  };
  firebase.initializeApp(firebaseConfig);
  export default firebase;