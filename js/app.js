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

        $scope.currentIndex = 0;

        $scope.setCurrentSlideIndex = function (index) {
            $scope.currentIndex = index;
        };

        $scope.isCurrentSlideIndex = function (index) {
            return $scope.currentIndex === index;
        };
    });
