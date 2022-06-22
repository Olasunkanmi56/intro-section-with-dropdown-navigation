const menuBtn = document.querySelector('.btn-toggle');
const closeBtn = document.querySelector('.sidebar-toggle');
const sideBar = document.querySelector('.sidebar');

menuBtn.addEventListener('click', function(){
  sideBar.classList.add('show-sidebar');
});

closeBtn.addEventListener('click', function(){
    sideBar.classList.remove('show-sidebar');
  });