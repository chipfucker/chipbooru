window.onload = async function() {
    // Bars
    const menubar = document.getElementById("menubar");
    const navbar = document.getElementById("navbar");
    const sidebar = document.getElementById("sidebar");
    if (menubar) {
        const response = await fetch("/rule34/bar/menubar.xml");
        const text = await response.text();
        menubar.innerHTML += text;
    }
    if (navbar) {
        const response = await fetch("/rule34/bar/navbar.xml");
        const text = await response.text();
        navbar.innerHTML += text;
    }
    if (sidebar) {
        const response = await fetch("/rule34/bar/sidebar.xml");
        const text = await response.text();
        sidebar.innerHTML += text;
    }
};
