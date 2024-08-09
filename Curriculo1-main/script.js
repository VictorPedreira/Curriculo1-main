const boxtag = document.getElementById("boxtag")
const button = document.getElementById("imagebutton")
const escrita = document.getElementById("resumo")
var larguratela = window.innerWidth
var isopen = false 

function box(){
    larguratela = window.innerWidth
    if (larguratela <= 800) {

        if (isopen == false){
            boxtag.style.width = '300px'
            boxtag.style.left = '32%'
            button.style.left = 'calc(50% - 150px)'
            escrita.style.display = 'inline'
        } else {
            boxtag.style.width = '0px'
            boxtag.style.left = '50%'
            button.style.left = 'calc(50% - 75px)'
            escrita.style.display = 'none'
        }
        isopen = !isopen
    }  

    else {

        boxtag.style.width = '300px'
        escrita.style.display = 'inline'
        if (isopen == false){
            boxtag.style.width = '300px'
            escrita.style.display = 'inline'
        } else {
            boxtag.style.width = '0px'
            escrita.style.display = 'none'
        }
        isopen = !isopen
    
    }

}

button.addEventListener("click", box)

    



