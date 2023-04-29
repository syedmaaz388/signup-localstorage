function signup(){
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  localStorage.setItem("name1",name);
  localStorage.setItem("email1",email);
  localStorage.setItem("password1",password);

  window.location.href = "profile.html";



}


function logout(){
  localStorage.clear();
   window.location.href = "index.html";
}