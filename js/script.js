$(document).ready(function(){
	var items = $("#gallery li");
	var itemsByTags = {};
	
	items.each(function(i){
		var element = $(this);
		var tags = element.data('tags').split(",");
		
		//add attribute for quicksand
		element.attr('data-id', i);
		
		$.each(tags, function(key, value){
			value = $.trim(value);
			if (!(value in itemsByTags)) {
				itemsByTags[value] = [];
			}
			
			itemsByTags[value].push(element);
		});
	});
	
	createList("All Items", items);
	
	$.each(itemsByTags, function(key, value){
		createList(key, value);
	});
	
	$("#navbar a").on('click', function(e){
		var link = $(this);
		
		link.addClass("active").siblings().removeClass("active");
		
		$("#gallery").quicksand(link.data("list").find("li"));
		e.preventDefault();
	});
	
	$("#navbar a:first").click();
	
	function createList(text, items){
		var ul = $("<ul>",{"class":"hidden"});
		
		$.each(items, function(){
			$(this).clone().appendTo(ul);
		});
		
		ul.appendTo("#gallery");
		
		var a = $("<a>", {
			html: text,
			href: "#",
			data: {list:ul}
		}).appendTo("#navbar");
	}
	
	$(".fancybox").fancybox();
});