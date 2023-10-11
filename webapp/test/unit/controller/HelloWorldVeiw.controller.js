/*global QUnit*/

sap.ui.define([
	"comsapfiori/projecthw/controller/HelloWorldVeiw.controller"
], function (Controller) {
	"use strict";

	QUnit.module("HelloWorldVeiw Controller");

	QUnit.test("I should test the HelloWorldVeiw controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
