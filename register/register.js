const submit = document.getElementById('register');

submit.addEventListener("submit", (e) => {
    e.preventDefault();

    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value
    console.log('user = ', email)
    console.log('pw = ', password);

    if (localStorage.users) {
        let data_user = JSON.parse(localStorage.getItem('users'))
        let isemaileDuplicate = data_user.some(i => i.email === email);
        let isusernameDuplicate = data_user.some(i => i.username === username);

        if (!isemaileDuplicate) {
            if (!isusernameDuplicate) {
                const id = Math.random().toString(36).substr(2, 9);
                console.log(id);
                data_user.push({ id, username, email, password });
                localStorage.setItem('users', JSON.stringify(data_user))
                alert('Sign up successfully!');
                location.replace('../login/login.html')
    
            } else {
                alert(`This username has already existed.`)
            }
            console.log(id);
            data_user.push({ id, username, email, password });
            localStorage.setItem('users', JSON.stringify(data_user))
            alert('Sign up successfully!');
            location.replace('../login/login.html')

        } else {
            alert(`This email has already existed.`)
        }



    } else {
        let data_user = []
        const id = Math.random().toString(36).substr(2, 9);
        console.log(id);
        data_user.push({ id, username, email, password });
        localStorage.setItem('users', JSON.stringify(data_user))
        alert('Sign up successfully!');
        location.replace('../login/login.html')
    }
})