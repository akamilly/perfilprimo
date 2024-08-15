const toggletheme = document.getElementById("toggletheme");
const roothtml = document.documentElement;

//função para alternar o tema
function changetheme () {
    const currenttheme = roothtml.getAttribute("data-theme");

    currenttheme === 'dark' ? roothtml.setAttribute("data-theme", "light") : roothtml.setAttribute("data-theme", "dark");

    toggletheme.classList.toggle("bi-sun");
    toggletheme.classList.toggle("bi-moon-stars");
    }

    toggletheme.addEventListener("click", changetheme);
    /* fim da função mudar a cor */