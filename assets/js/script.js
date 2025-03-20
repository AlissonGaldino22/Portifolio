// Meu scrit

// header fixo

window.addEventListener("scroll", function() {
    let header = document.querySelector(".main-header");
    if (window.scrollY > 100) { // Ajuste o valor conforme necessário
        header.classList.add("fixed-header");
    } else {
        header.classList.remove("fixed-header");
    }
});

// scroll suave

document.querySelectorAll('.main-header a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        let targetId = this.getAttribute("href").substring(1);
        let targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Ajuste conforme necessário
                behavior: "smooth"
            });
        }
    });
});