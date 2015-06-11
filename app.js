(function(angular){
	angular
		.module('TodoApp', ['ngNewRouter'])
        .controller('AppController', AppController);

    AppController.$routeConfig = [
        {path: '/todo', component: 'todo'}
    ];

    function AppController() {};
})(angular);
