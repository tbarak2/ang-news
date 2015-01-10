'use strict';
/* global app:true */
/* exported app */

/**
 * @ngdoc overview
 * @name angNewsApp
 * @description
 * # angNewsApp
 *
 * Main module of the application.
 */
var app = angular
  .module('angNewsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
	'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/posts.html',
        controller: 'PostsCtrl'
      })
		.when('/posts/:postId', {
		templateUrl: 'views/showpost.html',
		controller: 'PostViewCtrl'
	  })
	  .when('/register', {
	  templateUrl: 'views/register.html',
	  controller: 'AuthCtrl',
	  resolve: {
		user: function(Auth) {
		  return Auth.resolveUser();
		}
	  }
	})
	.when('/login', {
	  templateUrl: 'views/login.html',
	  controller: 'AuthCtrl',
	  resolve: {
		user: function(Auth) {
		  return Auth.resolveUser();
		}
	  }
	})
	.when('/users/:userId', {
	  templateUrl: 'views/profile.html',
	  controller: 'ProfileCtrl'
	})
    /*.when('/login', {
	  templateUrl: 'views/login.html',
	  controller: 'AuthCtrl',
	  resolve: {
		user: function(Auth) {
		  return Auth.resolveUser();
		}
	  }
	})*/
      .otherwise({
        redirectTo: '/'
      });
  });
app.constant('FIREBASE_URL','https://blazing-heat-4972.firebaseio.com/');
