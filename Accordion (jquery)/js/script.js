$(document).ready(function() {
	$('.container>ul>li>article').not(':first').hide();
	$('.container>ul>li>h1').click(function() {
		var findArticle = $(this).next('article');
		var findWrapper = $(this).closest('.container');
		if (findArticle.is(':visible')) {
			findArticle.slideUp(600);
		} else {
			findWrapper.find('article').slideUp(600);
			findArticle.slideDown(600);
		}
	})
})