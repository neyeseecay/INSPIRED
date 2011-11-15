/**
 * @author Nick Groome
 */

var currentWin = Ti.UI.currentWindow;
currentWin.style=true;
var tab = Titanium.UI.createTab({  
    icon:'homeicon1.png',
    title:'Home',
    window:currentWin
});
currentWin.backgroundImage= "bookBG.png";
var newTabGroup = Titanium.UI.createTabGroup();

var pageView= Titanium.UI.createView({
	
});

var picButton=Titanium.UI.createButton({
    title:"take picture",
    width:115,
    height:40,
    left:195,
    top:100,
});


picButton.addEventListener("click", function(e){
	Titanium.Media.showCamera({
 //Ti.UI.currentWindow.close();

	success:function(event)
	{
		var cropRect = event.cropRect;
		var image = event.media;
		var dateTime=String.formatDate(new Date,"long")+" at "+String.formatTime(new Date,"medium")+'\n';

		storePicData(textField.value,descriptionField.value,dateTime,latitude,longitude);

		var f = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,''+textField.value+'.png');
		f.write(image);
		//currentWin.backgroundImage = f.nativePath; // used to be win.back
 
		// Ti.API.debug('Our type was: '+event.mediaType);
		// if(event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO)
		// {
			// var imageView = Ti.UI.createImageView({width:currentWin.width,height:currentWin.height,image:event.media});
			// currentWin.add(imageView);  // used to be win.add
		// }
		// else
		// {
			// alert("got the wrong type back ="+event.mediaType);
		// }
	},
	cancel:function()
	{
               alert('You canceled the action.');
	},

	error:function(error)
	{
		// create alert
		var a = Titanium.UI.createAlertDialog({title:'Camera'});
 
		// set message
		if (error.code == Titanium.Media.NO_CAMERA)
		{
			a.setMessage('Please run this test on device');
		}
		else
		{
			a.setMessage('Unexpected error: ' + error.code);
		}
 
		// show alert
		a.show();
	},
	saveToPhotoGallery:true,
	allowEditing:true,
	mediaTypes:[Ti.Media.MEDIA_TYPE_VIDEO,Ti.Media.MEDIA_TYPE_PHOTO],
});
});



//Resize button
var resizeButton=Titanium.UI.createImageView({
    image:"resize.png",
    width:115,
    height:40,
    left:195,
    top:10,
 
});
// view = Ti.UI.createView({
	// backgroundColor:'#fff'
// });
// 
// var view2 = Ti.UI.createView({
	// backgroundColor:'#13386c'
// });
// 
// pageView.add(view);
// pageView.add(view2);
pageView.add(resizeButton);
pageView.add(picButton);


// resizeButton.addEventListener('click', function()
// {
	// // create close button for our window
	// var b = Ti.UI.createButton({title:'Close Me',width:200,height:40});
	// b.addEventListener('click',function()
	// {
		// pageView.animate({view:"camera.js",transition:Ti.UI.iPhone.AnimationStyle.CURL_UP});
	// });
	// view2.add(b);
// 	
	// // transition to view
	// pageView.animate({view:view2, transition:Ti.UI.iPhone.AnimationStyle.CURL_DOWN});
// });

//Rotate button
var rotButton=Titanium.UI.createButton({
    title:"PAGE 3",
    width:115,
    height:40,
    left:195,
    top:60,
 
});
pageView.add(rotButton);

pageView.add(rotButton);

var editButton = Titanium.UI.createTabbedBar({
	labels:['Edit', 'View'],
	backgroundColor:'#336699'
});
currentWin.setRightNavButton(editButton); 

var pageButton = Titanium.UI.createButtonBar({
	labels:['Previous'], //removed next
	backgroundColor:'#336699'
});
Ti.UI.currentWindow.setLeftNavButton(pageButton);        



var mode;
editButton.addEventListener('click', function(e){
	if (e.index==0){ 
		mode="edit";
		rotButton.show();
		resizeButton.show();
		picButton.show();
	//SHOW ALL BUTTONS
	}
	if (e.index==1){ 
		mode="view";
		rotButton.hide();
		resizeButton.hide();
		picButton.hide();
	//HIDE ALL BUTTONS
	//BLUR ALL BUTTONS
	}
});

pageButton.addEventListener('click', function(e){
	if (e.index==0){ 
		var window = Ti.UI.createWindow({
			url:"page2.js",
            hasChild:false
		});
		window.open({
    	//modal:true,
    	transition:Ti.UI.iPhone.AnimationStyle.CURL_UP	
		})
	}
	if (e.index==1)
	{ 
			var window1 = Ti.UI.createWindow({
				url:"page3.js",
            	hasChild:false
			});
			window1.open({
    			//modal:true,
    			transition:Ti.UI.iPhone.AnimationStyle.CURL_UP
			})
	}
});


currentWin.add(pageView);
newTabGroup.addTab(tab);
newTabGroup.open();


//page flip


