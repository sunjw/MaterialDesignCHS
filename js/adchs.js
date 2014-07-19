/**
 * Common js for ADCHS
 * License: GPL 2.0
 * Author: Sun Junwen
 */

var curUrl = window.location.href;

var secondLevPath = ["building-blocks/", "material-design/", "patterns/", "style/"];
var secondLevPathCount = secondLevPath.length;

// Menu Setup
var menuContent = [
	[{
			text : "开始",
			url : "material-design/xx"
		}, {
			text : "视觉创意",
			url : "material-design/introduction.html"
		}, {
			text : "设计原则",
			url : "get-started/principles.html"
		}, {
			text : "UI 概览",
			url : "get-started/ui-overview.html"
		}
	], [{
			text : "风格",
			url : "style/index.html"
		}, {
			text : "设备和显示",
			url : "style/devices-displays.html"
		}, {
			text : "主题",
			url : "style/themes.html"
		}, {
			text : "触摸反馈",
			url : "style/touch-feedback.html"
		}, {
			text : "度量单位和网格",
			url : "style/metrics-grids.html"
		}, {
			text : "字体",
			url : "style/typography.html"
		}, {
			text : "颜色",
			url : "style/color.html"
		}, {
			text : "图标",
			url : "style/iconography.html"
		}, {
			text : "自我标识",
			url : "style/branding.html"
		}, {
			text : "写作风格",
			url : "style/writing.html"
		}
	], [{
			text : "模式",
			url : "patterns/index.html"
		}, {
			text : "Android 新特性",
			url : "patterns/new.html"
		}, {
			text : "手势",
			url : "patterns/gestures.html"
		}, {
			text : "应用结构",
			url : "patterns/app-structure.html"
		}, {
			text : "导航",
			url : "patterns/navigation.html"
		}, {
			text : "操作栏",
			url : "patterns/actionbar.html"
		}, {
			text : "导航抽屉",
			url : "patterns/navigation-drawer.html"
		}, {
			text : "多视图布局",
			url : "patterns/multi-pane-layouts.html"
		}, {
			text : "滑动视图",
			url : "patterns/swipe-views.html"
		}, {
			text : "全屏模式",
			url : "patterns/fullscreen.html"
		}, {
			text : "选择",
			url : "patterns/selection.html"
		}, {
			text : "确认和提示",
			url : "patterns/confirming-acknowledging.html"
		}, {
			text : "通知",
			url : "patterns/notifications.html"
		}, {
			text : "小部件",
			url : "patterns/widgets.html"
		}, {
			text : "设置",
			url : "patterns/settings.html"
		}, {
			text : "帮助",
			url : "patterns/help.html"
		}, {
			text : "兼容性",
			url : "patterns/compatibility.html"
		}, {
			text : "无障碍性",
			url : "patterns/accessibility.html"
		}, {
			text : "纯粹的 Android",
			url : "patterns/pure-android.html"
		}
	], [{
			text : "控件",
			url : "building-blocks/index.html"
		}, {
			text : "标签选项卡",
			url : "building-blocks/tabs.html"
		}, {
			text : "列表",
			url : "building-blocks/lists.html"
		}, {
			text : "网格列表",
			url : "building-blocks/grid-lists.html"
		}, {
			text : "滚动容器",
			url : "building-blocks/scrolling.html"
		}, {
			text : "下拉菜单 (Spinners)",
			url : "building-blocks/spinners.html"
		}, {
			text : "按钮",
			url : "building-blocks/buttons.html"
		}, {
			text : "文本框",
			url : "building-blocks/text-fields.html"
		}, {
			text : "滑块",
			url : "building-blocks/seek-bars.html"
		}, {
			text : "进度条和活动指示器",
			url : "building-blocks/progress.html"
		}, {
			text : "开关",
			url : "building-blocks/switches.html"
		}, {
			text : "对话框",
			url : "building-blocks/dialogs.html"
		}, {
			text : "选择器",
			url : "building-blocks/pickers.html"
		}
	]
];

function replaceAll(str, find, replace) {
	return str.replace(new RegExp(find, 'g'), replace);
}

function fillMenu() {
	var i = 0,
	j = 0;
	var menuCont = $("#navWrapper");
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
				listHeader.append(link);
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

function menuFix() {
	var scrollLeftPos = (window.pageXOffset ||
		document.body.scrollLeft ||
		document.documentElement.scrollLeft);
	var windowWidth = $(window).width();

	var body = $("body");
	var navWrapper = $("#navWrapper");
	var content = $("#content");

	if (windowWidth >= 1364) {
		// normal
		body.addClass("normalNav");
		body.removeClass("drawerNav");

		navWrapper.removeAttr("style");
		content.removeAttr("style");

		var mask = $("#mask");
		if (mask.length) {
			mask.remove();
		}
	} else {
		// drawer
		body.removeClass("normalNav");
		body.addClass("drawerNav");

		content.css("marginLeft", windowWidth - 1124 + "px");
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
		initState : "hide"
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
	}
	menuFix();
	headerFix();
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
	initMenu();

	// Auto play video
	$('video.clickPlay').click(function () {
		$(this).get(0).load();
		$(this).get(0).play();
	});

	initTooltip();

	fillFooter();
});

// Google Analytics
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-5927560-6']);
_gaq.push(['_trackPageview']);

(function () {
	var ga = document.createElement('script');
	ga.type = 'text/javascript';
	ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(ga, s);
})();

(function () {
	var po = document.createElement('script');
	po.type = 'text/javascript';
	po.async = true;
	po.src = 'https://apis.google.com/js/plusone.js';
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(po, s);
})();
