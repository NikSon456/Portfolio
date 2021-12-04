const toggle = document.getElementById("toggle");
const close = document.getElementById("close");
const open = document.getElementById("open");
const modal = document.getElementById("modal");

// Toggle nav
toggle.addEventListener("click", showNav);
function showNav() {
    document.body.classList.toggle("show-nav");
}

// Show modal
open.addEventListener("click", showModal);
function showModal() {
    modal.classList.add("show-modal");
}

// Hide modal
close.addEventListener("click", hideModal);
function hideModal() {
    modal.classList.remove("show-modal");
}
