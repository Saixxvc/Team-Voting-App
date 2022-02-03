import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    const firebaseConfig = {
        apiKey: "AIzaSyCCk6NIuOIRjVKc20t8_UwDZALdCW4xRzg",
        authDomain: "voting-335ee.firebaseapp.com",
        projectId: "voting-335ee",
        storageBucket: "voting-335ee.appspot.com",
        messagingSenderId: "863853604283",
        appId: "1:863853604283:web:22019a511f4ec33bfa689e"
      };

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();