import { auth, createUserWithEmailAndPassword, addDoc, collection, db } from '../fireabaseConfig.js'
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const cPassword = document.querySelector("#cPassword");
const signupForm = document.querySelector("#signupForm")
const signupBtn = document.querySelector("#signupBtn");


signupForm.addEventListener("submit", (e) => {
    e.preventDefault()


    if (firstName.value.length < 3) {
        return alert("first name should be at least 3 characters");
    }
    if (firstName.value.length < 1) {
        return alert("last name should be at least 1 characters");
    }
    if ((firstName.value.length > 21) || (lastName.value.length > 21)) {
        return alert("firstname and last name can not exceed 20 characters");
    }
    if ((password.value !== cPassword.value)) {
        return alert("Passwords are not match");
    }
})



signupBtn.addEventListener("click", signupHandler)




async function signupHandler() {
    console.log("signup Handler is working!");
    console.log(firstName.value);
    console.log(lastName.value);
    console.log(email.value);
    console.log(password.value);
    console.log(cPassword.value);



    try {



        const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value)

        const userData = {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            uid: userCredential.user.uid
        }

        if (userCredential) {
            console.log(userCredential.user.uid);
            alert("You are is successfully registered!")
            setTimeout(() => {
                window.location.href = "../login page/login.html"
            }, 1000);

        }

        const docRef = await addDoc(collection(db, "users"), {
            ...userData,
            uid: userCredential.user.uid
        });
        console.log("Document written with ID: ", docRef.id);

        if (docRef) {
            console.log(userData.uid);
        } else {
            console.log("User data cannot be added");
        }


    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
    }


}


export default userCredential


