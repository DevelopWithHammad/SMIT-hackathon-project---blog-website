import { auth, onAuthStateChanged, doc, getDoc, db } from '../fireabaseConfig.js'
import userCredential from '../signup page/signup.js'
const usernameDisplay = document.querySelector("#usernameDisplay")
getSignedInUser()



onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(user.uid);
      getSignedInUser()

    } else {
     console.log("User is not found!!");
    }
  });



async function getSignedInUser() {
    const docRef = doc(db, "users", userCredential.userData.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
    } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
    }
}

