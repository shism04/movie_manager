window.addEventListener('scroll', function () {
    const sidebar = document.getElementById('sidebar');
    const footer = document.querySelector('footer');
    const headerNav = document.querySelector('nav');

    const sidebarRect = sidebar.getBoundingClientRect();
    const footerRect = footer.getBoundingClientRect();
    const headerNavRect = headerNav.getBoundingClientRect();


    if (headerNavRect.bottom <= 0 && sidebarRect.bottom > 0 && footerRect.top > 0) {
        sidebar.classList.add('sticky');
    } else {
        sidebar.classList.remove('sticky');
    }
});

