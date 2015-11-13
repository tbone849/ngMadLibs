angular.module('myApp', ['ngMessages', 'ngAnimate'])
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
        $scope.madLibCopy = angular.copy($scope.madLib);
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
        $scope.clear = function(){
            $scope.madLib = angular.copy($scope.madLibCopy);
            $scope.selected = '';
            $scope.goodForm = false;
            $scope.madLibForm.$setPristine();
        }
    });