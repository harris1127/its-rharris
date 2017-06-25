(function(){

'use strict';

angular
    .module('rharris.core')
    .config(Routes);

Routes.$inject = ['$stateProvider', '$urlRouterProvider'];

function Routes($stateProvider, $urlRouterProvider) {

 $urlRouterProvider.otherwise('/');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/',
            views: {
            	'header': {
            		templateUrl: 'js/home/templates/header.html'
            	},
            	'content': {
            		templateUrl: 'js/home/rharris-home.html',
                    controller: 'HomeController',
                    controllerAs: 'vm'
            	},
            	'footer': {
            		templateUrl: 'js/home/templates/footer.html'
            	}
            }

        })

        .state('home.about', {
            url: 'about',
            views: {
                'content@': {
                    templateUrl: 'js/home/about/about.html',
                    controller: 'AboutController',
                    controllerAs: 'vm'
                }
            }
        })

        .state('home.resume', {
            url: 'resume',
            views: {
                'content@': {
                    templateUrl: 'js/home/resume/resume.html',
                }
            }
        })

        .state('home.test', {
            url: 'test',
            views: {
                'content@': {
                    templateUrl: 'js/home/test.html',
                }
            }
        })

        .state('home.contact', {
            url: 'contact',
            views: {
                'content@': {
                    templateUrl: 'js/home/contact/contact.html'
                }
            }
        })


}

})();