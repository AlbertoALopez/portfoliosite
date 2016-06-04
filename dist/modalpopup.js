$(function () {
	console.log('ready');
	$("#dialog").dialog({
		width: 400,
		height: 300,
		dialogClass: "no-close",
		modal: true,
		hide: {
			effect: "slide",
			duration: 1000
		},
		buttons: [{
			text: "View in browser",
			icons: {
				primary: "ui-icon-close"
			},
			click: function() {
				$(this).dialog("close");
			}
		}]
	});
});
