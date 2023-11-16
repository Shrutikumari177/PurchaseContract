sap.ui.define([
    "sap/ui/core/mvc/Controller",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("project1.controller.View1", {
            onInit: function () {
                // var table_data=this.getView().byId("table")
                // console.log(table_data);
            },
            onPress:function() {
                console.log("hello");
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteView2");
            }

           
        });
    });
