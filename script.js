window.addEventListener('load', () => {
    const passwordContainer = document.querySelector('.input-password');
    const passwordInput = document.getElementById('password');
    const togglePasswordVisibility = document.getElementById('toggle-password-visibility');
    const togglePasswordText = document.querySelector('.input-password__toggle span');
    
    togglePasswordVisibility.addEventListener('click', (event) => {
        event.preventDefault();
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            passwordContainer.classList.add('show-password');
            togglePasswordText.textContent = 'Hide password';
        } else {
            passwordInput.type = 'password';
            passwordContainer.classList.remove('show-password');
            togglePasswordText.textContent = 'Show password';
        }
    });
});