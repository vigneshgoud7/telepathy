    let inputEl = document.getElementById("username-input");
    let buttonEl=document.getElementById("connect-btn")
    buttonEl.addEventListener("click",()=>{
        const name = document.getElementById("username-input").value.trim();
                if (!name) {
                    document.getElementById("login-error").innerText = "Codename cannot be empty.";
                    document.getElementById("login-error").classList.remove("hidden");
                    return;
                }
                localStorage.setItem("telepathy_user", name);
        window.location.href="dashboard.html"
    })
    inputEl.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        document.getElementById("connect-btn").click(); 
    }
});



    // function logout() {
    //         localStorage.removeItem("telepathy_user");
    //         window.location.href = "login.html";
    //     }