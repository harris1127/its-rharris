/**
 * Created by rharris on 6/16/2017.
 */
(function(){

    'use strict';

    angular.module('rharris.about')
        .controller('AboutController', AboutController);

    AboutController.$inject = ['$scope'];


    function AboutController($scope) {

    }

    let graphAnimation = function () {

    };

    //Document Ready
    $(function(){
        graphAnimation();
    });



})();