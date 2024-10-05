document.addEventListener('DOMContentLoaded', function() {
    const usernameInput = document.getElementById('username');

    usernameInput.addEventListener('input', function() {
        this.value = this.value.toLowerCase();
    });
});