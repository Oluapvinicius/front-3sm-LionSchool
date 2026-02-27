/************************************
 * Objetivo:
 * Autor: paulo
 * Data: 27/02/2026
 * Versão: 1.0
*************************************/


const app = document.getElementsByName('container-home')


async function construirHome(){




    //construindo box left
    const mainContainer = document.getElementById('main')

    const divHome = document.createElement('div')
    divHome.className = "container-home"

    const boxLeft = document.createElement('div')
    boxLeft.className = "box-left"

    const h1Titulo = document.createElement('h1')
    h1Titulo.textContent = "Escolha um para gerenciar"
    h1Titulo.innerHTML = 'Escolha um <span class="destaque-azul">curso</span> para gerenciar'

    const divH1Titulo = document.createElement('div')
    divH1Titulo.className = "divH1Titulo"

    const imgHome = document.createElement('img')
    imgHome.src = "./img/devices.png"

    const divImgHome = document.createElement('div')
    divImgHome.className = "divImgHome"

    divHome.appendChild(boxLeft)
    boxLeft.appendChild(divH1Titulo)
    boxLeft.appendChild(divImgHome)
    divH1Titulo.appendChild(h1Titulo)
    divImgHome.appendChild(imgHome)

     //final box left



     // Contruindo box mid
    const divImgMid = document.createElement('div')
    divImgMid.className = "divImgMid"
    

    const imgMid = document.createElement('img')
    imgMid.src = "./img/studant.png"


    const boxMid = document.createElement('div')
    boxMid.className = "box-mid"




    divHome.appendChild(boxMid)
    boxMid.appendChild(divImgMid)
    divImgMid.appendChild(imgMid)
    //final box mid



    //Contruindo box right
  const boxRight = document.createElement('div')
  boxRight.className = "box-right"

 //Button Desenvolvimento de Sistemas
  const buttonGoDS = document.createElement('a')
  buttonGoDS.id = "ButtonDesenvolvimento" 

  const imgDs = document.createElement('img')
  imgDs.src = './img/code.png'

  const h1Ds = document.createElement('h1')
  h1Ds.textContent = "DS"


  buttonGoDS.addEventListener("click", function() {
    alert("Div clicada!");
});
  
 //Button Redes
  const buttonGoRedes = document.createElement('a')
  buttonGoRedes.id = "ButtonRedes" 

  const imgRedes = document.createElement('img')
  imgRedes.src = "./img/coputer.png"

  const h1Redes = document.createElement('h1')
  h1Redes.textContent = "REDES"

  buttonGoRedes.addEventListener("click", function() {
    pagina2()
});


  // Criando e colocando os childs
    divHome.appendChild(boxRight)
    boxRight.appendChild(buttonGoDS)
    boxRight.appendChild(buttonGoRedes)
    buttonGoDS.appendChild(imgDs)
    buttonGoDS.appendChild(h1Ds)
    buttonGoRedes.appendChild(imgRedes)
    buttonGoRedes.appendChild(h1Redes)
   
    
    mainContainer.appendChild(divHome)

}


function pagina2(params) {
    app.innerHTML = '';
}





construirHome()