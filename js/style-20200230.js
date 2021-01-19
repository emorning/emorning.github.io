+ function($) {
	var $liCur = $(".header-nav ul li.cur"),
		curW = $('.header li.cur a span').outerWidth(true),
		$slider = $(".curline");
	if (typeof($(".header-nav ul li.cur").find('span').position()) == 'undefined') {
		var curP = ''
	} else {
		curP = $liCur.find('span').position().left
	}
	$slider.animate({
		"left": curP,
		"width": curW
	});

	$('.header-nav li').mouseenter(function() {

		var $_parent = $(this).find('span'),

			_width = $_parent.outerWidth(true),

			posL = $_parent.position().left;

		$slider.stop(true, true).animate({
			"left": posL,
			"width": _width
		}, "fast");

	});



}(jQuery);

// === 二级导航下拉 ===
+
function($) {

	/*重新写的展开代码 最简单的方式*/
	$('.clearfix>li').hover(function() {
		$(this).siblings().find('.slide-menu').hide();
		$(this).find('.slide-menu').stop().slideDown(300);
	}, function() {
		$('.slide-menu').stop().slideUp(200);
	})

	/*电商首页动画效果*/
	$('.ipb2-con>a').hover(function() {

		$(this).find('.ipb2-b2-t2').addClass('blub')
		$(this).find('.ipb2-b1-1').removeClass('hideBox')
		$(this).find('.ipb2-b1-1').addClass('showox')
		$(this).find('.ipb2-con-item').addClass('wbg')

	}, function() {
		$(this).find('.ipb2-b2-t2').removeClass('blub')
		$(this).find('.ipb2-b1-1').removeClass('showox')
		$(this).find('.ipb2-b1-1').addClass('hideBox')
		$(this).find('.ipb2-con-item').removeClass('wbg')

	})


}(jQuery);


//  === 二级导航的菜单切换事件 ===
$('.menu-list').mouseenter(function(event) {

	var menu = $(this).data('menu');

	$(this).addClass('cur').parents('.menu-left').find('.menu-list').not(this).removeClass('cur');

	$('#menu-' + menu + '').addClass('act').siblings('.menu-abstract').removeClass('act');
});


// === 电商产品服务 ===
$('.product-server .item-inner').hover(function() {

	var data = $(this).data('item');

	if (data == 'top') {

		$(this).addClass('animation-top');

		$(this).parent('.item').addClass('show');

	}

	if (data == 'bottom') {

		$(this).addClass('animation-bottom');

		$(this).parent('.item').addClass('show');
	}


}, function() {

	$(this).removeClass('animation-top animation-bottom');

	$(this).parent('.item').removeClass('show');

});

// === 产品与服务tab切换===
$('.ser_tab_item').click(function() {
	var index = $(this).attr('data-index')
	$(this).addClass('active').siblings('.ser_tab_item').removeClass('active')
	if (index == 1) {
		$('.service_bottom.two').hide()
		$('.service_bottom.one').show()
		$(this).children('img').attr('src', '/assets/updataImg/service1.png')
		$('.ser_tab_item').eq(1).children('img').attr('src', '/assets/updataImg/service2.png')
	} else if (index == 2) {
		$('.service_bottom.one').hide()
		$('.service_bottom.two').show()
		$(this).children('img').attr('src', '/assets/updataImg/service4.png')
		$('.ser_tab_item').eq(0).children('img').attr('src', '/assets/updataImg/service3.png')
	}
})

// === 首页平台特色tab切换 ====
$('.tab-button').click(function() {

	var tab = $(this).data('tab')

	$(this).addClass('cur').siblings('.tab-button').removeClass('cur');

	$('#tab-' + tab + '').addClass('active').siblings('.tab-item').removeClass('active');


});


// === 首页电商资讯，新闻列表切换 ====
$('.information-tab .article-list').hover(function() {

	$(this).addClass('current').siblings('.article-list').removeClass('current');

}, function() {

	$(this).parent('.information-right').find('.article-list:first-of-type').addClass('current').siblings(
		'.article-list').removeClass('current');


});


