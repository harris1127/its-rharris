/**
 * Created by rharris on 6/16/2017.
 */
(function(){

    'use strict';

    angular
        .module('rharris.home')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope'];

    function HomeController($scope){

        let self = this;
        let current = 1; //keeps track of the current div
        let height = $('.roles').height(); //the height of the roles div
        let numberDivs = $('.roles').children().length; //the number of children of the roles div
        let first = $('.roles div:nth-child(1)'); //the first div nested in roles div

        setInterval(function() {
            let number = current * -height;
            first.css('margin-top', number + 'px');
            if (current === numberDivs) {
                first.css('margin-top', '0px');
                current = 1;
            } else current++;
        }, 2000);

    }

    //Document Ready
    $(function(){
        setInterval();
    });


})();