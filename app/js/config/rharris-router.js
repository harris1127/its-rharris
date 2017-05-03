(function(){

'use strict';
	
angular
    .module('rharris.config')
    .config(Routes);

Routes.$inject = ['$stateProvider', '$urlRouterProvider'];

function Routes($stateProvider, $urlRouterProvider) {

 $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
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
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
        	url: '/about',
            templateUrl: 'partials/partial1.html',
            controller: 'MyCtrl1'      
        })

        .state('menu', {
        	url: '/menu',
            templateUrl: 'partials/partial2.html',
            controller: 'MyCtrl2'        
        });

}

})();