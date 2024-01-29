document.querySelector('.menu-btn').onclick = function(){
  const showSidebar = document.querySelector('.sidebar');
  showSidebar.style.display="flex";
}

document.querySelector('.mobile-nav svg').onclick = function(){
  const hideSidebar = document.querySelector('.sidebar');
  hideSidebar.style.display="none";
}