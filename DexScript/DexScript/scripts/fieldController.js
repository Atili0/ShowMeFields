
define(function () {
    var fieldController = angular.module('fieldController', {});
    fieldController.controller('mainController', function ($scope) {

        $scope.aryLetter = [];
        $scope.aryValueLetter = [];
        $scope.values = [];

        function getValueField() {
            SDK.JQuery.retrieveRecord(
                "f090ddee-d441-e511-9402-00155d5c450b",
                "dx_test",
                null, null,
                function(account) {
                    $scope.values = account;
                },
                function() {

                }, false
            );
        };

        function retrieveMetadataChangesRequestCallback(response) {
            var valorField;
            getValueField();

            var entities = response.getEntityMetadata();
            //get the attributes for the account entity
            var attributes = entities[0].Attributes;
            //sort the attributes
            attributes.sort(function(a, b) {
                if (a.SchemaName < b.SchemaName)
                    return -1;
                if (a.SchemaName > b.SchemaName)
                    return 1;
                return 0;
            });

            for (var i = 0; i < attributes.length; i++) {
                var attribute = attributes[i];
                if (attributes[i].DisplayName.LocalizedLabels.length > 0) {
                    var charMetadata = attribute.DisplayName.LocalizedLabels[0].Label.charAt(0);
                    if (jQuery.inArray(charMetadata.toUpperCase(), $scope.aryLetter) === -1) {
                        $scope.$apply(
                            $scope.aryLetter.push(charMetadata.toUpperCase())
                        );
                    }
                    var fff = attribute._type;

                    switch (attribute._type) {
                        case "PicklistAttributeMetadata": 
                            valorField = $scope.values[attribute.SchemaName].Value;
                            $scope.$apply(
                            $scope.aryValueLetter.push({
                                name: attribute.DisplayName.LocalizedLabels[0].Label,
                                value: valorField
                            }));
                            break;
                        case "StringAttributeMetadata":
                        case "DoubleAttributeMetadata":
                        case "BooleanAttributeMetadata": 
                        case "IntegerAttributeMetadata":
                        case "DateTimeAttributeMetadata":
                            valorField = $scope.values[attribute.SchemaName];
                            $scope.$apply(
                                $scope.aryValueLetter.push({
                                    name: attribute.DisplayName.LocalizedLabels[0].Label,
                                    value: valorField
                                }));
                            break;
                    default:
                    }
                }
            }
        }

        $scope.init = function () {
            //Agrega el CSS a la página web
            var css = document.createElement('link');
            css.rel = 'stylesheet';
            css.href = "/WebResources/dx_/css/metro/metroStyle.css";
            document.head.appendChild(css);

            var mdq = Sdk.Mdq;
            var semp = mdq.SearchableEntityMetadataProperties;
            var samp = mdq.SearchableAttributeMetadataProperties;
            var emp = mdq.EntityMetadataProperties;
            var amp = mdq.AttributeMetadataProperties;

            var entityFilter = new mdq.MetadataFilterExpression(mdq.LogicalOperator.And);
            //Xrm.Page.data.entity.getEntityName()
            entityFilter.addCondition(semp.LogicalName, mdq.MetadataConditionOperator.Equals, "dx_test");
            var entityProperties = new mdq.MetadataPropertiesExpression(false,
            [
                emp.Attributes,
                emp.SchemaName,
                emp.DisplayName
            ]);

            var attributesFilter = new mdq.MetadataFilterExpression(mdq.LogicalOperator.And);
            attributesFilter.addCondition(samp.AttributeType, mdq.MetadataConditionOperator.NotEquals, "Virtual");
            var attributeProperties = new mdq.MetadataPropertiesExpression(false,
            [
                amp.DisplayName,
                amp.OptionSet,
                amp.SchemaName
            ]);

            var labelQuery = new mdq.LabelQueryExpression([Xrm.Page.context.getUserLcid()]);

            var query = new mdq.EntityQueryExpression(
                entityFilter,
                entityProperties,
                new mdq.AttributeQueryExpression(attributesFilter, attributeProperties),
                null,
                labelQuery);

            var request = new Sdk.RetrieveMetadataChangesRequest(query, null, null);
            Sdk.Async.execute(request,
                retrieveMetadataChangesRequestCallback,
                function (error) {
                    alert(error.message);
                });

        }
    });
}
);