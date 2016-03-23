angular.module('website', ['ngAnimate'])
    .controller('MainCtrl', function ($scope) {
      $scope.slides = [
            {image: '../img/OccupyBoston/Caffray_110930-1812.jpg', description: 'Image 1812'},
            {image: '../img/OccupyBoston/Caffray_110930-1821.jpg', description: 'Image 1821'},
            {image: '../img/OccupyBoston/Caffray_110930-1829.jpg', description: 'Image 1829'},
            {image: '../img/OccupyBoston/Caffray_110930-1860.jpg', description: 'Image 1860'},
            {image: '../img/OccupyBoston/Caffray_110930-1898.jpg', description: 'Image 1898'},
            {image: '../img/OccupyBoston/Caffray_110930-2090.jpg', description: 'Image 2090'},
            {image: '../img/OccupyBoston/Caffray_110930-2222.jpg', description: 'Image 2222'},
            {image: '../img/OccupyBoston/Caffray_110930-2240.jpg', description: 'Image 2240'},
            {image: '../img/OccupyBoston/Caffray_110930-2255.jpg', description: 'Image 2255'},
            {image: '../img/OccupyBoston/Caffray_110930-2258.jpg', description: 'Image 2258'}
        ];

        $scope.direction = 'left';
        $scope.currentIndex = 0;

        $scope.setCurrentSlideIndex = function (index) {
            $scope.direction = (index > $scope.currentIndex) ? 'left' : 'right';
            $scope.currentIndex = index;
        };

        $scope.isCurrentSlideIndex = function (index) {
            return $scope.currentIndex === index;
        };

        $scope.prevSlide = function () {
            $scope.direction = 'left';
            $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
        };

        $scope.nextSlide = function () {
            $scope.direction = 'right';
            $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
        };
    })
    .animation('.slide-animation', function () {
      return {
          beforeAddClass: function (element, className, done) {
              var scope = element.scope();

              if (className == 'ng-hide') {
                    var finishPoint = element.parent().width();
                    if(scope.direction !== 'right') {
                        finishPoint = -finishPoint;
                    }
                    TweenMax.to(element, 0.5, {left: finishPoint, onComplete: done });
                }
                else {
                  done();
                }
          },
          removeClass: function (element, className, done) {
                var scope = element.scope();

                if (className == 'ng-hide') {
                    element.removeClass('ng-hide');

                    var startPoint = element.parent().width();
                    if(scope.direction === 'right') {
                        startPoint = -startPoint;
                    }

                    TweenMax.fromTo(element, 0.5, { left: startPoint }, {left: 0, onComplete: done });
                }
                else {
                  done();
                }
          }
      };
    });
