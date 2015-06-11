(function (angular) {
	angular
		.module('TodoApp')
		.directive('taTodoList', taTodoList);

		function taTodoList() {
			return {
				restrict: 'E',
				template: '<ul><li ng-repeat="task in ctrl.taskList track by $index">{{ task }}</li></ul>',
				replace: true
			};
		}

}(angular));