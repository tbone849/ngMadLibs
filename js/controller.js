angular.module('myApp', [])
    .controller('setInputs', function($scope) {
        $scope.madLib = {
        	femaleName: '',
        	jobTitle: '',
        	tediousTask: '',
        	dirtyTask: '',
        	celebrity: '',
        	uselessSkill: '',
        	adjective: '',
        	obnoxiousCelebrity: '',
        	hugeNumber: ''
        }
    });