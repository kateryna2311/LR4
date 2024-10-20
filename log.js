
const validUsers = [
    { login: "log1", password: "p1" },
    { login: "log2", password: "p2" },
    { login: "log3", password: "p3" }
];

function validateLogin(login) {
    return validUsers.some(user => user.login === login);
}

function validatePassword(login, password) {
    return validUsers.some(user => user.login === login && user.password === password);
}

document.getElementById("authForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const login = document.getElementById("login").value;
    const password = document.getElementById("password").value;
    const rememberMe = document.getElementById("rememberMe").checked;
    const errorMessage = document.getElementById("error-message");

    if (!validateLogin(login)) {
        errorMessage.textContent = 'Неправильний логін';
    } else if (!validatePassword(login, password)) {
        errorMessage.textContent = 'Неправильний пароль';
    } else {
        errorMessage.textContent = '';
        alert(`Успішний вхід! Залишатись в системі: ${rememberMe ? "Так" : "Ні"}`);
    }
});


