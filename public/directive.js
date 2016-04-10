var newsDirective = angular.module("newsDirective", []);

newsDirective.directive('hotNews', function() {
  return {
    restrict: 'E',
    templateUrl: 'partials/news.html'
  };
});

newsDirective.directive('news', function() {
	return {
		restrict: 'E',
		templateUrl: 'partials/news.html'
	};
});