/*global QUnit*/

sap.ui.define([
	"ui5app/controller/V1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("V1 Controller");

	QUnit.test("I should test the V1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
