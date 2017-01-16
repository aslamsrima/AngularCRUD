angular.module("myApp").controller("addCtrl",function($scope,book){
             $scope.book={};
             $scope.book.favorite=false;
             $scope.addBook=function(){
                    book.addbook($scope.book).then(function(){});
            };



});