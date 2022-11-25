// Navbar Toggle Button
const toggleButton = document.getElementsByClassName('toggle')[0];
const navbarItem = document.getElementsByClassName('navigation-item');
toggleButton.addEventListener('click', function () {
  for (let i = 0; i < navbarItem.length; i++) {
    navbarItem[i].classList.toggle('active');
  }
});