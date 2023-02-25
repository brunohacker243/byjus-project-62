import firebase from 'firebase';

 const firebaseConfig = {
    apiKey: "AIzaSyAC2Ui8vIaUaTfT7P_3fsVOYMnJ2vO7iqY",
    authDomain: "byjus-project-60.firebaseapp.com",
    databaseURL: "https://byjus-project-60-default-rtdb.firebaseio.com",
    projectId: "byjus-project-60",
    storageBucket: "byjus-project-60.appspot.com",
    messagingSenderId: "120761691835",
    appId: "1:120761691835:web:f96e4eb476e61499af439e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.database();