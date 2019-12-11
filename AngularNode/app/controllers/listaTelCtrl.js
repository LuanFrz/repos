angular.module("ListaTel").controller("listaTelCtrl", ($scope) => {
    $scope.app = "Lista Telefonica";
    $scope.contatos = [
        {nome: "Pedro", telefone: 99998888},
        {nome: "Ana", telefone: 99998877},
        {nome: "Maria", telefone: 99998866}
    ];
    $scope.operadoras = [
        {nome: "Oi", codigo: 14, categoria: "Celular"},
        {nome: "Vivo", codigo: 15, categoria: "Celular"},
        {nome: "Tim", codigo: 41, categoria: "Celular"},
        {nome: "GVT", codigo: 25, categoria: "Fixo"},
        {nome: "Embratel", codigo: 21, categoria: "Fixo"},
    ];
    $scope.adicionarContato = (contato) => {
        $scope.contatos.push(angular.copy(contato));
        delete $scope.contato;
        $scope.contatoForm.$setPristine();
    };
    $scope.removerContato = (contatos) => {
        $scope.contatos = contatos.filter((contato) => {
            if (!contato.selecionado) return contato;
        });
    };
    $scope.isContatoSelecionado = (contatos) => {
        return contatos.some((contato) => {
            return contato.selecionado;
        });
    };
});