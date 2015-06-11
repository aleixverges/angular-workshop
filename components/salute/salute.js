(function(angular){
    angular
        .module('app.salute', [])
        .controller('SaluteController', SaluteController);

    function SaluteController(TodoService) {
        var vm = this;
        vm.greeting = "Hello world!";
    }

})(angular);