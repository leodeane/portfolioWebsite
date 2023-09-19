const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar_menu')

menu.addEventListener('click', function()
{
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

document.querySelector('a[href="#projects"]').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default link behavior

    var targetElement = document.querySelector('#projects');
    var offset = 100; // Specify the number of pixels to scroll before the target element

    // Calculate the scroll position, accounting for the offset
    var scrollPosition = targetElement.offsetTop - offset;

    // Scroll to the calculated position
    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth' // Optional: Enable smooth scrolling
    });
  });