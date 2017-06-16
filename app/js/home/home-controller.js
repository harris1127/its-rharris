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

        self.post1 = function() {

            $(".rharris-post-1").click(function(){
                if ($("#rharris-reveal").hasClass("showblog1")) {
                    $("#rharris-reveal").removeClass("showblog1");
                    setTimeout(function(){
                        $(".rharris-post-1").removeClass("z");
                    }, 500);
                } else {
                    $("#rharris-reveal").addClass("showblog1");
                    setTimeout(function(){
                        $(".rharris-post-1").addClass("z");
                    }, 0);
                }
            });

        };

        self.post2 = function () {

            $(".rharris-post-2").click(function(){
                if ($("#rharris-reveal").hasClass("showblog2")) {
                    $("#rharris-reveal").removeClass("showblog2");
                    setTimeout(function(){
                        $(".rharris-post-2").removeClass("z");
                    }, 500);
                } else {
                    $("#rharris-reveal").addClass("showblog2");
                    setTimeout(function(){
                        $(".rharris-post-2").addClass("z");
                    }, 0);
                }
            });

        };

        self.post3 = function () {

            $(".rharris-post-3").click(function(){
                if ($("#rharris-reveal").hasClass("showblog3")) {
                    $("#rharris-reveal").removeClass("showblog3");
                    setTimeout(function(){
                        $(".rharris-post-3").removeClass("z");
                    }, 500);
                } else {
                    $("#rharris-reveal").addClass("showblog3");
                    setTimeout(function(){
                        $(".rharris-post-3").addClass("z");
                    }, 0);
                }
            });

        }

    }


})();