// ===  所有页面的滚动事件 ===
$(document).bind('scroll', function() {

	var scrollH = $(this).scrollTop();
	// console.log(scrollH)
	//顶部导航浮动
	if ($('.page-top').length > 0) {

		var topBarH = $('.top-bar').height();

		var pageTopH = $('.page-top').height();

		var clientHeight = $(window).height();

		var offsetHeight = $(document).height();


		if (scrollH >= topBarH && offsetHeight - clientHeight > topBarH) {

			$('.page-top').removeClass('index-page-top');

			$('.header').addClass('fixed');
			// if(location.href.match('product') || location.href.match('p-') || location.href.match('service') || location.href.match('case/')){
			$('.header-content').css('background-color', 'rgba(0, 0, 0, 0.5);')
			// }

		} else {

			if ($('.page-top').data('nav') === 'index') {

				$('.page-top').addClass('index-page-top');
			}

			$('.header').removeClass('fixed');
			// if(location.href.match('product') || location.href.match('p-') || location.href.match('service') || location.href.match('case/')){
			$('.header-content').css('background', 'none')
			// }
		}
		// 客户案例页面添加固定导航样式
		if (scrollH >= 176) {
			$('.tab-width').addClass('fixed')
		} else {
			$('.tab-width').removeClass('fixed')
		}

	}

	//电商运营-右侧浮动
	if ($('.operate-right').length > 0) {

		var leftH = $('.operate-left').outerHeight(true);

		var rightH = $('.operate-right-inner').outerHeight(true);

		var domH = $(document).height();

		var winH = $(window).height();

		var leftT = $('.operate-left').offset().top;

		var rightT = $('.operate-right').offset().top;

		var footH = $('.footer-layout').height();

		if (leftH >= rightH) {

			if (scrollH - rightT >= rightH - winH + 80 && scrollH <= leftH - winH + leftT + 80) {

				console.log(1)

				$('.operate-right-inner').addClass('fixed').css({
					'bottom': '60px'
				})

			} else if (scrollH >= leftH - winH + leftT + 80 && scrollH - rightT >= rightH - winH + 80) {

				console.log(2)

				$('.operate-right-inner').addClass('fixed').css({

					'bottom': (scrollH + footH + 110) - (domH - winH)
				});

			} else if (scrollH - rightT <= rightH - winH + 80) {

				console.log(3)

				$('.operate-right-inner').removeClass('fixed').css({
					'bottom': '0'
				})

			}

		}
	}



});


//电商运营
//电商头条文章
$('.detail-lists').hover(function() {

	$(this).addClass('active').siblings().removeClass('active');

});


//电商运营-tab切换
$('.tab-link').mouseover(function() {

	var tab = $(this).data('tab');

	var type = $(this).parent().data('type');

	if (type == 'hover') {

		$(this).addClass('active').siblings().removeClass('active');

		$('#tab-' + tab + '').addClass('active').siblings().removeClass('active');
	}

});

// 电商运营-滚动加载


//关于我们tab翻页
$('#about-tab .tab-button').click(function() {

	var tab = $(this).data('tab');

	var distance = $('#' + tab + '-layout').offset().top;

	var navH = $('.header').height();

	$(window).scrollTop(distance - (navH * 2));

});


//需求提交表单



//回到顶部
$('#scrollTop').click(function() {

	$(document).scrollTop(0);

});


$(function() {

	var winH = $(window).height();

	var bannerH = $('.index-banner').height();

	//subnav.hide();

	if (winH <= bannerH) {

		$('.index-banner').css('height', winH);

	}

	if ($('.swiper-wrapper .swiper-slide').length <= 1) {

		// $('.swiper-button').hide();

	}


	// 选中标签
	$('.all_label label').click(function() {
		$(this).addClass('active').siblings('label').removeClass('active')
	})

});

