'use strict';
/* global app:true */
/* exported app */

/*app.controller('PostsCtrl', function ($scope,Post) {
	$scope.posts = [];
	$scope.post = {url: 'http://', title: ''};
	
	$scope.submitPost = function () {
      //$scope.posts.push($scope.post);
	  Post.save($scope.post, function (ref) {
	  $scope.posts[ref.name] = $scope.post;
	  $scope.post = {url: 'http://', title: ''};
	});
	$scope.post = {url: 'http://', title: ''};
	  //$scope.deletePost = function (index) {
	  //$scope.posts.splice(index, 1);
	//};
    };
	
	$scope.deletePost = function (postId) {
	  Post.delete({id: postId}, function () {
		delete $scope.posts[postId];
	  });
	};
});*/
app.controller('PostsCtrl', function ($scope, Post) {
  $scope.posts = Post.all;

  $scope.post = {url: 'http://', 'title': ''};

  $scope.submitPost = function () {
    Post.create($scope.post).then(function () {
      $scope.post = {url: 'http://', 'title': ''};
    });
  };

  $scope.deletePost = function (post) {
    Post.delete(post);
  };

});