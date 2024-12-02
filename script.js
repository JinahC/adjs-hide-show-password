window.addEventListener('load', () => {
    const passwordContainer = document.querySelector('.input-password');
    const passwordInput = document.getElementById('password');
    const togglePasswordVisibility = document.getElementById('toggle-password-visibility');
    
    togglePasswordVisibility.addEventListener('click', (event) => {
        event.preventDefault();
        console.log(passwordInput.type);
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            passwordContainer.classList.add('show-password');
        } else {
            passwordInput.type = 'password';
            passwordContainer.classList.remove('show-password');
        }
    });
});