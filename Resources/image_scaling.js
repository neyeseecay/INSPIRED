var win = Titanium.UI.currentWindow;
win.backgroundImage = 'bookBG.png';

var image1 = Titanium.UI.createView({
	backgroundImage:'dreamcatcher.png',
	height:288,
	width:228,
	top:200,
	left:200,
	borderWidth:3,
	borderColor:'#fff',
	zIndex:1
});

win.add(image1);

var center1 = null;
var center2 = null;
var center3 = null;

var scaled1 = false;
image1.addEventListener('click', function()
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

var image2 = Titanium.UI.createView({
	backgroundImage:'../images/smallpic2.jpg',
	height:75,
	width:75,
	top:30,
	right:50,
	borderWidth:3,
	borderColor:'#fff',
	zIndex:1
});

win.add(image2);

var scaled2 = false;
image2.addEventListener('click', function()
{
	var t = Titanium.UI.create2DMatrix();
	if (!scaled2)
	{
		t = t.scale(4.0);
		center2 = image2.center;
		image2.animate({transform:t,center:win.center,zIndex:10,duration:500});
		scaled2 = true;
	}
	else
	{
		image2.animate({transform:t,center:center2,zIndex:1,duration:500});
		scaled2 = false;
	}
});

var image3 = Titanium.UI.createView({
	backgroundImage:'../images/smallpic3.jpg',
	height:75,
	width:75,
	top:200,
	left:120,
	borderWidth:3,
	borderColor:'#fff',
	zIndex:1
});

win.add(image3);

var scaled3 = false;
image3.addEventListener('click', function()
{
	var t = Titanium.UI.create2DMatrix();
	if (!scaled3)
	{
		t = t.scale(4.0);
		center3 = image3.center;
		image3.animate({transform:t,center:win.center,zIndex:10,duration:500});
		scaled3 = true;
	}
	else
	{
		image3.animate({transform:t,center:center3,zIndex:1,duration:500});
		scaled3 = false;
	}
});

var label = Titanium.UI.createLabel({
	text:'Click images to toggle scale',
	color:'#fff',
	bottom:20,
	width:'auto',
	height:'auto',
	textAlign:'center'
});

win.add(label);

//
// CREATE TWO CLOUDS
//
var t1 = Titanium.UI.create2DMatrix().scale(0.4);
var cloud1 = Titanium.UI.createView({
	backgroundImage:'rose.jpeg',
	height:500,
	width:489,
	top:10,
	transform:t1
});

win.add(cloud1);

var t2 = Titanium.UI.create2DMatrix().scale(0.2);
var cloud2 = Titanium.UI.createView({
	backgroundImage:'rose.jpeg',
	height:500,
	width:489,
	top:130,
	left:75,
	transform:t2
});

win.add(cloud2);


//
// START ANIMATION BUTTON
//
var button = Titanium.UI.createButton({
	title:'Animate',
	width:200,
	height:40,
	bottom:20
});

button.addEventListener('click', function()
{
	// cloud 1 animation/transform
	var t3 = Ti.UI.create2DMatrix();
	t3 = t3.rotate(20);
	t3 = t3.scale(1.5);

	var a = Titanium.UI.createAnimation();
	a.transform = t3;
	a.duration = 3000;
	a.autoreverse = true;
	a.repeat = 3;
	cloud1.animate(a);

	// cloud 2 animation/transform
	var t4 = Ti.UI.create2DMatrix();
	t4 = t4.rotate(-30);
	t4 = t4.scale(1.5);
	
	var a2 = Titanium.UI.createAnimation();
	a2.transform = t4;
	a2.duration = 3000;
	a2.autoreverse = true;
	a2.repeat = 3;
	a2.delay = 1500;
	cloud2.animate(a2);
});

win.add(button);

// add moveable object



var basicpic1 = Titanium.UI.createView({
	backgroundImage:'dreamcatcher.png',
	height:288,
	width:228,
	top:200,
	left:200,
	borderWidth:3
});

win.add(basicpic1);

var label = Titanium.UI.createLabel({
	text:'Click basicpic1 repeatedly to animate or drag the basicpic1',
	bottom:100,
	color:'#555',
	font:{fontSize:12,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	height:'auto',
	width:'auto'
});

win.add(label);

basicpic1.addEventListener('touchmove', function(e)
{
	Ti.API.debug('Our event tells us the center is ' + e.x + ', ' + e.y );
	var newX = e.x + basicpic1.animatedCenter.x - basicpic1.width/2;
	var newY = e.y + basicpic1.animatedCenter.y - basicpic1.height/2;
	basicpic1.animate({center:{x:newX,y:newY}, duration:1});
});

var mode = 0;
basicpic1.addEventListener('click', function()
{
	switch(mode)
	{
		case 0:
		{
			firstAnimation();
			mode++;
			break;
		}
		case 1:
		{
			secondAnimation();
			mode++;
			break;
		}
		case 2:
		{
			thirdAnimation();
			mode++;
			break;
		}
		case 3:
		{
			fourthAnimation();
			mode=0;
			break;
		}

	}
});

//
// ANIMATION FUNCTIONS
//

// opacity - use inline animation object
function firstAnimation()
{
	var t = Ti.UI.create2DMatrix();
	t.a = 1;
	t.b = 2;
	t.c = 3;
	t.d = 4;

	// pass inline animation objects and get callback when done
	basicpic1.animate({opacity:0,transform:t,duration:500}, function()
	{
		var t = Ti.UI.create2DMatrix();

		basicpic1.animate({opacity:1,transform:t,duration:500});
	});
};

// background color - use animation object
function secondAnimation()
{
	var a = Titanium.UI.createAnimation();
	a.backgroundColor = '#ff0000';
	a.duration = 1000;

	var b = Titanium.UI.createAnimation();
	b.backgroundColor = '#336699';
	b.duration = 1000;

	basicpic1.animate(a);

	//
	// ANIMATIONS SUPPORT A START EVENT
	//
	a.addEventListener('start', function()
	{
		Ti.API.info('IN START');
		label.text = 'Animation started';

	});

	//
	// ANIMATIONS SUPPORT A COMPLETE EVENT
	//
	a.addEventListener('complete', function()
	{
		Ti.API.info('IN COMPLETE');
		label.text = 'Animation completed';
		basicpic1.animate(b);

		setTimeout(function()
		{
			label.text = 'Click basicpic1 repeatedly to animate or drag window';
		},2000);
	});
};

// animate the top and right property
function thirdAnimation()
{
	basicpic1.animate({top:200,right:30,duration:500}, function()
	{
		basicpic1.animate({top:0,left:0, duration:500});
	});
};

// animate the center point object
function fourthAnimation()
{
	basicpic1.animate({center:{x:100,y:100},curve:Ti.UI.ANIMATION_CURVE_EASE_IN_OUT,duration:1000}, function()
	{
		basicpic1.animate({center:{x:0,y:200},duration:1000}, function()
		{
			basicpic1.animate({center:{x:300,y:300},duration:1000},function()
			{
				basicpic1.animate({center:{x:150,y:60, duration:1000}});
			});
		});
	});
};
