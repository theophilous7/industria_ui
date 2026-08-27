sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("industriaui.controller.View1", {

        onInit() {
        },

        getStatusState(sStatus) {

            switch (sStatus) {

                case "Running":
                    return "Success";

                case "Delayed":
                    return "Warning";

                case "Down":
                    return "Error";

                default:
                    return "None";
            }
        },


        onLinePress(oEvent) {

    const oItem = oEvent.getSource();

    const oContext =
        oItem.getBindingContext("production");

    const oLine =
        oContext.getObject();

    this.getOwnerComponent()
        .getRouter()
        .navTo("RouteLineDetails", {
            lineId: oLine.lineId
        });

}

    });
});