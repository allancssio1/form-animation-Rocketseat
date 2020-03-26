const btnLogin = document.querySelector('.btn-login')
const form = document.querySelector('form')

btnLogin.addEventListener("click", envent => {
    event.preventDefault()
    form.classList.add("form-hide")
})