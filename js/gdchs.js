/**
 * Common js for GDCHS
 * License: GPL 2.0
 * Author: Sun Junwen
 */

var curUrl = window.location.href;

var secondLevPath = ["material-design/", "what-is-material/", "animation/", "style/", "layout/", "components/", "patterns/", "usability"];
var secondLevPathCount = secondLevPath.length;

var responsibleHeader = true;

// Menu Setup
var menuContent = [
	[{
			text : "Material Design",
			url : ""
		}, {
			text : "介绍",
			url : "material-design/introduction.html"
		}
	], [{
			text : "什么是质感设计？",
			url : ""
		}, {
			text : "环境",
			url : "what-is-material/environment.html"
		}, {
			text : "材质属性",
			url : "what-is-material/material-properties.html"
		}, {
			text : "3维世界的物体",
			url : "what-is-material/objects-in-3d-space.html"
		}
	], [{
			text : "动画效果",
			url : ""
		}, {
			text : "Authentic Motion",
			url : "animation/authentic-motion.html"
		}, {
			text : "Responsive Interaction",
			url : "animation/responsive-interaction.html"
		}, {
			text : "Meaningful Transitions",
			url : "animation/meaningful-transitions.html"
		}, {
			text : "Delightful Details",
			url : "animation/delightful-details.html"
		}
	], [{
			text : "样式",
			url : ""
		}, {
			text : "色彩",
			url : "style/color.html"
		}, {
			text : "字体",
			url : "style/typography.html"
		}, {
			text : "图标",
			url : "style/icons.html"
		}, {
			text : "图像化",
			url : "style/imagery.html"
		}
	], [{
			text : "布局",
			url : ""
		}, {
			text : "设计原则",
			url : "layout/layout-principles.html"
		}, {
			text : "标尺和基线",
			url : "layout/metrics-and-keylines.html"
		}, {
			text : "结构",
			url : "layout/structure.html"
		}
	], [{
			text : "基本元素",
			url : ""
		}, {
			text : "Bottom Sheets",
			url : "components/bottom-sheets.html"
		}, {
			text : "Buttons",
			url : "components/buttons.html"
		}, {
			text : "Cards",
			url : "components/cards.html"
		}, {
			text : "Chips",
			url : "components/chips-tokens.html"
		}, {
			text : "Dialogs",
			url : "components/dialogs.html"
		}, {
			text : "Dividers",
			url : "components/dividers.html"
		}, {
			text : "Grids",
			url : "components/grids.html"
		}, {
			text : "Lists",
			url : "components/lists.html"
		}, {
			text : "List controls",
			url : "components/list-controls.html"
		}, {
			text : "Menus",
			url : "components/menus.html"
		}, {
			text : "Progress and Activity",
			url : "components/progress-activity.html"
		}, {
			text : "Sliders",
			url : "components/sliders.html"
		}, {
			text : "Snackbars and Toasts",
			url : "components/snackbars-and-toasts.html"
		}, {
			text : "Subheaders",
			url : "components/subheaders.html"
		}, {
			text : "Switches",
			url : "components/switches.html"
		}, {
			text : "Tabs",
			url : "components/tabs.html"
		}, {
			text : "Text fields",
			url : "components/text-fields.html"
		}, {
			text : "Tooltips",
			url : "components/tooltips.html"
		}
	], [{
			text : "模式",
			url : ""
		}, {
			text : "Selection",
			url : "patterns/color.html"
		}, {
			text : "Gestures",
			url : "patterns/gestures.html"
		}, {
			text : "Promoted Actions",
			url : "patterns/promoted-actions.html"
		}, {
			text : "Settings",
			url : "patterns/settings.html"
		}, {
			text : "Imagery Treatment",
			url : "patterns/imagery-treatment.html"
		}, {
			text : "Search",
			url : "patterns/search.html"
		}
	], [{
			text : "可用性",
			url : ""
		}, {
			text : "Accessibility",
			url : "usability/accessibility.html"
		}
	]
];

function replaceAll(str, find, replace) {
	return str.replace(new RegExp(find, 'g'), replace);
}

