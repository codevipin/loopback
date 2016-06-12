var app  = angular.module('app',['ngResource','ui.router']);

app
 .config(function($stateProvider,$urlRouterProvider){
 	$stateProvider
 		.state('app',{
 			url:'/',
 			'templateUrl': 'views/login.html',
 			'controller':'formCtrl'
 				
 			
 		})

 		.state('register',{
 			'url':'/register',
 			'templateUrl': 'views/register.html',
 			'controller':'formCtrl'
 		})
 			$urlRouterProvider.otherwise('/');
 });