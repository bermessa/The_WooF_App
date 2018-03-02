
$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors:['page1', 'page2', 'page3', 'page4', 'page5'],
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['First page', 'Second page', 'Third and last page']
	});
});