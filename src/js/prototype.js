$.prototype.onerrorimg = function(argument){
	var t =this[0];
	/*debugger ;*/
	if(t.dataset.src2){
		t.onerror=null;
		i = document.createElement('img');
		i.src = t.dataset.src2;
		i="";
		i.onerror = function() {
			t.src = '../img/loader.gif';
		}
		t.src=t.dataset.src2;
	}
	else{
		t.src = '../img/loader.gif';
		/*$(t).css({
			opacity: '0',
		});*/
	}
};

$.prototype.dadd = function(atr){
	atr =atr || 'load'
	$(this).each(function(index, el) {
		$(this).css({
			'background-image': 'url("'+this.dataset.dadd+'")',
		});
		$(this).removeClass('unload');
	});
}

$.prototype.isrich = function(arg){
	if(!this[0] || !arg){
		return false;
	}
	if(arg>=$(this).offset().top ){
		return true;
	}
	return false;
}


$.prototype.rmax = function(){
	var max = 0
	$(this).each(function(index, el) {
		max = $(el).innerHeight() > max? $(el).innerHeight() : max;
	});
	return max;
}

$.prototype.gmap = function(options){
	if (!this[0]) {return}
		options = options || false;
	function coords() {
		if(options.coords){
			for (var i = 0; i < options.coords.length; i++) {
				options.coords[i] = $.extend({lat:46.476331,lan:30.732733,infowindow:'mark'+i},options.coords[i]);
			}
		}
		else{
			return [{lat:46.476331,lan:30.732733,infowindow:'mark'}]
		}
		
		return options.coords;
	}
	function center() {
		var c = {lat:46.476331,lan:30.732733};
		if(options.center){
			options.center = $.extend(options.center,c);
			return options.center;
		}
		else
		{

			return options.coords? {lat:options.coords[0].lat,lan:options.coords[0].lan} : c;
		}
	}
	function icon(){
		return options.icon || '';
	}
	options = {
		coords: coords(),
		center: center(),
		icon: icon()
	}
	var map = new google.maps.Map(this[0], {
		zoom: options.zzoom||16,
		center: new google.maps.LatLng(options.center.lat, options.center.lan),
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		scrollwheel: false
	});
	var marker, i;
	for (i = 0; i < options.coords.length; i++) {  
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(options.coords[i].lat,options.coords[i].lan),
			map: map,
			icon: options.icon|| {
				scaledSize:new google.maps.Size(120, 120),
				anchor: new google.maps.Point(60, 120),
				url:options.url || false
			}
		});
		var infowindow = new google.maps.InfoWindow();
		google.maps.event.addListener(marker,'click', (function(marker,content,infowindow){ 
			return function() {
				infowindow.setContent(content);
				infowindow.open(map,marker);
			};
		})(marker, options.coords[i].infowindow,infowindow));
	}
	return {map:map,marker:marker,options:options };
};

$.prototype.myoutube = function(obj){
	/*
	Волшебный метод который я делал пол дня 
	https://developers.google.com/youtube/iframe_api_reference?hl=ru#Functions 
	*/
	var player,_=this;
	player = new YT.Player(obj, {
		videoId: _[0].dataset.yid,
	});
	return player;
}

/*Slick.prototype.test = function(){
	debugger
}*/