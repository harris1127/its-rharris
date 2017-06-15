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
            		templateUrl: 'partials/header.html'
            	},
            	'content': {
            		templateUrl: 'partials/rharris-home.html',
            	},
            	'footer': {
            		templateUrl: 'partials/footer.html'
            	}
            }

        })

        .state('home.about', {
            url: 'about',
            views: {
                'content@': {
                    templateUrl: 'partials/about.html',
                }
            }
        })

        .state('home.resume', {
            url: 'resume',
            views: {
                'content@': {
                    templateUrl: 'partials/resume.html',
                }
            }
        })

        .state('home.test', {
            url: 'test',
            views: {
                'content@': {
                    templateUrl: 'partials/test.html',
                }
            }
        })

        .state('home.contact', {
            url: 'contact',
            views: {
                'content@': {
                    templateUrl: 'partials/contact.html',
                }
            }
        })


}

})();