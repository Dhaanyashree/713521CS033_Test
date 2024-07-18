function check() {

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const phone = document.getElementById('phone').value;
    const gender = document.getElementById('gender').value;

    if (username && email && password && phone && gender) {
        alert(`Welcome, ${username}! You have successfully signed in.`);
    } else {
        alert('Please fill out all fields.');
    }
};