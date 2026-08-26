sap.ui.define([
    "sap/ui/core/UIComponent",
    "industriaui/model/models"
], (UIComponent, models) => {
    "use strict";

    return UIComponent.extend("industriaui.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // set the device model
            this.setModel(models.createDeviceModel(), "device");

                // set the production model
    this.setModel(models.createProductionModel(), "production");

            // enable routing
            this.getRouter().initialize();
        }
    });
});