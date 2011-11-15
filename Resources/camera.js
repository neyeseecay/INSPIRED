/**
 * @author Nick Groome
 */

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