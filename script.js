document.addEventListener('DOMContentLoaded', function() {
  const dropdown = document.querySelector('.dropdown');
  const toggle = dropdown.querySelector('.dropdown-toggle');
  const menu = dropdown.querySelector('.dropdown-menu');

  toggle.addEventListener('click', function(event) {
    event.stopPropagation(); 
    menu.classList.toggle('show');
  });
  
  document.addEventListener('click', function(event) {
    if (!dropdown.contains(event.target)) {
      menu.classList.remove('show');
    }
  });
});

const modal = document.getElementById('myModal');
const btn = document.getElementById('myBtn');
const span = document.getElementsByClassName('close')[0];

btn.onclick = function() {
  modal.style.display = 'block';
}

span.onclick = function() {
  modal.style.display = 'none';
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}

const submenuToggle = document.querySelector('.submenu-toggle');
const hasSubmenu = document.querySelector('.has-submenu');
const backButton = document.querySelector('.back-btn');

submenuToggle.addEventListener('click', function(event) {
  event.stopPropagation();
  hasSubmenu.classList.toggle('open');
});

if (backButton) {
  backButton.addEventListener('click', function(event) {
    event.stopPropagation(); 
    hasSubmenu.classList.remove('open'); 
  });
}

const checkbox = document.getElementById('menu-toggle');
const menuIcon = document.querySelector('.hamburger');

checkbox.addEventListener('change', function() {
  if (this.checked) {
    menuIcon.classList.add('active');
  } else {
    menuIcon.classList.remove('active');
  }
});