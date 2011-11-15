/**
 * @author Nick Groome
 */

var currentWin = Ti.UI.currentWindow;
currentWin.backgroundImage= "bookBG.png";
var imageView;
var win=Ti.UI.currentWindow;
var SliderRotar1 = Titanium.UI.createSlider({
	min:-500,
	max:500,
	value:0,
	width:240, 
	bottom:10,
	right:10,
	height:30,
	zIndex:51
});
Ti.Media.openPhotoGallery({
	success:function(event) {
            var image = event.media;
            alert('picture was selected');
            imageView = Ti.UI.createImageView({width:image.width,height:image.height,image:event.media,anchorPoint:{x:0.5,y:0.5} });
			win.add(imageView);  
			var FotoUsu;
			var tmat1 = Ti.UI.create2DMatrix({});
			var rot = 0;
 
			currentWin.add(SliderRotar1);
			SliderRotar1.addEventListener('change',function(e)
			{
    			rot=(e.value);
   				imageView.transform = tmat1.rotate(e.value);
   				imageView.duration = 2;
			});
 
			imageView.addEventListener('touchmove', function(e)
			{
			Ti.API.debug('Our event tells us the center FOR NEW is ' + e.x + ', ' + e.y );
			var newX = e.x + imageView.animatedCenter.x - imageView.width/2;
			var newY = e.y + imageView.animatedCenter.y - imageView.height/2;
			//if (newX<110 && newY<110){
				imageView.animate({center:{x:newX,y:newY}, duration:1});
			//}
		//alert("Got this far");
			});
			imageView.addEventListener('dblclick', function()
			{
				var t = Titanium.UI.create2DMatrix();

				if (!scaled1)
				{
					t = t.scale(2.0);
					center1 = imageView.center;
					imageView.animate({transform:t,center:win.center,zIndex:10,duration:500});
					scaled1 = true;
				}
				else
				{
					imageView.animate({transform:t,center:center1,zIndex:1,duration:500});
					scaled1 = false;
				}
	
			});
        }
         
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
    url:"resize.png",
    width:115,
    height:40,
    left:195,
    top:10,
 
});

//pageView.add(resizeButton);
//pageView.add(picButton);


var image1 = Titanium.UI.createView({
	backgroundImage:'dreamcatcher.png',
	height:288,
	width:228,
	top:200,
	left:200,
	borderWidth:3,
	borderColor:'#fff',
	zIndex:1,
	zoomScale : 2,
    maxZoomScale:30,
    minZoomScale:1
});

win.add(image1);

var center1 = null;
var center2 = null;
var center3 = null;

var scaled1 = false;
//Rotate button


var editButton = Titanium.UI.createTabbedBar({
	labels:['Edit', 'View'],
	//style:Titanium.UI.iPhone.SystemButtonStyle.BAR,
	backgroundColor:'#336699'
});
Ti.UI.currentWindow.setRightNavButton(editButton); 

var pageButton = Titanium.UI.createButtonBar({
	labels:['Close'],
	backgroundColor:'#336699',
});
Ti.UI.currentWindow.setLeftNavButton(pageButton);        

		image1.addEventListener('touchmove', function(e)
		{
		Ti.API.debug('Our event tells us the center is ' + e.x + ', ' + e.y );
		var newX = e.x + image1.animatedCenter.x - image1.width/2;
		var newY = e.y + image1.animatedCenter.y - image1.height/2;
		image1.animate({center:{x:newX,y:newY}, duration:1});
		});

		image1.addEventListener('dblclick', function()
		{
			var t = Titanium.UI.create2DMatrix();

			if (!scaled1)
			{
				t = t.scale(2.0);
				center1 = image1.center;
				image1.animate({transform:t,center:win.center,zIndex:10,duration:500});
				scaled1 = true;
			}
			else
			{
				image1.animate({transform:t,center:center1,zIndex:1,duration:500});
				scaled1 = false;
			}
	
		});
var mode="view";

var rotate = Titanium.UI.createImageView({
	image: "rotate.png",
	height:"auto",
	width:"auto",
	bottom:75,
	right:75
});
currentWin.add(rotate);
editButton.addEventListener('click', function(e){
	if (e.index==0){ 
		mode="edit";
		SliderRotar1.show();
		SliderRotar.show();
		rotate.show();

	//SHOW ALL BUTTONS
		}
	if (e.index==1){ 
		mode="view";
		SliderRotar1.hide();
		SliderRotar.hide();
		rotate.hide();


	//HIDE ALL BUTTONS
	//BLUR ALL BUTTONS
	}
});

pageButton.addEventListener('click', function(e){
	if (e.index==0){ 
	currentWin.close();
	}
	if (e.index==1)
	{ 
	currentWin.close();
	}
	if (e.index==2){

	}

});




																		// animations














var FotoUsu;
var tmat = Ti.UI.create2DMatrix();
var rot = 0;
imageUser = Titanium.UI.createImageView({
  top:50,
  anchorPoint:{x:0.5,y:0.5},
  left:5,
  width:200,
  height:200,
  canScale:true,
  zIndex:15,
  backgroundImage:"bookbutton.png"
});


 
var SliderRotar = Titanium.UI.createSlider({
    min:-500,
    max:500,
    value:0,
    width:240,
    top:340,
    left:10,
    height:30,
    zIndex:20
});

SliderRotar.addEventListener('change',function(e)
{
 
    rot=(e.value);
    imageUser.transform = tmat.rotate(e.value);
    imageUser.duration = 2;
});



//win.add(imageUser);
//win.add(SliderRotar);