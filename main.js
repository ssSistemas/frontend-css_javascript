window.alert('Olá mundo');


function tocaSom(idElementoAudio) {


    element = document.querySelector(idElementoAudio);

    if (element && element.localName === "audio" ){
       
            element.play();
    }else{
            alert("Elemento nulo ou não é elemento de audio");
    }
        
    
}

//document.querySelector('.tecla_pom').onclick = tocaSomPom;




const listaDeTeclas = document.querySelectorAll('.tecla');

for (const tecla of listaDeTeclas) {
    console.log(tecla);

    const instrumento = tecla.classList[1];

    //Template String
    //const idDinamico = `#som_${instrumento}`;
    const idDinamico = "#som_" + instrumento;

    console.log(idDinamico);

    //   tecla.onclick = tocaSomPom;
    tecla.addEventListener('click', function () {
        tocaSom(idDinamico);
    });

    tecla.addEventListener('keydown', function(){
        if (event.keyCode == 32 || event.keyCode == 13 ){
            tecla.classList.add('ativa');
        }
    } )

    tecla.addEventListener('keyup', function(){
        tecla.classList.remove('ativa');
    } )



}


