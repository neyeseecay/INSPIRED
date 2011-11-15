/**
 * @author Nick Groome
 */

var currentWin = Ti.UI.currentWindow;
currentWin.backgroundImage= "bookBack.png";

var editButton = Titanium.UI.createTabbedBar({
	labels:['Edit', 'View'],
	//style:Titanium.UI.iPhone.SystemButtonStyle.BAR,
	backgroundColor:'#336699'
});
Ti.UI.currentWindow.setRightNavButton(editButton); 

var pageButton = Titanium.UI.createButtonBar({
	labels:['Previous Page', 'Next Page'],
	backgroundColor:'#336699'
});
Ti.UI.currentWindow.setLeftNavButton(pageButton);  

pageButton.addEventListener('click', function(e){
	if (e.index==0){ 
currentWin.close();

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





