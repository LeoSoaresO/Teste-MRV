window.onload = getCitys()

function getCitys(){

    const URL='https://servicodados.ibge.gov.br/api/v1/localidades/estados'

    fetch(URL)
    .then( response => response.json() )
    .then( data => renderOptions(data) )
}

function renderOptions(data){
    for (const d of data) {
        const select = document.getElementById('state');
        const opt = document.createElement('option')

        opt.innerHTML = d.nome

        select.append(opt)
    }
}   

function openModal(){

    let modal = document.getElementById("myModal");
    let btn = document.getElementById("openModal");
    let span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
