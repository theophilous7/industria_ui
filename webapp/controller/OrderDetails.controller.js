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

                this.getView().setBindingContext(
                    oModel.createBindingContext(
                        "/orders/" +
                        aOrders.indexOf(oSelectedOrder)
                    ),
                    "production"
                );

            }

        },

        onNavBack() {

            this.getOwnerComponent()
                .getRouter()
                .navTo("RouteView1");

        },



   

    });

});