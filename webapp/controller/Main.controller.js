sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel"
        
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller) {
		"use strict";

		return Controller.extend("ns.HTML5Module.controller.Main", {
			onInit: function () {

                 var sServiceUrl = "/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV/";
                var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl);
                 this.getView().setModel(oModel);

                  var oTable  = new sap.ui.model.json.JSONModel("/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV/Products?$format=json");
                 // @ts-ignore
                 this.getView().byId("idProductstable").setModel(oTable);
			}
		});
	});
