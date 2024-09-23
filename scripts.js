// JavaScript for toggling FAQ answers
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqAnswer = button.nextElementSibling;
        faqAnswer.style.display = faqAnswer.style.display === 'block' ? 'none' : 'block';
    });
});
