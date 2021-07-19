var firebaseConfig = {
    apiKey: "AIzaSyCcT7TzhXcgGLXmNYEhNzqtEccUgoBQcpc",
    authDomain: "kwitter-63df7.firebaseapp.com",
    databaseURL: "https://kwitter-63df7-default-rtdb.firebaseio.com",
    projectId: "kwitter-63df7",
    storageBucket: "kwitter-63df7.appspot.com",
    messagingSenderId: "847128387194",
    appId: "1:847128387194:web:7f4708cccb5fc867d9e5c3",
    measurementId: "G-LH4JHPPXNL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig); 
function addUser(){
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}