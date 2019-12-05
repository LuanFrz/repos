var btnAdd = document.querySelector('#adicionar-paciente');
var ul = document.querySelector('#mensagens-erro');
btnAdd.addEventListener("click", function (event){
    event.preventDefault();

    var form = document.querySelector('#form-adiciona'); 
    var paciente = obtemPacienteForm(form);

    var erros = validaPaciente(paciente);   
    if (erros.length > 0){
        exibeMsgErro(erros);

        return;
    }

    form.reset();
    ul.innerHTML = '';
});

// Adicionando o paciente na tabela.
function addPaciente(paciente) {
    var pacienteTr = montarTr(paciente);

    var tabela = document.querySelector('#tabela-pacientes');

    tabela.appendChild(pacienteTr);
}

// Extraindo informações do paciente do form.
function obtemPacienteForm(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcImc(form.peso.value, form.altura.value),
    }

    return paciente;
}

// Cria a tr do paciente.
function montarTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add('paciente'); 
    
    pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'));
    pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'));
    pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'));
    pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'));
    pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'));
    del (pacienteTr.appendChild(montaTd('X', 'remove')));

    return pacienteTr;
}
// Cria a td do paciente.
function montaTd(dado, classe){
    var td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente){
    var erros = [];

    if (paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco.")
    }
    if (!validaPeso(paciente.peso)){
        erros.push('O peso é inválido!');
    }
    if (!validaAltura(paciente.altura)){
        erros.push(' A altura é inválida!');
    }
    if (paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branco.")
    }

    return erros;
}

function exibeMsgErro (erros) {
    ul.innerHTML = '';

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        li.classList.add('campo-invalido')
        ul.appendChild(li);
    });
}