const navbar = document.querySelector('.nav-list')
const open = document.querySelector('#open-menu')
const close = document.querySelector('#close-menu')


open.addEventListener('click', () =>{
    navbar.style.display = 'block'
})

close.addEventListener('click', () => {
    navbar.style.display = 'none'
})