function fillMenu() {
	var i = 0,
	j = 0;
	var menuCont = $("#menuGrid");
	var curPage = curUrl.split("/");
	curPage = curPage[curPage.length - 1]; // *.html
	if (curPage.search(".html") == -1) {
		curPage = "index.html"; // fix default page.
	}
	var idx = -1;
	idx = curPage.indexOf("#");
	if (idx != -1) {
		curPage = curPage.substring(0, idx);
	}
	idx = curPage.indexOf("?");
	if (idx != -1) {
		curPage = curPage.substring(0, idx);
	}
	for (i = 0; i < secondLevPathCount; ++i) {
		if (curUrl.search(secondLevPath[i]) != -1) {
			curPage = secondLevPath[i] + curPage;
		}
	}

	var firstLevCount = menuContent.length;

	for (i = 0; i < firstLevCount; ++i) {
		var foldingList = $("<div/>");
		foldingList.addClass("divListwHeader");
		foldingList.addClass("foldingList");

		var listCont = $("<ul/>");
		listCont.addClass("foldingContainer");

		var secondLevMenu = menuContent[i];
		var secondLevCount = secondLevMenu.length;
		for (j = 0; j < secondLevCount; ++j) {
			var menuItem = secondLevMenu[j];
			var menuUrl = menuItem.url;

			if (curPage.search("/") != -1) {
				menuUrl = "../" + menuUrl;
			}

			var link = $("<a/>");
			link.attr("href", menuUrl);
			link.html(menuItem.text);

			if (curPage == menuItem.url) {
				// current page
				foldingList.addClass("initShow");
				link.addClass("highlight");
			}

			if (j == 0) {
				// menu header
				var listHeader = $("<div/>");
				listHeader.addClass("trigger");
				listHeader.html(menuItem.text);
				foldingList.append(listHeader);
			} else {
				var linkCont = $("<li/>");
				linkCont.append(link);
				listCont.append(linkCont);
			}
		}

		foldingList.append(listCont);
		menuCont.append(foldingList);
	}

	menuCont.append($("<br/>").addClass("clear"));
}

function menuFooterFix() {
	var windowHeight = $(window).height();

	var navGrid = $("#navWrapper #navGrid");
	var menuGrid = $("#navWrapper #navGrid #menuGrid");
	var menuGridHeight = menuGrid.height();

	//console.log("menuGridHeight + 160 " + menuGridHeight);
	//console.log("windowHeight " + windowHeight);
	if (menuGridHeight + 162 < windowHeight) {
		navGrid.css("height", windowHeight + "px");
	} else {
		navGrid.css("height", menuGridHeight + 162 + "px");
	}
}

function menuFix() {
	var scrollLeftPos = (window.pageXOffset ||
		document.body.scrollLeft ||
		document.documentElement.scrollLeft);
	var windowWidth = $(window).width();

	var body = $("body");
	var navWrapper = $("#navWrapper");

	if (windowWidth >= 1364) {
		// normal
		body.addClass("normalNav");
		body.removeClass("drawerNav");

		navWrapper.removeAttr("style");

		var mask = $("#mask");
		if (mask.length) {
			mask.remove();
		}
	} else {
		// drawer
		body.removeClass("normalNav");
		body.addClass("drawerNav");

	}

}

function headerFix() {
	var scrollTopPos = (window.pageYOffset ||
		document.body.scrollTop ||
		document.documentElement.scrollTop);
	var windowWidth = $(window).width();

	var body = $("body");
	var header = $("#header");
	var headerTitle = $("#header a");

	if (!responsibleHeader) {
		// Just fix width
		if (body.hasClass("normalNav")) {
			header.css("width", windowWidth - 240 + "px");
		} else {
			header.css("width", windowWidth + "px");
		}

		headerTitle.removeClass("normalTitle");
		headerTitle.addClass("fixedTitle");

		var content = $("#content");
		content.css("paddingTop", "64px");

		return;
	}

	// header
	if (scrollTopPos < 192) {
		// normal
		body.addClass("normalHeader");
		body.removeClass("fixedHeader");
		header.removeAttr("style");
	} else {
		// fixed
		body.removeClass("normalHeader");
		body.addClass("fixedHeader");
		if (body.hasClass("normalNav")) {
			header.css("width", windowWidth - 240 + "px");
		} else {
			header.css("width", windowWidth + "px");
		}
	}

	// title
	if (scrollTopPos < 115) {
		// normal
		headerTitle.addClass("normalTitle");
		headerTitle.removeClass("fixedTitle");
	} else {
		// fixed
		headerTitle.removeClass("normalTitle");
		headerTitle.addClass("fixedTitle");
	}
}

