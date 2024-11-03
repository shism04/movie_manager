window.addEventListener('scroll', function() {
    const sidebar = document.getElementById('sidebar'); // Selects the sidebar element
    const footer = document.querySelector('footer'); // Selects the footer element
    const headerNav = document.querySelector('nav'); // Selects the navigation bar

    const sidebarRect = sidebar.getBoundingClientRect(); // Gets the position and size of the sidebar
    const footerRect = footer.getBoundingClientRect(); // Gets the position and size of the footer
    const headerNavRect = headerNav.getBoundingClientRect(); // Gets the position and size of the nav

    // Checks if the header navigation is out of view, sidebar is still in view, and sidebar not overlapping footer
    if (headerNavRect.bottom <= 0 && sidebarRect.bottom > 0 && footerRect.top > sidebarRect.height) {
        sidebar.classList.add('sticky'); // Adds the 'sticky' class to the sidebar if conditions are met
    } else {
        sidebar.classList.remove('sticky'); // Removes the 'sticky' class if conditions are not met
    }
});

