const form = document.getElementById("form")
const email = document.getElementById("email")
const username = document.getElementById("username")
const password = document.getElementById("password")
const password2 = document.getElementById("password2")

form.addEventListener('submit',e =>{
    e.preventDefault()
    validateInputs()
    
})
