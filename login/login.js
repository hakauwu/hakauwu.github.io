
function checkLogin() {
    if (userExit) {
        window.location.href = '../Home.html'
    }
}
const sumbit = document.getElementById('login');

sumbit.addEventListener("submit", (e) => {
    e.preventDefault();

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value
    console.log('user = ', email)
    console.log('pw = ', password);

    let data_user = JSON.parse(localStorage.getItem('users'));
    let userExit = data_user.some(i => i.email === email && i.password == password && i.id);
console.log(userExit);
    if (userExit) {
        console.log('Login successfully!');
        alert(`Login successfully!`)
        location.replace('../Home.html')
    } else {
        alert(`Login failed`)
        console.log('Login failed');
    }

})

