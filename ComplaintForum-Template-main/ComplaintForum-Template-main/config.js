import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
 
};
  firebase.initializeApp(firebaseConfig);
  const firebaseConfig = {
    apiKey: "AIzaSyAbMza45Y0Id5jJtJtKGAiacKCvTlY89V4",
    authDomain: "project-71-a98a2.firebaseapp.com",
    projectId: "project-71-a98a2",
    storageBucket: "project-71-a98a2.appspot.com",
    messagingSenderId: "807828883773",
    appId: "1:807828883773:web:5ea16748f53e27a8a29d54"
  };

  export default firebase.firestore()

