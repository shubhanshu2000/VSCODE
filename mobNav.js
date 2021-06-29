const sidebar = document.querySelector('.show-sidebar');
const clsBtn = document.querySelector('#times-btn');
const hamburger = document.querySelector('#tog-btn');
const backdrop = document.querySelector('.backdrop');

hamburger.addEventListener('click', function () {
  backdrop.classList.toggle('backdrop--active');
  sidebar.classList.toggle('show-sidebar--active')
});
clsBtn.addEventListener('click', function () {
  backdrop.classList.toggle('backdrop--active');
  sidebar.classList.toggle('show-sidebar--active')
});
backdrop.addEventListener('click', function () {
  backdrop.classList.toggle('backdrop--active');
  sidebar.classList.toggle('show-sidebar--active')
});
