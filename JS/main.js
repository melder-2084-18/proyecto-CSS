document.addEventListener("DOMContentLoaded", () => {
    
    /* ==============================================
       1. CAMBIO DE REDES SOCIALES AL PASAR EL CURSOR
       =============================================== */
    const iconosSociales = document.querySelectorAll('.icono-social img');

    iconosSociales.forEach(img => {
        const rutaBlanca = img.src; 
        // Asumiendo que tus imágenes son .png, cambia a -color.png
        const rutaColor = rutaBlanca.replace('.png', '-color.png');

        img.parentElement.addEventListener('mouseenter', () => {
            img.src = rutaColor;
        });

        img.parentElement.addEventListener('mouseleave', () => {
            img.src = rutaBlanca;
        });
    });

    /* ==============================================
       2. RESALTAR EL MENÚ ACTIVO AUTOMÁTICAMENTE
       =============================================== */
    // Obtenemos el nombre del archivo actual (ej: "ofertas.html")
    let paginaActual = window.location.pathname.split("/").pop();
    if (paginaActual === "") paginaActual = "index.html"; // Por si la ruta está vacía

    // Buscamos todos los enlaces del menú
    const enlacesMenu = document.querySelectorAll(".nav-links a");

    enlacesMenu.forEach(enlace => {
        // Limpiamos cualquier clase "active" previa
        if(enlace.parentElement) {
            enlace.parentElement.classList.remove("active");
        }

        // Si el link coincide con la página en la que estamos...
        if (enlace.getAttribute("href") === paginaActual) {
            // Le agregamos la clase "active" a la etiqueta <li>
            enlace.parentElement.classList.add("active");
        }
    });

});