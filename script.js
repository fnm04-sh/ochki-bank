// Пример JavaScript для интерактивных анимаций или взаимодействия с элементами

// Например, можно добавить анимацию плавного появления секций при прокрутке
document.addEventListener('DOMContentLoaded', () => {
    const reviews = document.querySelectorAll('.review-box');

    reviews.forEach((review, index) => {
        setTimeout(() => {
            review.style.opacity = '1';
            review.style.transform = 'translateY(0)';
        }, index * 500);  // Задержка для плавного появления
    });
});
 
