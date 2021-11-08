const auth = firebase.auth(); 

let signUpButton = document.getElementById("signup")
signUpButton.addEventListener("click", (e) => {
    e.preventDefault()

    var email = document.getElementById("email")
    var password = document.getElementById("password")

    auth.createUserWithEmailAndPassword(email.value, password.value)
        .then((userCredentials) => {
            var user = userCredentials.user
            console.log(user)
        }).catch( (error) => {
            var errorMessage = error.message
            alert(errorMessage)
        })
})



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




