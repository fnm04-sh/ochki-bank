document.addEventListener('DOMContentLoaded', () => {
    // Отзывы плавно появляются при прокрутке
    const reviews = document.querySelectorAll('.review-box');
    reviews.forEach((review, index) => {
        setTimeout(() => {
            review.style.opacity = '1';
            review.style.transform = 'translateY(0)';
        }, index * 500);  // Задержка для плавного появления
    });
});
