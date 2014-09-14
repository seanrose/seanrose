var colors = [
	['#D0E78F', '#F6B759','#EC432E', '#9AD2E2', '#584050', '#2D4C7A'],
	['#C9E8EB', '#54DCE8', '#2792D6', '#E0D2D2', '#254540', '#F3EBE8'],
	['#EEE0C6', '#F0A48A', '#6A917C', '#A4C9A7', '#CCE6CB', '#3E3634'],
	['#E9E7EC', '#F8DEDD', '#FACC74', '#FD8C6A', '#D14747', '#B6D4A2'],
	['#FDC680', '#D9654C', '#6195A0', '#C9C9C9', '#422F21', '#68275D']
];

function randomFrom(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomizeColor() {
	var randomColors = colors[randomFrom(0, colors.length - 1)];

	$('.color-space').each(function(i) {
		var delay = 500;
		$(this).css('background-color', randomColors[i]).delay(delay * i).fadeIn('slow');
	});
}

Template.colors.rendered = function () {
	randomizeColor();
};
