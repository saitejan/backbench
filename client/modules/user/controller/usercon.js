
angular.module('appUserCtrl',[])
    .controller('UserCtrl',function ($scope,$http,$state,UserService) {
    $scope.oneuserData	= UserService.getUserData();
    	
        
        $scope.myDate= Date.now();

        $http.get("http://www.mocky.io/v2/5b4dafc131000055005ebd20")
        .then(function(result) {
              $scope.dashboard_2 = result.data.reply;
          });

            

        $http.get("http://www.mocky.io/v2/5b4daf3431000055005ebd18")
        .then(function(result) {
              $scope.activities = result.data.reply;
          });


$scope.IsVisible = true;

$scope.ShowHide = function(val){
    $scope.nameval="Shared with me"
    $scope.IsVisible = $scope.IsVisible=false ;
    $scope.val=val;
}

$scope.bench1=function(){
    $scope.IsVisible=$scope.IsVisible=true;
}

   $scope.mybench=function(){

	$state.go('app.home');

    } 
      


})