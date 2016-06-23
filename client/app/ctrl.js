app
	.controller('formCtrl',['$scope','loginServe','$state','$rootScope',function($scope,loginServe,$state,$rootScope){
		$scope.showError = false;
  		$rootScope.showErr = false;
		$scope.loginFn = function() {

			$scope.detail=loginServe.login().update({id:$scope.login.id},$scope.login).$promise.then(
				function(response) {

					$scope.detail = response;
					console.log($scope.detail.id);
					$scope.token = $scope.detail.id;
					$rootScope.showErr = true;
					

					// localStorage.setItem("token", JSON.stringify($scope.detail.id));
					$state.go('register');
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
		};

		$scope.logoutFn = function(){
			var token = $rootScope.showErr;
			//loginServe.update({})
			//$scope.token=$scope.detail.id;
			// var getToken = localStorage.getItem("swagger_accessToken");
			// console.log(getToken);
			$state.go('app');
			console.log("Logged out,token Deleted"); 

			// $scope.logoutDetail = loginServe.logout($scope.token).update().$promise.then(function(response) {
			// 	$scope.logoutDetail = response;
			// 	console.log($scope.logoutDetail);
			// 	},
			// 	function(response){
			// 	console.log(response.status,response.statusText);
			// 	}
			// 	)
		};

		$scope.regSubmit =  function()	{
			console.log($scope.regform);
			$scope.driverDetail = loginServe.regDriver().update({id:$scope.regform.id},$scope.regform).$promise.then(function(response) {
				$scope.driverDetail = response;
				console.log($scope.driverDetail);
				},
				function(response){
				console.log(response.status,response.statusText);
				}
				)
				
		};

		}]);








