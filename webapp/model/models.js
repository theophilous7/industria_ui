sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
],
function (JSONModel, Device) {
    "use strict";

    return {

        /**
         * Provides runtime information for the device the UI5 app is running on.
         */
        createDeviceModel: function () {
            var oModel = new JSONModel(Device);

            oModel.setDefaultBindingMode("OneWay");

            return oModel;
        },

        /**
         * Creates the production dashboard model.
         */
        createProductionModel: function () {
            var oModel = new JSONModel();

        oModel.loadData("/model/production.json");

            return oModel;
        }
    };

});