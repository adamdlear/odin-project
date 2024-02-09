document.getElementById("form").addEventListener("submit", (e) => {
    if (document.getElementById("password").value != document.getElementById("confirm-password").value) {
        document.getElementById("password-span").textContent = "Passwords do not match";
        console.log("passwords don't match");
        e.preventDefault();
    } else {
        document.getElementById("password-span").textContent = "";
        return true;
    }
});
