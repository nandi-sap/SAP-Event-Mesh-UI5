sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel) {
        "use strict";

        return Controller.extend("ui5app.controller.V1", {
            onInit: function () {
                //get data from HANA Service destination service
                let oModel = new JSONModel();
                let uri = '/emsend';
                let that = this;
                jQuery
                    .ajax({
                        url: uri,
                        type: "GET",
                        dataType: "json",
                        success: function (response) {
                            let data = { hana : ''};
                            data.hana = response;
                            oModel.setData(data);
                            console.log(oModel);
                            that.getView().setModel(oModel,"HANAMODEL");
                        },
                        error: function (err) {
                            
                            console.log(err);
                        }
                    });
            },

            onPush: function (evt) {
                let uri  = '/push';
                let that = this;
                let data = { "ID":'',"DATA":'',"Comments":''};
                data.ID        = this.getView().byId("ID").getValue();
                data.DATA      = this.getView().byId("DATA").getValue();
                data.Comments  = this.getView().byId("Comments").getValue();
                jQuery
                    .ajax({
                        url: uri,
                        type: "POST",
                        dataType: "json",
                        data: data,
                        success: function (response) {
                            
                            console.log(response);
                        },
                        error: function (err) {
                            
                            console.log(err);
                        }
                    });
            },
            onPress: function (evt) {
                
                let uri = '/emsend';
                let that = this;
                jQuery
                    .ajax({
                        url: uri,
                        type: "GET",
                        dataType: "json",
                        success: function (response) {
                            let oModel  = that.getView().getModel("HANAMODEL");
                            let data    = { hana : ''};
                            data.hana   = response;
                            
                            oModel.setData(data);
                            console.log(oModel);
                           // that.getView().setModel(oModel,"HANAMODEL");
                        },
                        error: function (err) {
                            
                            console.log(err);
                        }
                    });
            }
        });
    });
