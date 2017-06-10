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
            url: 'home',
            views: {
            	'header': {
            		templateUrl: 'partials/header.html'
            	},
            	'content': {
            		templateUrl: 'partials/rharris-home.html',
            	},
                'content1': {
                    templateUrl: 'partials/resume.html',
                },
            	'footer': {
            		templateUrl: 'partials/footer.html'
            	}
            }
            
        })

}

})();