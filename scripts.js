document.getElementById('learn-more').addEventListener('click', function() {
    alert('Learn more about our top-selling product!');
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
});
