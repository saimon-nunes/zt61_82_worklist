/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"zt6182worklist/zt6182worklist/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});