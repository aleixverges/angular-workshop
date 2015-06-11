(function (angular) {
	angular
		.module('app')
		.directive('taTodoList', taTodoList);

		function taTodoList() {
			return {
				restrict: 'E',
                templateUrl: '/shared/todoList/partials/todo-list.html',
                scope: {
                    list: '='
                },
                controller: controller,
                controllerAs: 'ctrl',
				replace: true
			};

            function controller($scope) {
                var vm = this;
                vm.taskLength = 0;
                $scope.$watch('list', function(newValue){
                    vm.taskLength = newValue.length;
                }, true);
            }
		}
}(angular));
