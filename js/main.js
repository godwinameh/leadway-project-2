
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const navList = document.querySelector('.nav-list');
    const rightNav = document.querySelector('.right_nav');

    menuBtn.addEventListener('click', function() {
        navList.classList.toggle('show');
        rightNav.classList.toggle('show');
    });
});
document.getElementById('menu-btn').addEventListener('click', function() {
    document.querySelector('.left_nav').classList.toggle('active');
});

