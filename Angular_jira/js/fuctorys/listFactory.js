angular.module('app').factory('listFactory', function (){
	var servise = {};
	var lists = [
	{
		id: 1,
		listName: 'Todo'
	},
	{
		id: 2,
		listName: 'Doing'
	},
	{
		id: 3,
		listName: 'Done'
	}
	];
	
	servise.getLists = function () {
		return lists;
	};
	
	servise.addList = function (listName){
		lists.push({
			id: _.uniqueId('list_'),
			listName: listName
		});
	};
	
	servise.removeList = function (list) {
		_.pull(lists,list);
	};
	
	return servise;
});