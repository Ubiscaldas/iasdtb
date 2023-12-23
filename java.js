const toggleButton = document.getElementById("button-menu");
const navWrapper = document.getElementById("nav");
const linkItems = document.querySelectorAll(".link-item");

/*
  cada vez que se haga click en el botón 
  agrega y quita las clases necesarias 
  para que el menú se muestre.
*/
toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("close");
  navWrapper.classList.toggle("show");
});

/* 
  Cuando se haga click fuera del contenedor de enlaces 
  el menú debe esconderse.
*/
navWrapper.addEventListener("click", e => {
  if (e.target.id === "nav") {
    navWrapper.classList.remove("show");
    toggleButton.classList.remove("close");
  }
});

/* 
  Cuando el mouse pase por encima de un enlace, 
  el submenú correspondiente se mostrará.
*/
linkItems.forEach(link => {
  link.addEventListener("mouseover", () => {
    link.querySelector(".submenu").style.display = "block";
  });

  link.addEventListener("mouseout", () => {
    link.querySelector(".submenu").style.display = "none";
  });
});

function mostrarDocumento(id) {
  var iframe1 = document.getElementById('miIframe1');
  var iframe2 = document.getElementById('miIframe2');

  if (id === 'miIframe1') {
    iframe1.style.display = "block";
    iframe2.style.display = "none";
  } else {
    iframe2.style.display = "block";
    iframe1.style.display = "none";
  }
}