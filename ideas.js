ideas = [
	{
		"idea": "build a space elevator",
		"description": "build and inflatble space elevator based on nano tube tube technology and inflatble robots",
		"tag": [
		   "#space",
		   "#Lukas"
		]
	},
	
	{
		"idea": "build an AI which will create jobs for humans",
		"description": "When AI takes over the world, we need to build an intelligent",
		"tag": [ 
		"#AI",
		"#jobs",
		"#Jabostain"
		]
	}
]

var read_more = function() {
	$("#description").show()
	$("#read_more").text("\xa0")
}

function debug(message) {
	console.log(message)
}

function loadPage(name) {
	debug("loadPage: "+name);
	clear();
	$("a").removeClass('active')
	$(event.target).addClass('active');
	$('#content').load(name);
	debug("loading")
}

var clear = function() {
	$("#icons").show();
	$("#big_image").hide()
	$("#content").css("width", "800px");
	$("#content").css("text-align", "center");
	$('#small_image').show();
	// $("#content").css("padding-left", "0px");
	// $("#content").css("padding-top", "0px");
}

var home = function() {
	debug("home")
	loadPage("click.html")

	//hide icons and home link
	$('#small_image').hide();
	$("#icons").hide()
	debug("ref")
	debug("ref")
}

var about = function() {
	debug("about")
	loadPage("about.html")
	$("#content").css("text-align", "left");
	// $("#content").css("padding-left", "400px");
	// $("#content").css("padding-top", "100px");
	$("#big_image").show();
	$("#content").css("width", "1000px");
	resize()
}

var get_involved = function() {
	debug("get_involved")
	loadPage("get_involved.html")
}

var faq = function() {
	debug("faq")
	loadPage("faq.html")
	$("#content").css("text-align", "left");
}

var contact = function() {
	debug("contact")
	loadPage("contact.html")
}

var click_click = function() {
	//resize an reposition image
	$('table').show();
	$("#icons").show()
	$("#clickimage").css("margin-top", "50px");
	$("#clickimage").css("margin-bottom", "64px");
	var $img = $("#clickimage")
	$img.width('150px')
	$img.height('150px')

	generate_idea();
	$("#read_more").show()
}

var generate_idea = function() {
	debug("generate_idea")
	number=Math.floor((Math.random() * ideas.length))
	picked_idea = ideas[number]
	$("#idea_title").text(picked_idea["idea"])
	$("#description").text(picked_idea["description"])
	$("#tag").text(picked_idea["tag"].join("\xa0\xa0\xa0"))
	$("#read_more").text("read more...")
	$("#description").hide()
}

var resize = function() {
	var height = $("#big_image").height();
	var width = $("#big_image").width();
	$("#rocket").css("height", height);
	$("#rocket").css("width", width);
}

window.onresize = function() {
	resize()
}

window.onload = function() {
	home();
}
