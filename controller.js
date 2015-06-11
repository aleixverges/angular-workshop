(function(angular){
	angular
		.module('TodoApp')
		.controller('TodoController', TodoController);

	function TodoController(TodoService) {
		
		var vm = this;
		vm.addNewTask = addNewTask;

		init();

		function init() {
			vm.newTask = '';
			refresh();
		}

		function addNewTask() {
			TodoService.addTask(vm.newTask);
			vm.newTask = '';
			refresh();
		}

		function refresh() {
			vm.taskList = TodoService.getList();
		}
	}

})(angular);