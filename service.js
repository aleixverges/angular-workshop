(function(angular) {
	angular
		.module('TodoApp')
		.service('TodoService', TodoService);

	function TodoService() {
		var vm = this;
		vm.taskList = [];

		return {
			getList: getList,
			addTask: addTask
		};

		function getList() {
			return vm.taskList;
		}

		function addTask(task) {
			vm.taskList.push(task);
		}
	}
}(angular));
