var firebaseConfig = {
    apiKey: "AIzaSyDyc6c2ae2PMkiQviGE1gtLjfgOKci2xc4",
  authDomain: "kwitter-2-2ed72.firebaseapp.com",
  databaseURL: "https://kwitter-2-2ed72-default-rtdb.firebaseio.com",
  projectId: "kwitter-2-2ed72",
  storageBucket: "kwitter-2-2ed72.appspot.com",
  messagingSenderId: "415706414400",
  appId: "1:415706414400:web:08197c2d7a651bb53d4ea5"
  };
  
  firebase.initializeApp(firebaseConfig)
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref (room_name).push({
        name:user_name,
        messenge:msg,
        like= 0
    })
     document.getElementById("msg").value = "";   
    }
     function logout(){
         localStorage.removeItem("user_name");
         localStorage.removeItem("room_name");
         window.location.replace("index.html");
     }