function toggleMenu() {
	var navWrapper = $("#navWrapper");

	if (navWrapper.is(":visible")) {
		navWrapper.animate({
			width : "hide"
		}, 100);

		var mask = $("#mask");
		if (mask.length) {
			mask.hide();
		}
	} else {
		navWrapper.animate({
			width : "show"
		}, 100);
		//navWrapper.show();

		var body = $("body");
		var mask = $("#mask");
		if (mask.length == 0) {
			mask = $("<div/>").attr("id", "mask");
			mask.click(toggleMenu);
			body.append(mask);
		}

		mask.show();
	}
}

function initMenu() {
	fillMenu();

	jqFolding.setup({
		initState : "hide",
		toggleCallback : menuFooterFix
	});
	jqFolding.init();

	var navButton = $("#header #navButton");
	navButton.click(toggleMenu);

	// Menu position fix
	window.onscroll = function () {
		menuFix();
		headerFix();
	}
	window.onresize = function () {
		menuFix();
		headerFix();
		menuFooterFix();
	}

	menuFix();
	headerFix();
	menuFooterFix();
}

// Acronym tooltip
var tooltipDiv = 0;
function initTooltip() {
	if ($.browser.msie && parseInt($.browser.version, 10) < 9) {
		// put an ad of firefox for old version IE
		var ffAdWrapper = $('<div/>');
		ffAdWrapper.addClass('divListwHeader').addClass('foldingList');
		var ffAd = $('<div/>').addClass('trigger');
		ffAd.html("<a target='_blank' href='//affiliates.mozilla.org/link/banner/29664'><img src='//affiliates.mozilla.org/media/uploads/banners/07a7168b3e66be69074c8a3b2e072b0a9e1fd3b2.png' alt='下載：更快、更棒、更好玩' /></a>");
		ffAdWrapper.append(ffAd);
		ffAdWrapper.insertBefore('#navWrapper > br.clear');
		return; // do nothing on acronym
	}

	$('acronym').hover(function () {
		var acronymLeft = this.offsetLeft;
		var acronymTop = this.offsetTop;
		var acronymTitle;
		if ($(this).attr('title')) {
			acronymTitle = $(this).attr('title');
			$(this).removeAttr('title');
			// fix escape
			acronymTitle = replaceAll(acronymTitle, "&", "&amp;");
			$(this).attr('titlex', acronymTitle);
		}
		acronymTitle = $(this).attr('titlex');

		if (tooltipDiv == 0) {
			tooltipDiv = $('<div/>');
			tooltipDiv.hide();
			tooltipDiv.addClass('tooltip');

			$('#content').append(tooltipDiv);
		}

		tooltipDiv.css('left', acronymLeft + 'px');
		tooltipDiv.css('top', (acronymTop + 25) + 'px');

		tooltipDiv.html(acronymTitle);
		tooltipDiv.show();
	}, function () {
		if (tooltipDiv != 0) {
			tooltipDiv.hide();
		}
	});
}

