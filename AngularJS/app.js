angular.module("ListaTel", []);
angular.module("ListaTel").controller("ListaTelCtrl", ($scope) => {
    $scope.app = "Lista telefonica";
    $scope.contatos = [
        {nome: "Pedro", telefone: "99998888"},
        {nome: "Ana", telefone: "99998877"},
        {nome: "Maria", telefone: "99998866"}
    ];
    $scope.adicionarContato = (nome, telefone) => {
        $scope.contatos.push({nome: nome, telefone: telefone});
    };
});
