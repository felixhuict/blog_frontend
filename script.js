
function showForm(action) {
    var loginForm = document.getElementById('login-form');
    var registerForm = document.getElementById('register-form');
    var forgotForm = document.getElementById('forgot-form');
    var title = document.getElementById('form-title');
    if (!loginForm || !registerForm || !forgotForm || !title) return;

    loginForm.style.display = 'none';
    registerForm.style.display = 'none';
    forgotForm.style.display = 'none';

    switch (action) {
        case 'register':
            registerForm.style.display = 'flex';
            title.textContent = 'Register';
            break;
        case 'forgot':
            forgotForm.style.display = 'flex';
            title.textContent = 'Forgot Password';
            break;
        default:
            loginForm.style.display = 'flex';
            title.textContent = 'Login';
    }
}

function getActionFromQuery() {
    var params = new URLSearchParams(window.location.search);
    var action = params.get('action');
    return action;
}

document.addEventListener('DOMContentLoaded', function() {
    showForm(getActionFromQuery());

    // Optional: add click handlers to links/buttons to update the query param and reload
    var showRegister = document.getElementById('show-register');
    var showLogin = document.getElementById('show-login');
    var showForgot = document.getElementById('show-forgot');
    var backToLogin = document.getElementById('back-to-login');

    if (showRegister) {
        showRegister.onclick = function(e) {
            e.preventDefault();
            window.location.search = '?action=register';
        };
    }
    if (showLogin) {
        showLogin.onclick = function(e) {
            e.preventDefault();
            window.location.search = '?action=login';
        };
    }
    if (showForgot) {
        showForgot.onclick = function(e) {
            e.preventDefault();
            window.location.search = '?action=forgot';
        };
    }
    if (backToLogin) {
        backToLogin.onclick = function(e) {
            e.preventDefault();
            window.location.search = '?action=login';
        };
    }
});