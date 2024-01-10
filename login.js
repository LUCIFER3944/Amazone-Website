function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

 
    if (email === 'vivek123@gmail.com' && password === '12345') {
        alert('Login successful');
       
        window.location.href = 'index.html';
    } else {
        alert('Login failed. Please check your password.');
    }
}