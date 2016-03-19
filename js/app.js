angular.module('website', ['ngAnimate'])
    .controller('MainCtrl', function ($scope) {
      $scope.slides = [
            {image: '../KristinLaurelCaffray/img/OccupyBoston/Caffray_110930-1812.jpg', description: 'Image 1812'},
            {image: '../KristinLaurelCaffray/img/OccupyBoston/Caffray_110930-1821.jpg', description: 'Image 1821'},
            {image: '../KristinLaurelCaffray/img/OccupyBoston/Caffray_110930-1829.jpg', description: 'Image 1829'},
            {image: '../KristinLaurelCaffray/img/OccupyBoston/Caffray_110930-1860.jpg', description: 'Image 1860'},
            {image: '../KristinLaurelCaffray/img/OccupyBoston/Caffray_110930-1898.jpg', description: 'Image 1898'},
            {image: '../KristinLaurelCaffray/img/OccupyBoston/Caffray_110930-2090.jpg', description: 'Image 2090'},
            {image: '../KristinLaurelCaffray/img/OccupyBoston/Caffray_110930-2222.jpg', description: 'Image 2222'},
            {image: '../KristinLaurelCaffray/img/OccupyBoston/Caffray_110930-2240.jpg', description: 'Image 2240'},
            {image: '../KristinLaurelCaffray/img/OccupyBoston/Caffray_110930-2255.jpg', description: 'Image 2255'},
            {image: '../KristinLaurelCaffray/img/OccupyBoston/Caffray_110930-2258.jpg', description: 'Image 2258'}
        ];

        $scope.currentIndex = 0;

        $scope.setCurrentSlideIndex = function (index) {
            $scope.currentIndex = index;
        };

        $scope.isCurrentSlideIndex = function (index) {
            return $scope.currentIndex === index;
        };

        $scope.prevSlide = function () {
            $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
        };

        $scope.nextSlide = function () {
            $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
        };
    })
    .animation('.slide-animation', function () {
      return {
          addClass: function (element, className, done) {
              if (className == 'ng-hide') {
                TweenMax.to(element, 0.5, {left: -element.parent().width(), onComplete: done });
              }
              else {
                  done();
              }
          },
          removeClass: function (element, className, done) {
              if (className == 'ng-hide') {
                element.removeClass('ng-hide');

                TweenMax.set(element, { left: element.parent().width() });
                TweenMax.to(element, 0.5, {left: 0, onComplete: done });
              }
              else {
                  done();
              }
          }
      };
    });
