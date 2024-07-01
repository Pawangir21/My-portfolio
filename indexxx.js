document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple form validation
    if (name && email && message) {
        alert('Thank you for your message!');
        this.reset();
    } else {
        alert('Please fill out all fields.');
    }
});
function toggleMenu() {
    const nav = document.querySelector('header nav ul');
    nav.classList.toggle('active');
}
function toggleMenu() {
    const nav = document.querySelector('header nav ul');
    nav.classList.toggle('active');
}
function toggleMenu() {
    const nav = document.querySelector('header nav ul');
    nav.classList.toggle('active');
}
function toggleMenu() {
    const nav = document.querySelector('header nav ul');
    nav.classList.toggle('active');
}
