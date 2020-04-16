const botao = document.querySelector('.btn-login')
const form = document.querySelector('form')

botao.addEventListener("click", event => {
    event.preventDefault()
    form.classList.add('form-hide')
})

form.addEventListener("animationstart", event => {
    if(event.animationName === "down"){
        document.querySelector('body').style.overflow = "hidden"
    }
})

form.addEventListener("animationend", event => {
    if(event.animationName === "down"){
        form.style.display = "none"
        document.querySelector('body').style.overflow = "none"
    }
})