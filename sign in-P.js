const auth = firebase.auth(); 

let signInButton = document.getElementById("signin")
signInButton.addEventListener("click", (e) => {
    e.preventDefault()

    var email = document.getElementById("email")
    var password = document.getElementById("password")

    auth.signInWithEmailAndPassword(email.value, password.value)
        .then((userCredentials) => {
            var user = userCredentials.user
            alert(user.email)
            window.location = "web.html"
            console.log(user.email)
        }).catch( (error) => {
            var errorMessage = error.message
            alert(errorMessage)
        })
})