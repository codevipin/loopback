app
	.controller('formCtrl',['$scope','loginServe','$state',function($scope,loginServe,$state,$rootScope){
		$scope.showError = false;
		$scope.formFunc = function(){
			console.log($scope.form);
			regService.update({id:$scope.form.id},$scope.form);
			$scope.form = "";
		};

// $scope.showReg = regService.query({},

// function(response){
// $scope.showReg = response;
// console.log($scope.showReg);


// },
// function(response) {
// $scope.message = "Error: "+response.status + " " + response.statusText;
// });
  		
		$scope.loginFn = function() {

			$scope.detail=loginServe.login().update({id:$scope.login.id},$scope.login).$promise.then(
				function(response) {

					$scope.detail = response;
					console.log($scope.detail.id);
					$rootScope.token = $scope.detail.id;

					// localStorage.setItem("token", JSON.stringify($scope.detail.id));
					$state.go('register',$scope.token);
				},
				function(response){

					console.log(response.status,response.statusText);
					if(response.status==401){

						$scope.showError = true;
						$scope.error = "Wrong Username or Password";

					    setTimeout(function(){

					     $scope.showError = false;
					     $scope.$apply();
					     }, 3000);
							
					}
				}
			);	
		}

		$scope.logoutFn = function(){
			//loginServe.update({})
			//$scope.token=$scope.detail.id;
			var getToken = localStorage.getItem("swagger_accessToken");
			console.log(getToken);
			console.log($rootScope.token);
		}

		$scope.regSubmit =  function()	{
				console.log($scope.main)
		};

		}]);








