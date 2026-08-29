sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("industriaui.controller.LineDetails", {

        onInit() {

            const oRouter = this.getOwnerComponent().getRouter();

            oRouter
                .getRoute("RouteLineDetails")
                .attachPatternMatched(
                    this._onRouteMatched,
                    this
                );

        },

        _onRouteMatched(oEvent) {

            const sLineId =
                oEvent.getParameter("arguments").lineId;

            const oModel =
                this.getOwnerComponent()
                    .getModel("production");

            const aLines =
                oModel.getProperty("/productionLines");

            const oSelectedLine =
                aLines.find(
                    oLine => oLine.lineId === sLineId
                );

            if (oSelectedLine) {

                this.getView().setBindingContext(
                    oModel.createBindingContext(
                        "/productionLines/" +
                        aLines.indexOf(oSelectedLine)
                    ),
                    "production"
                );

            }

        },


        getVarianceState(iVariance) {

    if (iVariance > 0) {
        return "Success";
    }

    if (iVariance < 0) {
        return "Error";
    }

    return "None";
},
        onNavBack() {

            this.getOwnerComponent()
                .getRouter()
                .navTo("RouteView1");

        }

    });

});