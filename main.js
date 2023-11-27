window.alert('Olá mundo');


function tocaSom(idElementoAudio) {


    document.querySelector(idElementoAudio).play();
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
}
