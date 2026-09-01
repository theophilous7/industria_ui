sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("industriaui.controller.OrderDetails", {

        onInit() {

            const oRouter =
                this.getOwnerComponent().getRouter();

            oRouter
                .getRoute("RouteOrderDetails")
                .attachPatternMatched(
                    this._onRouteMatched,
                    this
                );
        },


        _onRouteMatched(oEvent) {

            const sOrderId =
                oEvent.getParameter("arguments").orderId;

            const oModel =
                this.getOwnerComponent()
                    .getModel("production");

            const aOrders =
                oModel.getProperty("/orders");

            const oSelectedOrder =
                aOrders.find(
                    oOrder => oOrder.orderId === sOrderId
                );

            if (oSelectedOrder) {

                const iIndex =
                    aOrders.indexOf(oSelectedOrder);

                const sPath =
                    "/orders/" + iIndex;

                this.getView().bindElement({
                    path: sPath,
                    model: "production"
                });
            }
        },


        getStatusState(sStatus) {

            switch (sStatus) {

                case "Running":
                case "AVAILABLE":
                    return "Success";

                case "Delayed":
                case "At Risk":
                    return "Warning";

                case "Down":
                case "SHORTAGE":
                    return "Error";

                case "Completed":
                    return "Success";

                case "In Progress":
                    return "Information";

                default:
                    return "None";
            }
        },


        onNavBack() {

            this.getOwnerComponent()
                .getRouter()
                .navTo("RouteView1");

        }

    });

});