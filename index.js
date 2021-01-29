 var firebaseConfig = {
    apiKey: "AIzaSyDkamCN99jjuTrs063cAZ40Aoinqfo4Nac",
    authDomain: "felipe-567de.firebaseapp.com",
    projectId: "felipe-567de",
    storageBucket: "felipe-567de.appspot.com",
    messagingSenderId: "622411489383",
    appId: "1:622411489383:web:840d8735472aef556a74c2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var db = firebase.firestore(); 
  var title = "Peliculas";
  
  document.getElementById("moviesid").innerText = title;

db.collection("movies").get().then((querySnapshot) => {
    console.log(querySnapshot.docs[0].data().titlezombi);
    console.log(querySnapshot.docs[0].data().textzombi);  
    document.getElementById("titlezombi").innerText = querySnapshot.docs[0].data().titlezombi;  
    document.getElementById("textzombi").innerText = querySnapshot.docs[0].data().textzombi;

});


