const botao = document.querySelector('.btn-login')
const form = document.querySelector('form')

botao.addEventListener("click", (event) => {
    event.preventDefault()
    form.classList.add('form-hide')
})