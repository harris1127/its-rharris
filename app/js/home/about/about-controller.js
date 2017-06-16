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

        setTimeout(function start (){

            $('.bar').each(function(i){
                var $bar = $(this);
                $(this).append('<span class="count"></span>');
                setTimeout(function(){
                    $bar.css('width', $bar.attr('data-percent'));
                }, i*100);
            });

            $('.count').each(function () {
                $(this).prop('Counter',0).animate({
                    Counter: $(this).parent('.bar').attr('data-percent')
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now) +'%');
                    }
                });
            });

        }, 500);


    };

    //Document Ready
    $(function(){
        graphAnimation();
    });



})();