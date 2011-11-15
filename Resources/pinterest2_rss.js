Ti.API.info("HELLLLLL333333OOOOOOO");
// create table view data object
var data = [];
Ti.API.info("HELLLLLL333333OOOOOOO");
var xhr = Ti.Network.createHTTPClient();
Ti.API.info("HELLLLLLOO324242OOOOO");
xhr.open("GET","http://pinterest.com/flair_squared/feed.rss");
xhr.onload = function()
{
	try
	{
		var doc = this.responseXML.documentElement;
		var items3 = doc.getElementsByTagName("item");
		var x = 0;
		var doctitle = doc.evaluate("//channel/title/text()").item(0).nodeValue;
		
		Ti.API.info("OOOOOOO");
		for (var c=0;c<items3.length;c++)
		{
			Ti.API.info("hahaha2222");
			var item3 = items3.item(c);
			var titles = item3.getElementsByTagName("title").item(0).text;
			Ti.API.info("hi");
			Ti.API.info("titles:" +titles);
			if (1==1)
			{
				var photos = item3.getElementsByTagName("description").item(0).text;
				Ti.API.info(+photos);
				//alert("unedited:"+photos)
				Ti.API.info("hi323432");
				var photoarray = photos.split('"');
				//alert("photo" +photoarray[1]);
				var media = photoarray[3];
				//alert("quote" +media);
				var title = item3.getElementsByTagName("title").item(0).text;
				var row = Ti.UI.createTableViewRow({height:'auto'});
				var label = Ti.UI.createLabel({
					text:title,
					left:72,
					top:5,
					bottom:5,
					right:5				
				});
				//row.add(label);
			
				var img;
				if (Titanium.Platform.name == 'android') 
				{
					// iphone moved to a single image property - android needs to do the same
					img = Ti.UI.createImageView({
						image:media,
						left:5,
						height:150,
						width:150
					});

				}
				else
				{
					img = Ti.UI.createImageView({
						image:media,
						left:5,
						right:5,
						top:10,
						bottom:10,
						height: 300,
						width: 300
					});
					
				}
				row.add(img);
				data[x++] = row;
				row.url = media;
				var mediaSplit = media.split("/");
				row.identifier = mediaSplit[5];
				//alert(row.url);
			}
		}
		Ti.API.info("for loop done");
		var tableview3 = Titanium.UI.createTableView({
			data:data,
			width:"31%",
			height:"100%",
			right:"1%"
			});
		Titanium.UI.currentWindow.add(tableview3);
		tableview3.addEventListener('click',function(e)
		{
			
var xhr = Titanium.Network.createHTTPClient();

			xhr.onload = function()
			{
				Titanium.Media.saveToPhotoGallery(this.responseData);
				Titanium.UI.createAlertDialog({title:'Photo Gallery',message:"Photo has been saved to your gallery."}).show();		
			};
			// open the client
			xhr.open('GET',e.row.url);
			
			// send the data
			xhr.send();
			
			
			// var picFile = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory,""+picName+"");
			// picFile.write(image);
			//var image = picFile.nativePath;
			// var w = Ti.UI.createWindow({title:doctitle});
			// var wb = Ti.UI.createWebView({url:e.row.url});
			// w.add(wb);
			// var b = Titanium.UI.createButton({
				// title:'Close',
				// style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN
			//});
			w.setLeftNavButton(b);
			b.addEventListener('click',function()
			{
				w.close();
			});
			w.open({modal:true});
		});
	}
	catch(E)
	{
		alert(E);
	}
};
xhr.send();




