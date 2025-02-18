document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const accessCode = document.getElementById("access-code").value;

    // Fetch data from node.json
    fetch("node.json")
        .then(response => response.json())
        .then(data => {
            const user = data.users.find(user => user.username === username && user.password === password && user.accessCode === accessCode);
            if (user) {
                window.location.href = "PAYNEL.html"; // Redirect to dashboard or home
            } else {
                document.getElementById("error-message").style.display = "block";
            }
        })
        .catch(error => console.error("Erro ao carregar os dados:", error));
});
