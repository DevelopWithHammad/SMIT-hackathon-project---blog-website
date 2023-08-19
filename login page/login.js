import { auth, signInWithEmailAndPassword } from "../fireabaseConfig.js";

const email = document.querySelector("#email");
const password = document.querySelector("#password");
const loginForm = document.querySelector("#loginForm");
const loginBtn = document.querySelector("#loginBtn");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault()
})

loginBtn.addEventListener("click", loginHandler)


async function loginHandler() {
    console.log("Login button is working!!!!!!");
    console.log(email.value);
    console.log(password.value);



    try {
        const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value)

        if (userCredential) {
            console.log(userCredential.user.uid);
            alert("You are logged in!")
            setTimeout(() => {
                window.location.href = "../dashboard with login/dashboardWithLogin.html"
            }, 1000);
           
       }


    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
    }

}