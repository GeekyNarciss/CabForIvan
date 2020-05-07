menuBg = document.querySelector(".mobile-menu-bg")
menuWrapper = document.querySelector('.mobile-menu-wrapper');
burger = document.querySelector('.burger-button');

function hide () {
  menuBg.classList.add('hidden');
};

burger.addEventListener('click', (event) => {
  if (event.currentTarget.classList.contains('burger-button_active')) {
    event.currentTarget.classList.remove('burger-button_active');
    menuBg.classList.add('hidden-opacity');
    menuWrapper.classList.remove('mobile-menu-wrapper_active');
    menuBg.addEventListener('transitionend', hide);
  }
  else {
    menuBg.removeEventListener('transitionend', hide);
    menuBg.classList.remove('hidden');
    setTimeout(() => {
      menuBg.classList.remove('hidden-opacity');
    }, 1);
    event.currentTarget.classList.add('burger-button_active');
    menuWrapper.classList.add('mobile-menu-wrapper_active');
  }
})

menuBg.addEventListener('click', () => {
  burger.classList.remove('burger-button_active');
  menuBg.classList.add('hidden-opacity');
  menuWrapper.classList.remove('mobile-menu-wrapper_active');
  menuBg.addEventListener('transitionend', hide);
});

document.querySelector(".mobile-menu-wrapper > nav > ul").addEventListener('click', (e) => {
  if (e.target.getAttribute('href') != undefined)
    setTimeout(() => {
      menuBg.click();
    }, 250);
})