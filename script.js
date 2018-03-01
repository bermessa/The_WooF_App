
$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors:['page1', 'page2', 'page3'],
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['First page', 'Second page', 'Third and last page']
	});
});