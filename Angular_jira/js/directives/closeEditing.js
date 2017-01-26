angular.module('app').directive('closeEditing', function (cardFactory){
	var KEYS = {
		ESCAPE: 27
	};
	return {
		scope: {
			isEditing: '='
		},
		link: function (scope, element, attrs) {
			element.on('blur', function (e){
				scope.isEditing = false;
				scope.$apply();
			});
				
			element.on('keyup', function (e){
				if (_.isEqual(e.keyCode, KEYS.ESCAPE)){
					scope.isEditing = false;
					scope.$apply();
				}
			});
		}
	};

});