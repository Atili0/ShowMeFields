
/**
 * en realidad necesito bootstrap?
 * /
 */
require.config({
    paths: {
        'angular': '/WebResources/dx_/Scripts/angular/angularjs',
        'app': 'app',
        'fieldController': 'fieldController',
        'jquery': '/WebResources/dx_/Scripts/jquery/jquery',
        'Sdk.Soap': '/WebResources/dx_/Scripts/libs/Sdk.Soap',
        'metro': '/WebResources/dx_/Scripts/metro/metro',
        'Sdk.RetrieveMetadataChanges': '/WebResources/dx_/Scripts/libs/Sdk.RetrieveMetadataChanges',
        'SDK.JQuery': '/WebResources/dx_/Scripts/libs/SDK.JQuery'
    },
    shim: {
        'SDK.JQuery': {
            deps: ['jquery']
        },
        'metro': {
            deps: ['jquery']
        },

        'angular': {
            deps: ['jquery']
        },

        'app': {
            deps: ['angular', 'fieldController', 'Sdk.Soap', 'metro', 'Sdk.RetrieveMetadataChanges', 'SDK.JQuery']
        },
        'fieldController': {
            deps: ['angular']
        }
    }
});

require(['app'], function () {
    angular.bootstrap(document, ['app']);
});