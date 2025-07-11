document.addEventListener('DOMContentLoaded', function() {

    const cartoonCards = document.querySelectorAll('.cartoon-card');

    // Function to check if an element is in the viewport
    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    // Function to reveal cards on scroll
    const revealCards = () => {
        cartoonCards.forEach((card, index) => {
            // A simple check to see if the card is in view
            // You can use Intersection Observer for better performance
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (cardTop < windowHeight - 100) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
                card.style.transition = `opacity 0.6s ease-out, transform 0.6s ease-out`;
                card.style.transitionDelay = `${index * 150}ms`;
            }
        });
    };
    
    // Initial reveal
    revealCards();

    // Event listener for scroll
    window.addEventListener('scroll', revealCards);
});
