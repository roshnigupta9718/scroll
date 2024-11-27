let lastScrollTop = 0;
const symbol = document.getElementById('symbol');
const icon=document.getElementById('icon');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        symbol.style.color = 'red'; 
        icon.style.color='blue';// Change to your desired color
    } else {
        // Scrolling up
        symbol.style.color = 'black';
        icon.style.color='black'; // Change back to your original color
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});