// Modification de la barre de navigation lors du défilement
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // Activer le tooltip
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});



const searchIcon = document.getElementById("searchIcon");
const overlay = document.getElementById("overlay");

// Affiche la barre de recherche et l'arrière-plan
searchIcon.addEventListener("click", () => {
  overlay.classList.remove("d-none");
});

// Cache la barre de recherche et l'arrière-plan si on clique ailleurs
overlay.addEventListener("click", (event) => {
  if (event.target === overlay) {
    overlay.classList.add("d-none");
  }
});
