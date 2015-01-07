'use strict';

app.controller('PostViewCtrl', function ($scope, $routeParams, Post) {
  $scope.post = Post.get($routeParams.postId);
   //console.debug('postView.js' + $scope.post);
});
