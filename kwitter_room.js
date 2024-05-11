  const firebaseConfig = {
    apiKey: "AIzaSyDFLDo5c2fWLV8RkcMPqbYMyejMwXkdYWo",
    authDomain: "kiwtter-55de3.firebaseapp.com",
    databaseURL:"https://kiwtter-55de3-default-rtdb.firebaseio.com",
    projectId: "kiwtter-55de3",
    storageBucket: "kiwtter-55de3.appspot.com",
    messagingSenderId: "464429111302",
    appId: "1:464429111302:web:f4dc63255ba3f395490b87"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addRoom(){
  room = document.getElementById("room_name").value;
  console.log(room);
  firebase.database().ref("/").child(room).update({
    proposit : "agregar sala"
});
localStorage.setItem("room_name", room);
//window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicia el código
      console.log("nombre de la sala" + Room_names);
      row = "<div class='room_name' id="+Room_names+"onclick='redirect(this.id)'> #"+Room_names+"</div><hr>"
      document.getElementById("output").innerHTML += row;
      //Finaliza el código
      });});}
getData();
function redirect(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  //widow.location="kwitter_page.html";
}

