var colors = [
	['#D0E78F', '#F6B759','#EC432E', '#584050', '#2D4C7A', '#9AD2E2'],
	['#C9E8EB', '#54DCE8', '#2792D6', '#254540', '#E0D2D2', '#F3EBE8'],
	['#EEE0C6', '#F0A48A', '#3E3634', '#6A917C', '#A4C9A7', '#CCE6CB'],
	['#E9E7EC', '#F8DEDD', '#FACC74', '#FD8C6A', '#D14747', '#B6D4A2'],
	['#FDC680', '#D9654C', '#68275D', '#422F21', '#6195A0', '#C9C9C9']
];

function randomFrom(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomizeColor($template) {
	var randomColors = colors[randomFrom(0, colors.length - 1)];

	$template('.col-xs-2').each(function(i) {
		$(this).css('background-color', randomColors[i]);
	});
}

Template.colors.rendered = function () {
	randomizeColor(this.$);

	Meteor.setInterval(function() {
		randomizeColor(this.$);
	}, 5000);
};