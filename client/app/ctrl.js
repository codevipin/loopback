app
	.controller('formCtrl',['$scope','regService','loginServe','$state',function($scope,regService,loginServe,$state){
		$scope.showError = false;
		$scope.formFunc = function(){
			console.log($scope.form);
		regService.update({id:$scope.form.id},$scope.form);
		$scope.form = "";
		}

		// $scope.showReg = regService.query({},
            
  //                           function(response){
  //                               $scope.showReg = response;
  //                               console.log($scope.showReg);
                                
                                
  //                           },
  //                           function(response) {
  //                               $scope.message = "Error: "+response.status + " " + response.statusText;
  //                           });
  		
		$scope.loginFn = function(){
			
			$scope.detail=loginServe.update({id:$scope.login.id},$scope.login).$promise.then(
					function(response){
						$scope.detail = response;
						console.log($scope.detail);
			
						console.log($scope.login.email);
						if(email=='admin@admin.com'){
						$state.go('register');
							}
						
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
		
		

	}]);


