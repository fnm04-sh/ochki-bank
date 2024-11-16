// Пример JavaScript для дополнительной функциональности, если нужно добавить интерактивность
document.addEventListener('DOMContentLoaded', () => {
    // Пример: кнопка перехода к услугам с анимацией
    const button = document.querySelector('button');
    button.addEventListener('click', () => {
        window.scrollTo({ top: document.querySelector('#services').offsetTop, behavior: 'smooth' });
    });
});
