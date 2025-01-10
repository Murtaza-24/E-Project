let container = document.getElementById('container')

toggle = () => {
    container.classList.toggle('sign-in')
    container.classList.toggle('sign-up')
}

setTimeout(() => {
    container.classList.add('sign-in')
}, 200)

function signup() {
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;
    const Cpassword = document.getElementById('signupCPassword').value;
    let toastBox = document.getElementById("toastBox");
    let toast = document.createElement("div");

    // Check if username or password fields are empty
    if (username.trim() === '' || password.trim() === '' || Cpassword.trim() === '') {
        toast.classList.add("fToast");
        toast.innerHTML = '<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i> Please Fill All The Information';
        toastBox.appendChild(toast);
        setTimeout(() => {
            toast.remove();
        }, 3000);
        return; // Stop further execution if fields are empty
    }
    else if (Cpassword.trim() != password.trim()) {
        toast.classList.add("fToast");
        toast.innerHTML = '<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i> Password Does Not Match!!!';
        toastBox.appendChild(toast);
        setTimeout(() => {
            toast.remove();
        }, 3000);
        return;
    }

    // Save user data to session storage
    sessionStorage.setItem('username', username);
    sessionStorage.setItem('password', password);
    sessionStorage.setItem('Cpassword', Cpassword);

    document.getElementById('signupUsername').value = '';
    document.getElementById('signupPassword').value = '';

    // Redirect to the login page after successful signup
    window.location.href = "/E-project/SignupPage/index.html";
}
function login() {
    let toastBox = document.getElementById("toastBox2");
    let toast = document.createElement("div");
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Check if username or password fields are empty
    if (username.trim() === '' || password.trim() === '') {
        toast.classList.add("fToast");
        toast.innerHTML = '<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i> Please Fill All The Information';
        toastBox.appendChild(toast);
        setTimeout(() => {
            toast.remove();
        }, 3000);
        return; // Stop further execution if fields are empty
    }

    // Retrieve user data from session storage
    const savedUsername = sessionStorage.getItem('username');
    const savedPassword = sessionStorage.getItem('password');

    if (username === savedUsername && password === savedPassword) {
        document.getElementById('loginUsername').value = '';
        document.getElementById('loginPassword').value = '';

        // Redirect to index page after successful login
        window.location.href = '/E-project/Pages/index.html';
    } else {
        toast.classList.add("fToast");
        toast.innerHTML = '<i class="fa-solid fa-circle-exclamation" style="color: #ff0000;"></i> Invalid Username or Password';
        toastBox.appendChild(toast);
        setTimeout(() => {
            toast.remove();
        }, 3000);
    }
}
