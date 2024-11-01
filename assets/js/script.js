// Seleciona elementos importantes
const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement;

// Função para alternar o tema
function changeTheme() {
  const currentTheme = rootHtml.getAttribute("data-theme");

  if (currentTheme === "dark") {
    rootHtml.setAttribute("data-theme", "light");
    toggleTheme.classList.replace("bi-moon-stars", "bi-sun");
  } else {
    rootHtml.setAttribute("data-theme", "dark");
    toggleTheme.classList.replace("bi-sun", "bi-moon-stars");
  }
}

// Event Listener para troca de tema
toggleTheme.addEventListener("click", changeTheme);

const accordionItems = document.querySelectorAll('.accordion__item');

accordionItems.forEach((item) => {
  const button = item.querySelector('.accordion__header');
  button.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});