

// 1. Al cargar la página, consultamos si se guardó un modo anterior
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
  document.body.classList.add('dark-mode');  // aplica el modo oscuro
  toggleButton.textContent = 'Modo Claro';
}

// 2. Al hacer clic en el botón, alternamos el modo y lo guardamos
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Consultamos si ahora está activado
  const isDark = document.body.classList.contains('dark-mode');

  // Guardamos la preferencia
  localStorage.setItem('theme', isDark ? 'dark' : 'light');

  // Cambiamos el texto del botón
  toggleButton.textContent = isDark ? 'Modo Claro' : 'Modo Oscuro';
});
