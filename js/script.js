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



accordionHeaders.forEach(header => {
    header.addEventListener /* header.addEventListener("click", () => {...}) 
    Função: adiciona um "ouvinte de eventos" (event listener) ao cabeçario. Nesse caso, ele "ouve" o evento de clique.
    O que faz: Toda vez que o usuário clicar em um header, a função anônima (dentro dos {...}) será executada. */
    ("click", () => {
        const accordionItem = header.parantElement;
        const accordionActive = accordionItem.classList.contains("active"); /* verificar se esta ativo */

        accordionActive ? accordionItem.classList.remove("active") : accordionItem.classList.add("active");
    }); /* adicionar ação ao clique  */

    /* Normalmente, o acordeão (accordion) é usado para mostrar/ocultar bocos de informações sem sobrecarregar o usuário com muito conteúdo de uma vez */
});