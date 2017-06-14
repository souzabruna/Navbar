var hamburger = document.querySelector('.Hamburguer');
var Links =  document.querySelector('.Links');
var Navbar = document.querySelector('.Navbar');
hamburger.addEventListener("click", function() {
  if (Links.style.display == "none" || Links.style.display === "") {
    Links.style.display = "flex";
    Navbar.style.height = "37vh";
  } else {
    Links.style.display = "none";
    Navbar.style.height = "15vh";
  }
});