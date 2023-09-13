function goGoogle() {
document.write('<span id="google_search">');
var cx = "000708056221598449280:s2l0dvomcn0";
var gcse = document.createElement("script");
gcse.type = "text/javascript";
gcse.async = true;
gcse.src = (document.location.protocol == "https:" ? "https:" : "http:") +
"//www.google.com/cse/cse.js?cx=" + cx;
var s = document.getElementsByTagName("script")[0];
s.parentNode.insertBefore(gcse, s);
document.write('<gcse:search></gcse:search></span>');
}

function writeHeader() {

var header = '<div id = "header_wrapper">';
header += '<div id="header" itemscope itemtype="//schema.org/book">';
var google = '<span style="width:400px; float:right;">';


header += '<a class="nostyle" href="//www.probabilitycourse.com"><img  src="//www.probabilitycourse.com/images/Template/logo_probability_website.png" id="logo_image" /></a>';

header += '</a>';
header += '</div>';
header += '<div id ="google_bar">';

var htmlText = '</div>';
htmlText += '</div>';

htmlText += '<div id="mobile_menu_left">';
htmlText += '<button id="menu_button" class ="toggle_chapters">Chapters</button>';
htmlText += '</div>';
htmlText += '<div id="mobile_menu_right">';
htmlText += '<button id="menu_button" class ="toggle_menu">Menu</button>';
htmlText += '</div>';


htmlText += '<div id="navigation">';
htmlText += '<div id="left">';
htmlText += '<ul>';
htmlText += '<li><a href="//www.probabilitycourse.com/">HOME</a></li>';
htmlText += '<li><a href="//www.probabilitycourse.com/videos/videos.php">VIDEOS</a></li>';
htmlText += '<li><a href="//www.probabilitycourse.com/calculator/calculator.php">CALCULATOR</a></li>';
htmlText += '<li><a href="//www.probabilitycourse.com/comments.php">COMMENTS</a></li>';
htmlText += '<li><a href="//www.probabilitycourse.com/courses.php">COURSES</a></li>';



document.write(header);
goGoogle();
document.write(htmlText);
}

writeHeader();
