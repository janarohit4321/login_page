document.addEventListener("DOMContentLoaded", () => {
    const logInForm = document.querySelector("#login");
    const signInForm = document.querySelector("#signin");


    document.querySelector("#linkLogIn").addEventListener("click", () => {
        signInForm.classList.add("from-hidden");
        logInForm.classList.remove("form-hidden");
    })

    document.querySelector("#linkSignIn").addEventListener("click", () => {
        logInForm.classList.add("from-hidden");
        signInForm.classList.remove("form-hidden");
    })
});