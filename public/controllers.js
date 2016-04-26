var newsControllers = angular.module('newsControllers', []);

newsControllers.controller('NewsDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    var id = $routeParams.id;
    console.log(id);
    $http.get('/news/' + id).success(function (response) {
    	console.log("got single news");
        $scope.news = response;
    });
  }]);

//whole news controller
newsControllers.controller('wholeInformationCtrl', ['$scope', '$window',  '$http', function($scope, $window, $http) {
  $scope.goal = "Whole News";
  //check screen size
  var windowSize = $window.innerWidth;
  $scope.showImg = true;
  //for phones
  if(windowSize > 768) {
    $scope.showImg = true;
  }else  {
    $scope.showImg = false;
  }

  $http.get('/wholenews').success(function(response) {
    console.log("I got news list");
    $scope.news = response;
  });	
  $scope.addLike = function(news) {
		news.like++;
	};
}]);



newsControllers.controller('adminCtrl', ['$scope', '$window',  '$http', function($scope, $window, $http) {
   var refresh = function() {
      $http.get('/wholenews').success(function(response) {
      console.log("I got news list");
      $scope.news = response;
      }); 
  };
  //get data
  refresh();
  //add News
  $scope.addNews = function() {
        $scope.singleNews.time = $('#time').val();
        console.log("single news: " + $scope.singleNews.time);
        $http.post('/addnews', $scope.singleNews).success(
          function(response) {
            console.log(response);
            refresh();
          }
        );
  };

  $scope.removeNews = function(id) {
    console.log("id: " + id);
    $http.delete('/removenews' + '/' + id).success(function(err, doc){refresh();});
  };

  $scope.clear = function() {
    $scope.singleNews = {};
    $('#time').val("");
  };

  $scope.update = function() {
    var id = $scope.singleNews._id;
    console.log("edit id: " + id);
    $scope.singleNews.time = $('#time').val();
    $http.put("/updatenews/" + id, $scope.singleNews).success(function(response) {
      refresh();
    });
  };

  $scope.editNews= function(id){
    console.log("id: " + id);
    $http.get('/editnews/' + id).success(function(response){
      console.log("edit single news: " + response );
      $scope.singleNews = response;
      $('#time').val($scope.singleNews.time);
      //console.log("date time value " + $scope.singleNews.time);
    });

  };
}]);




//politics controller
newsControllers.controller('politicsNewsCtrl', ['$scope', '$http', '$window', function($scope, $http, $window) {
  var windowSize = $window.innerWidth;
  $scope.showImg = true;
  //for phones
  if(windowSize > 768) {
    $scope.showImg = true;
  }else  {
    $scope.showImg = false;
  }
  $scope.goal = "politics";
  $http.get('/politics').success(function(response) {
    console.log("I got political news list");
    $scope.news = response;
  });	
  $scope.addLike = function(news) {
		news.like++;
	};
}]);
//entainment controller
newsControllers.controller('entertainmentNewsCtrl', ['$scope', '$http', '$window', function($scope, $http, $window) {
  $scope.goal = "Entertainment";
  var windowSize = $window.innerWidth;
  $scope.showImg = true;
  //for phones
  if(windowSize > 768) {
    $scope.showImg = true;
  }else  {
    $scope.showImg = false;
  }
  $http.get('/entertainment').success(function(response) {
    console.log("I got entainment news list");
    $scope.news = response;
  });	
  $scope.addLike = function(news) {
		news.like++;
	};
}]);
//sports controller
newsControllers.controller('sportsNewsCtrl', ['$scope', '$http', '$window', function($scope, $http, $window) {
  $scope.goal = "Sports";
  var windowSize = $window.innerWidth;
  $scope.showImg = true;
  //for phones
  if(windowSize > 768) {
    $scope.showImg = true;
  }else  {
    $scope.showImg = false;
  }
  $http.get('/sports').success(function(response) {
    console.log("I got sports news list");
    $scope.news = response;
  });	
  $scope.addLike = function(news) {
		news.like++;
	};
}]);
//Technology controller
newsControllers.controller('technologyNewsCtrl', ['$scope', '$http', '$window', function($scope, $http, $window) {
  $scope.goal = "Technology";
  var windowSize = $window.innerWidth;
  $scope.showImg = true;
  //for phones
  if(windowSize > 768) {
    $scope.showImg = true;
  }else  {
    $scope.showImg = false;
  }
  $http.get('/technology').success(function(response) {
    console.log("I got technology news list");
    $scope.news = response;
  });	
  $scope.addLike = function(news) {
		news.like++;
	};
}]);

//Home controller
/*newsControllers.controller('homeNewsCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.goal = "I will do the best news website";
  $http.get('/home').success(function(response) {
    console.log("I got home news list");
    $scope.news = response;
  });	
  $scope.addLike = function(news) {
		news.like++;
	};
}]);*/



newsControllers.controller('TabsCtrl', function ($scope, $window) {
  
});



newsControllers.controller('ModalDemoCtrl', function ($scope, $uibModal, $log) {

  $scope.items = ['item1', 'item2', 'item3'];

  $scope.animationsEnabled = true;

  $scope.openLogin = function (size) {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'partials/loginPage.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };


  $scope.openSignUp = function (size) {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'partials/signUp.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };

});


newsControllers.controller('ModalInstanceCtrl', ['$scope', '$uibModalInstance', 'items', 'mySharedService', function ($scope, $uibModalInstance, items, sharedService) {
  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $uibModalInstance.close($scope.selected.item);
    sharedService.prepForBroadcast("success");
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };

}]);


//Modal part
newsControllers.controller('AlertDemoCtrl',['$scope', 'mySharedService', function ($scope, sharedService) {
  $scope.alerts = [];
  $scope.addAlert = function() {
    $scope.alerts.push({type: 'success', msg: 'Login Successfully'});
  };
  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };
  $scope.login = true;
  $scope.$on('success', function() {
        $scope.login = true;
        $scope.addAlert();
    });  
}]);

newsControllers.controller('hotNewsCtrl', ['$scope', function($scope){
  $scope.hotNewsList = [
  {'link': 'http://guxueying.com:3000/#/content/16', 'title': '‘Zootopia’ Nears $700M Global; ‘The Revenant’ Crosses $500M Globally – International Box Office Final'},
  {'link': 'http://guxueying.com:3000/#/content/5', 'title':'Sanders sweeps in Alaska, Hawaii, Washington, but too little too late?' },
  {'link': 'http://guxueying.com:3000/#/content/23', 'title': 'Sources: Badgers to name Tony Granato men\'s hockey coach'},
  {'link': 'http://guxueying.com:3000/#/content/4', 'title': 'Donald Trump\'s history of controversy with women'},
  {'link': 'http://guxueying.com:3000/#/content/2', 'title': 'Bernie Sanders: \'I think we know who ISIS is\''},
  {'link': 'http://guxueying.com:3000/#/content/7', 'title': 'Cruz blames Trump and his \'henchmen\' for tabloid story'},
  {'link': 'http://guxueying.com:3000/#/content/0', 'title': 'Putin’s Surprise Syria Move Keeps Everyone Guessing'},
  {'link': 'http://guxueying.com:3000/#/content/11', 'title': 'Hillary Clinton: \'Tomorrow, this campaign goes national\''},
  {'link': 'http://guxueying.com:3000/#/content/26', 'title': 'After racist tweets, Microsoft muzzles teen chat bot Tay'},
  {'link': 'http://guxueying.com:3000/#/content/25', 'title': 'Facebook activates Safety Check after Brussels attacks'}
  ];
}]);


