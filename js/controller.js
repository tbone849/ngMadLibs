angular.module('myApp', ['ngMessages'])
    .controller('setInputs', function($scope) {
        $scope.madLib = {
        	name: '',
        	jobTitle: '',
        	tediousTask: '',
        	dirtyTask: '',
        	celebrity: '',
        	uselessSkill: '',
        	adjective: '',
        	obnoxiousCelebrity: '',
        	hugeNumber: ''
        };
        $scope.genders = ['male', 'female'];
        $scope.selected = '';
        $scope.male = {
        	he: 'he',
        	his: 'his',
        	him: 'him',
        }
        $scope.female = {
        	she: 'she',
        	her: 'her'
        }
        
        $scope.goodForm = false;
        $scope.submit = function(){
            if($scope.madLibForm.$valid && $scope.madLibForm.$submitted){
                $scope.goodForm = true;
            }
        }
    });