const navbar = document.querySelector('.navbar');
let lastScrollY = window.scrollY;
let ticking = false;

function handleScroll() {
    if (window.scrollY === 0) {
        navbar.style.top = '0';
        navbar.style.transition = 'top 0.3s';
    } else if (window.scrollY > lastScrollY) {
        // 向下滚动，隐藏navbar
        navbar.style.top = '-100px'; // 假设navbar高度为60px
    } else {
        // 向上滚动，显示navbar
        navbar.style.top = '0';
    }
    lastScrollY = window.scrollY;
    ticking = false;
}

window.addEventListener('scroll', function () {
    if (!ticking) {
        window.requestAnimationFrame(handleScroll);
        ticking = true;
    }
});
