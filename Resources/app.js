// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Home',
    backgroundImage:'bookshelf.png',
    orientationModes : [
	Titanium.UI.LANDSCAPE_LEFT,
	Titanium.UI.LANDSCAPE_RIGHT,
	]
});
win1.hideNavBar();
var tab1 = Titanium.UI.createTab({  
    icon:'homeicon1.png',
    title:'Home',
    window:win1
});

var button = Titanium.UI.createImageView({
	image: "book.png",
	height:190,
	width:70,
	top:150,
	left:175
});
win1.add(button);
button.addEventListener("click", function(e){
		var window = Ti.UI.createWindow({
			url:"mock.js",
            hasChild:false,
            modal:true,
            orientationModes : [
			Titanium.UI.LANDSCAPE_LEFT,
			Titanium.UI.LANDSCAPE_RIGHT,
			]
		});
		window.open({
    	//modal:true,
    	transition:Ti.UI.iPhone.AnimationStyle.CURL_UP	
		})
});

var button2 = Titanium.UI.createImageView({
	image: "book2icon.png",
	height:190,
	width:70,
	top:150,
	left:325
});
win1.add(button2);
button2.addEventListener("click", function(e){
		var window = Ti.UI.createWindow({
			url:"viewedit.js",
            hasChild:false,
            modal:true
		});
		window.open({
    	//modal:true,
    	transition:Ti.UI.iPhone.AnimationStyle.CURL_UP	
		})
});



//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'RSS',
    backgroundColor:'white',
    //url:'image_scaling.js',
    url:'xml_rss.js'
});
var tab2 = Titanium.UI.createTab({  
    icon:'rssicon.png',
    title:'RSS',
    window:win2
});



win2.orientationModes = [
	Titanium.UI.LANDSCAPE_LEFT,
	Titanium.UI.LANDSCAPE_RIGHT,
]; 

var win3 = Titanium.UI.createWindow({  
    title:'Bulletin Board',
    backgroundImage:"bullboard.png"
});
win3.hideNavBar();

var tab3 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Bulletin Board',
    window:win3
});


var win4 = Titanium.UI.createWindow({  
    title:'Shop',
    backgroundImage:'shopPage.png'
});
var tab4 = Titanium.UI.createTab({  
    icon:'shopicon.png',
    title:'Shop',
    window:win4
});
win4.hideNavBar();

var win5 = Titanium.UI.createWindow({  
    title:'Post',
    backgroundImage:'postpage.png',
});
win5.hideNavBar();
var tab5 = Titanium.UI.createTab({  
    icon:'post.png',
    title:'Post',
    window:win5
});
var win6 = Titanium.UI.createWindow({  
    title:'EDIT',
    backgroundImage:'bookBG.png', 
    url:"viewedit.js"
});
var tab6 = Titanium.UI.createTab({  
    icon:'post.png',
    title:'EDIT',
    window:win6
});




win3.orientationModes = [
	Titanium.UI.LANDSCAPE_LEFT,
	Titanium.UI.LANDSCAPE_RIGHT,
]; 
win4.orientationModes = [
	Titanium.UI.LANDSCAPE_LEFT,
	Titanium.UI.LANDSCAPE_RIGHT,
]; 
win5.orientationModes = [
	Titanium.UI.LANDSCAPE_LEFT,
	Titanium.UI.LANDSCAPE_RIGHT,
]; 
win6.orientationModes = [
	Titanium.UI.LANDSCAPE_LEFT,
	Titanium.UI.LANDSCAPE_RIGHT,
]; 
//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab5);
tabGroup.addTab(tab2);  
tabGroup.addTab(tab3);  
tabGroup.addTab(tab4);  
tabGroup.addTab(tab6);

// open tab group
tabGroup.open();



