function toggleMenu() {
    const menu = document.getElementById("nav-menu");
    menu.classList.toggle("active");
}

// Menüdeki linklere tıklayınca menü kapansın
document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById("nav-menu").classList.remove("active");
    });
});
