//(function () {
    'use strict';

    //function dxCFields($scope) {
       
    //}

//    var module = angular.module('app', []);
//    module.controller('dx_c_fields', function($scope) {
//        $scope.title = 'dx_c_fields';

//        //function activate() {

//        //}

//        //function retrieveMetadataChangesRequestCallback() {

//        //}

//        $scope.init = function () {

//            var mdq = SDK.Metadata.Query;
//            var semp = mdq.SearchableEntityMetadataProperties;
//            var samp = mdq.SearchableAttributeMetadataProperties;
//            var emp = mdq.EntityMetadataProperties;
//            var amp = mdq.AttributeMetadataProperties;


//            var entityFilter = new mdq.MetadataFilterExpression(mdq.LogicalOperator.And);
//            entityFilter.addCondition(semp.LogicalName, mdq.MetadataConditionOperator.Equals, "account");
//            var entityProperties = new mdq.MetadataPropertiesExpression(false,
//                [emp.Attributes,
//                    emp.SchemaName,
//                    emp.ManyToManyRelationships,
//                    emp.ManyToOneRelationships,
//                    emp.OneToManyRelationships]);

//            var attributesFilter = new mdq.MetadataFilterExpression(mdq.LogicalOperator.And);
//            attributesFilter.addCondition(samp.AttributeType, mdq.MetadataConditionOperator.NotEquals, "Virtual");

//            var attributeProperties = new mdq.MetadataPropertiesExpression(false,
//                [amp.DisplayName,
//                    amp.AttributeType,
//                    amp.OptionSet,
//                    amp.SchemaName]);
//            var relationshipFilter = new mdq.MetadataFilterExpression(mdq.LogicalOperator.And);
//            relationshipFilter.addCondition(samp.IsValidForAdvancedFind, mdq.MetadataConditionOperator.Equals, true);

//            var relationshipProperties = new mdq.MetadataPropertiesExpression(true,
//                [emp.ManyToManyRelationships,
//                emp.ManyToOneRelationships,
//                emp.OneToManyRelationships]);
//            var labelQuery = new mdq.LabelQueryExpression([Xrm.Page.context.getUserLcid()]);

//            var query = new mdq.EntityQueryExpression(
//                entityFilter,
//                entityProperties,
//                new mdq.AttributeQueryExpression(attributesFilter, attributeProperties),
//                new mdq.RelationshipQueryExpression(relationshipFilter, relationshipProperties),
//                labelQuery);


//            var request = new mdq.RetrieveMetadataChangesRequest(query);
//            mdq.RetrieveMetadataChanges(
//                request,
//                retrieveMetadataChangesRequestCallback,
//                function (error) {
//                    alert(error.message);
//                });

//        }

////        activate();
//    });
//    //dxCFields.$inject = ['$scope'];
////})();


    var helloApp = angular.module("app", []);
    helloApp.controller("fields", function ($scope) {
        $scope.name = "Calvin Hobbes";


        $scope.init = function ($scope) {

            alert("do something");
        };
    });