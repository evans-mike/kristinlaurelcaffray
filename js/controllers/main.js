'use strict';

angular.module('website')
    .controller('MainCtrl', function ($scope) {
      $scope.slides = [
            {image: '../kristinlaurelcaffray/img/OccupyBoston/Caffray_110930-1812.jpg', description: 'Image 1812'},
            {image: '../kristinlaurelcaffray/img/OccupyBoston/Caffray_110930-1821.jpg', description: 'Image 1821'},
            {image: '../kristinlaurelcaffray/img/OccupyBoston/Caffray_110930-1829.jpg', description: 'Image 1829'},
            {image: '../kristinlaurelcaffray/img/OccupyBoston/Caffray_110930-1860.jpg', description: 'Image 1860'},
            {image: '../kristinlaurelcaffray/img/OccupyBoston/Caffray_110930-1898.jpg', description: 'Image 1898'},
            {image: '../kristinlaurelcaffray/img/OccupyBoston/Caffray_110930-2090.jpg', description: 'Image 2090'},
            {image: '../kristinlaurelcaffray/img/OccupyBoston/Caffray_110930-2222.jpg', description: 'Image 2222'},
            {image: '../kristinlaurelcaffray/img/OccupyBoston/Caffray_110930-2240.jpg', description: 'Image 2240'},
            {image: '../kristinlaurelcaffray/img/OccupyBoston/Caffray_110930-2255.jpg', description: 'Image 2255'},
            {image: '../kristinlaurelcaffray/img/OccupyBoston/Caffray_110930-2258.jpg', description: 'Image 2258'}
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
