var pacientes = document.querySelectorAll(".paciente");
pacientes.forEach(function (){ del() });

function del (delTd){
    if (delTd) {
        pacienteDel = [];
        pacienteDel.push(delTd);
    } else {
        pacienteDel = document.querySelectorAll('.remove');
    }

    pacienteDel.forEach(function (paciente) {    
        paciente.addEventListener('click', function(){
            this.parentNode.classList.add("fadeOut");
            setTimeout(function (){
                paciente.parentNode.remove();
            },500);
        });
    });
}