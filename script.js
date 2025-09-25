document.getElementById('show-register').onclick = function(e) {
    e.preventDefault();
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'flex';
    document.getElementById('form-title').textContent = 'Register';
};

document.getElementById('show-login').onclick = function(e) {
    e.preventDefault();
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'flex';
    document.getElementById('form-title').textContent = 'Login';
};

document.getElementById('show-register').onclick = function(e) {
    e.preventDefault();
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'flex';
    document.getElementById('form-title').textContent = 'Register';
};

document.getElementById('show-login').onclick = function(e) {
    e.preventDefault();
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'flex';
    document.getElementById('form-title').textContent = 'Login';
};

// New functions for the "Forgot Password" functionality

document.getElementById('show-forgot').onclick = function(e) {
    e.preventDefault();
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('forgot-form').style.display = 'flex';
    document.getElementById('form-title').textContent = 'Forgot Password';
};

document.getElementById('back-to-login').onclick = function(e) {
    e.preventDefault();
    document.getElementById('forgot-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'flex';
    document.getElementById('form-title').textContent = 'Login';
};