// footer
var footerLines = ["如无特别说明，所有内容按照 <a href=\"http://creativecommons.org/licenses/by/2.5/\" target=\"_blank\">Creative Commons Attribution 2.5</a> 协议授权&nbsp;|&nbsp;感谢&nbsp;<a href=\"http://www.topfun.us\" target=\"_blank\">topfun</a>&nbsp;<a href=\"http://www.freemindworld.com\" target=\"_blank\">lifanxi</a>&nbsp;友情支持<br />基于 <a href=\"http://developer.android.com/design/index.html\" target=\"_blank\">Android Design</a> 翻译而成&nbsp;|&nbsp;部分图片和设计样式来自于 <a href=\"http://developer.android.com/design/index.html\" target=\"_blank\">Android Design</a>&nbsp;|&nbsp;Android 是 Google Inc. 的商标",
	"<ul class=\"mirrorList\"><li class=\"epubDuokan\"><a class=\"mirrorDuokan\" href=\"http://www.duokan.com/book/47790\" title=\"购买多看版电子书 ￥1.99\" target=\"_blank\"></a></li><li><a class=\"mirrorGithub\" href=\"http://adchs.github.io/\" title=\"访问 GitHub 镜像\" target=\"_blank\"></a></li><li><a class=\"mirrorApkbus\" href=\"http://www.apkbus.com/design/\" title=\"访问 APKBUS 镜像\" target=\"_blank\"></a></li><li><a class=\"mirrorSegfault\" href=\"http://mirrors.segmentfault.com/adchs/\" title=\"访问 segmentfault 镜像\" target=\"_blank\"></a></li></ul><div class=\"clear\"></div>",
	"2012-2014&nbsp;|&nbsp;<a href=\"http://www.sunjw.us/blog\" target=\"_blank\">Sun Junwen</a>&nbsp;-&nbsp;sunjw8888 at gmail.com&nbsp;&nbsp;<a href=\"http://weibo.com/nusjw\" target=\"_blank\" title=\"Follow me on Weibo\" class=\"imgLink\"><img src=\"../imgs/weibo-gray-16.png\" alt=\"Follow me on Weibo\"/></a>&nbsp;<a href=\"http://www.twitter.com/sunjw\" target=\"_blank\" title=\"Follow me on Twitter\" class=\"imgLink\"><img src=\"../imgs/twitter-gray-16.png\" alt=\"Follow me on Twitter\"/></a>&nbsp;|&nbsp;<a href=\"http://www.zhangzhibo.net/\" target=\"_blank\">Zhang Zhibo</a>&nbsp;-&nbsp;casparz at gmail.com&nbsp;&nbsp;<a href=\"http://weibo.com/icaspar\" target=\"_blank\" title=\"Follow me on Weibo\" class=\"imgLink\"><img src=\"../imgs/weibo-gray-16.png\" alt=\"Follow me on Weibo\"/></a>&nbsp;<a href=\"http://www.twitter.com/imcaspar/\" target=\"_blank\" title=\"Follow me on Twitter\" class=\"imgLink\"><img src=\"../imgs/twitter-gray-16.png\" alt=\"Follow me on Twitter\"/></a>&nbsp;|&nbsp;<a href=\"http://www.sunjw.us/jstoolnpp/\" target=\"_blank\">JSToolNpp</a><br/><br/><g:plusone size=\"large\"></g:plusone>"];

function fillFooter() {
	var footerCont = $("#footer .contentGrid");
	var i = 0;

	var lines = footerLines.length;

	for (i = 0; i < lines; ++i) {
		var line = footerLines[i];
		var lineCont = $("<div/>");
		lineCont.html(line);
		if (i + 1 == lines) {
			lineCont.addClass("lastLine");
		}

		footerCont.append(lineCont);
	}

	var curMirror = location.href;
	if (curMirror.indexOf("adchs.github.io") >= 0) {
		$(".mirrorGithub").addClass("curMirror");
	} else if (curMirror.indexOf("apkbus.com") >= 0) {
		$(".mirrorApkbus").addClass("curMirror");
	} else if (curMirror.indexOf("segmentfault.com") >= 0) {
		$(".mirrorSegfault").addClass("curMirror");
	}

	var imgCache1 = new Image();
	var imgCache2 = new Image();
	imgCache1.src = "../imgs/twitter-color-16.png";
	imgCache2.src = "../imgs/weibo-color-16.png";

	$("#footer a.imgLink").hover(function () {
		var img = $(this).find("img");
		var src = img.attr("src");
		src = replaceAll(src, "gray", "color");
		img.attr("src", src);
	}, function () {
		var img = $(this).find("img");
		var src = img.attr("src");
		src = replaceAll(src, "color", "gray");
		img.attr("src", src);
	});
}

// Init
$(function () {
	var body = $("body");
	if (body.hasClass("fixedHeader")) {
		responsibleHeader = false;
	}

	initMenu();

	// Auto play video
	$('video.clickPlay').click(function () {
		$(this).get(0).load();
		$(this).get(0).play();
	});

	initTooltip();

	//fillFooter();
});

// Google Analytics
/*var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-5927560-6']);
_gaq.push(['_trackPageview']);

(function () {
var ga = document.createElement('script');
ga.type = 'text/javascript';
ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(ga, s);
})();*/

(function () {
	var po = document.createElement('script');
	po.type = 'text/javascript';
	po.async = true;
	po.src = 'https://apis.google.com/js/plusone.js';
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(po, s);
})();
