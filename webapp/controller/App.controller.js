sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], function (Controller, MessageToast, JSONModel, ResourceModel) {
    "use strict"
    return Controller.extend("sap.ui.demo.walkthrough.App", {
        onOpenDialog: function () {
            this.getOwnerComponent().openHelloDialog();
        }
    });
});