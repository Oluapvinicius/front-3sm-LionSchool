
async function construirHome(){
    const mainContainer = document.getElementById('main')

    const divHome = document.createElement('div')
    divHome.className = "container-home"

    const boxLeft = document.createElement('div')
    boxLeft.className = "box-left"

    const h1Titulo = document.createElement('h1')
    h1Titulo.textContent = "Escolha um para gerenciar"
    h1Titulo.innerHTML = 'Escolha um <span class="destaque-azul">curso</span> para gerenciar';
    

    const imgHome = document.createElement('img')
    imgHome.src = "./img/devices.png"

    const boxMid = document.createElement('div')
    boxMid.className = "box-mid"
    
    const boxRight = document.createElement('div')
    boxRight.className = "box-right"

 
    divHome.appendChild(boxLeft)
    divHome.appendChild(boxMid)
    divHome.appendChild(boxRight)
    boxLeft.appendChild(h1Titulo)
    boxLeft.appendChild(imgHome)

    mainContainer.appendChild(divHome)

}
construirHome()