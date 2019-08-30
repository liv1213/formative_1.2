
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

// Overlay menu

let overlayVineyards= document.querySelector('.overlay-vinyards')
let overlayDropdown = document.querySelector('.overlay-drop-down')

overlayVineyards.addEventListener('click', function(evt){
overlayDropdown.classList.toggle('slide-down')
})



