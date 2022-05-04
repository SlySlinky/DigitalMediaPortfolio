(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.pexelsfreenaturestock1376766 = function() {
	this.initialize(img.pexelsfreenaturestock1376766);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2886,4329);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00CC99").ss(1,1,1).p("EhLFgGiMCWLAAAIAANFMiWLAAAg");
	this.shape.setTransform(480.625,41.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#252526").s().p("EhLFAGjIAAtFMCWLAAAIAANFg");
	this.shape_1.setTransform(480.625,41.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-1,-1,963.3,85.9), null);


(lib.Surface = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.pexelsfreenaturestock1376766();
	this.instance.setTransform(0,0,0.3615,0.3615);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1043.3,1565);


(lib.BallFinal = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00CC99").ss(1,1,1).p("AHRAAQAADBiJCHQiHCJjBAAQjAAAiIiJQiIiHAAjBQAAjACIiIQCIiIDAAAQDBAACHCIQCJCIAADAg");
	this.shape.setTransform(46.5,46.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#00FF00","#000000"],[0,1],-15.9,-20.5,0,-15.9,-20.5,72.5).s().p("AlIFJQiIiIAAjBQAAjACIiIQCIiIDAAAQDBAACICIQCICIAADAQAADBiICIQiICIjBAAQjAAAiIiIg");
	this.shape_1.setTransform(46.5,46.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,95,95);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.BallFinal("synched",0);
	this.instance.setTransform(46.5,46.5,1,1,0,0,0,46.5,46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,95,95);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Surface("synched",0);
	this.instance.setTransform(521.6,782.5,1,1,0,0,0,521.6,782.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1043.3,1565);


// stage content:
(lib.BallBounce2Final_HTML5Canvas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Surface
	this.instance = new lib.Symbol3();
	this.instance.setTransform(943.1,598.05,1,1,0,0,0,480.6,41.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:923.35},0).wait(1).to({x:903.6},0).wait(1).to({x:883.9},0).wait(1).to({x:864.15},0).wait(1).to({x:844.45},0).wait(1).to({x:824.7},0).wait(1).to({x:804.95},0).wait(1).to({x:785.25},0).wait(1).to({x:765.5},0).wait(1).to({x:745.8},0).wait(1).to({x:726.05},0).wait(1).to({x:706.3},0).wait(1).to({x:686.6},0).wait(1).to({x:666.85},0).wait(1).to({x:647.15},0).wait(1).to({x:627.4},0).wait(1).to({x:607.7},0).wait(1).to({x:587.95},0).wait(1).to({x:568.2},0).wait(1).to({x:548.5},0).wait(1).to({x:528.75},0).wait(1).to({x:509.05},0).wait(1).to({x:489.3},0).wait(1).to({x:469.6},0).wait(1).to({x:449.9},0).wait(1).to({x:430.15},0).wait(1).to({x:410.45},0).wait(1).to({x:390.7},0).wait(1).to({x:371},0).wait(1).to({x:351.25},0).wait(1).to({x:331.5},0).wait(1).to({x:329.1},0).wait(1).to({x:326.7},0).wait(1).to({x:324.3},0).wait(1).to({x:321.9},0).wait(1).to({x:319.5},0).wait(1).to({x:317.1},0).wait(1).to({x:341.85},0).wait(1).to({x:366.65},0).wait(1).to({x:391.4},0).wait(1).to({x:416.15},0).wait(1).to({x:440.9},0).wait(1).to({x:465.65},0).wait(1).to({x:490.35},0).wait(1).to({x:515.1},0).wait(1).to({x:539.85},0).wait(1).to({x:564.6},0).wait(1).to({x:589.35},0).wait(1).to({x:614.1},0).wait(1).to({x:638.85},0).wait(1).to({x:663.6},0).wait(1).to({x:688.35},0).wait(1).to({x:713.1},0).wait(1).to({x:737.85},0).wait(1).to({x:762.6},0).wait(1).to({x:787.35},0).wait(1).to({x:812.1},0).wait(1).to({x:836.85},0).wait(1).to({x:861.65},0).wait(1));

	// Obstacle
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00CC99").ss(1,1,1).p("Ark57IXJAAMAAAAz3I3JAAg");
	this.shape.setTransform(738,394.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ArlZ8MAAAgz3IXLAAMAAAAz3g");
	this.shape_1.setTransform(738,394.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(60));

	// Ball
	this.instance_1 = new lib.Symbol4("synched",0);
	this.instance_1.setTransform(-52.35,-2.95,1,1,0,0,0,46.5,46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:1.116,scaleY:1.116,x:-38.1,y:16.3},0).wait(1).to({scaleX:1.2319,scaleY:1.2319,x:-23.9,y:35.55},0).wait(1).to({scaleX:1.3479,scaleY:1.3479,x:-9.7,y:54.8},0).wait(1).to({scaleX:1.4638,scaleY:1.4638,x:4.45,y:73.95},0).wait(1).to({scaleX:1.5798,scaleY:1.5798,x:18.65,y:93.2},0).wait(1).to({scaleX:1.6957,scaleY:1.6957,x:32.85,y:112.45},0).wait(1).to({scaleX:1.8117,scaleY:1.8117,x:47.1,y:131.7},0).wait(1).to({scaleX:1.9276,scaleY:1.9276,x:61.3,y:150.95},0).wait(1).to({scaleX:2.0436,scaleY:2.0436,x:75.5,y:170.2},0).wait(1).to({scaleX:2.1596,scaleY:2.1596,x:89.65,y:189.4},0).wait(1).to({scaleX:2.2755,scaleY:2.2755,x:103.85,y:208.65},0).wait(1).to({scaleX:2.3915,scaleY:2.3915,x:118,y:227.9},0).wait(1).to({scaleX:2.5074,scaleY:2.5074,x:132.25,y:247.15},0).wait(1).to({scaleX:2.6234,scaleY:2.6234,x:146.45,y:266.4},0).wait(1).to({scaleX:2.7393,scaleY:2.7393,x:160.65,y:285.65},0).wait(1).to({scaleX:2.8553,scaleY:2.8553,x:174.8,y:304.8},0).wait(1).to({scaleX:2.9712,scaleY:2.9712,x:189,y:324.05},0).wait(1).to({scaleX:3.0872,scaleY:3.0872,x:203.2,y:343.3},0).wait(1).to({scaleX:3.2032,scaleY:3.2032,x:217.45,y:362.55},0).wait(1).to({scaleX:3.3191,scaleY:3.3191,x:231.65,y:381.8},0).wait(1).to({scaleX:3.4351,scaleY:3.4351,x:245.85,y:401.05},0).wait(1).to({scaleX:3.551,scaleY:3.551,x:260,y:420.25},0).wait(1).to({scaleX:3.667,scaleY:3.667,x:274.2,y:439.5},0).wait(1).to({scaleX:3.7829,scaleY:3.7829,x:288.4,y:458.75},0).wait(1).to({scaleX:3.8989,scaleY:3.8989,x:302.65,y:478},0).wait(1).to({scaleX:4.0148,scaleY:4.0148,x:316.85,y:497.25},0).wait(1).to({scaleX:4.1308,scaleY:4.1308,x:331.05,y:516.5},0).wait(1).to({scaleX:4.2468,scaleY:4.2468,x:345.2,y:535.7},0).wait(1).to({scaleX:4.3627,scaleY:4.3627,x:359.4,y:554.95},0).wait(1).to({scaleX:4.4787,scaleY:4.4787,x:373.6,y:574.2},0).wait(1).to({scaleX:4.5946,scaleY:4.5946,x:387.85,y:593.45},0).wait(1).to({scaleX:4.4705,scaleY:4.4705,x:404,y:562.45},0).wait(1).to({scaleX:4.3464,scaleY:4.3464,x:420.15,y:531.4},0).wait(1).to({scaleX:4.2223,scaleY:4.2223,x:436.35,y:500.45},0).wait(1).to({scaleX:4.0982,scaleY:4.0982,x:452.5,y:469.4},0).wait(1).to({scaleX:3.9741,scaleY:3.9741,x:468.7,y:438.4},0).wait(1).to({scaleX:3.85,scaleY:3.85,x:484.85,y:407.4},0).wait(1).to({scaleX:3.7259,scaleY:3.7259,x:465.2,y:386.15},0).wait(1).to({scaleX:3.6018,scaleY:3.6018,x:445.55,y:364.95},0).wait(1).to({scaleX:3.4777,scaleY:3.4777,x:425.85,y:343.7},0).wait(1).to({scaleX:3.3536,scaleY:3.3536,x:406.2,y:322.45},0).wait(1).to({scaleX:3.2295,scaleY:3.2295,x:386.5,y:301.2},0).wait(1).to({scaleX:3.1054,scaleY:3.1054,x:366.85,y:279.95},0).wait(1).to({scaleX:2.9813,scaleY:2.9813,x:347.2,y:258.75},0).wait(1).to({scaleX:2.8572,scaleY:2.8572,x:327.5,y:237.5},0).wait(1).to({scaleX:2.7331,scaleY:2.7331,x:307.85,y:216.25},0).wait(1).to({scaleX:2.609,scaleY:2.609,x:288.15,y:195},0).wait(1).to({scaleX:2.4849,scaleY:2.4849,x:268.5,y:173.75},0).wait(1).to({scaleX:2.3608,scaleY:2.3608,x:248.85,y:152.55},0).wait(1).to({scaleX:2.2367,scaleY:2.2367,x:229.15,y:131.3},0).wait(1).to({scaleX:2.1126,scaleY:2.1126,x:209.5,y:110.05},0).wait(1).to({scaleX:1.9885,scaleY:1.9885,x:189.8,y:88.85},0).wait(1).to({scaleX:1.8644,scaleY:1.8644,x:170.1,y:67.6},0).wait(1).to({scaleX:1.7403,scaleY:1.7403,x:150.4,y:46.35},0).wait(1).to({scaleX:1.6162,scaleY:1.6162,x:130.75,y:25.15},0).wait(1).to({scaleX:1.4921,scaleY:1.4921,x:111.1,y:3.9},0).wait(1).to({scaleX:1.368,scaleY:1.368,x:91.4,y:-17.35},0).wait(1).to({scaleX:1.2439,scaleY:1.2439,x:71.75,y:-38.55},0).wait(1).to({scaleX:1.1198,scaleY:1.1198,x:52.05,y:-59.85},0).wait(1));

	// Background
	this.instance_2 = new lib.Symbol2("synched",0);
	this.instance_2.setTransform(536.45,981.65,1.695,1.695,0,0,0,519.8,782.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:521.7,regY:782.5,x:528.9,y:952.4},0).wait(1).to({x:518.1,y:922.45},0).wait(1).to({x:507.3,y:892.5},0).wait(1).to({x:496.5,y:862.55},0).wait(1).to({x:485.7,y:832.6},0).wait(1).to({x:474.9,y:802.7},0).wait(1).to({x:464.1,y:772.75},0).wait(1).to({x:453.3,y:742.8},0).wait(1).to({x:442.5,y:712.85},0).wait(1).to({x:431.7,y:682.9},0).wait(1).to({x:420.95,y:653},0).wait(1).to({x:410.15,y:623.05},0).wait(1).to({x:399.35,y:593.1},0).wait(1).to({x:388.55,y:563.15},0).wait(1).to({x:377.75,y:533.2},0).wait(1).to({x:366.95,y:503.3},0).wait(1).to({x:356.15,y:473.35},0).wait(1).to({x:345.35,y:443.4},0).wait(1).to({x:334.55,y:413.45},0).wait(1).to({x:323.75,y:383.5},0).wait(1).to({x:312.95,y:353.55},0).wait(1).to({x:302.2,y:323.65},0).wait(1).to({x:291.4,y:293.7},0).wait(1).to({x:280.6,y:263.75},0).wait(1).to({x:269.8,y:233.8},0).wait(1).to({x:259,y:203.85},0).wait(1).to({x:248.2,y:173.95},0).wait(1).to({x:237.4,y:144},0).wait(1).to({x:226.6,y:114.05},0).wait(1).to({x:215.8,y:84.1},0).wait(1).to({x:205.35,y:95.55},0).wait(1).to({x:194.85,y:107},0).wait(1).to({x:184.4,y:118.45},0).wait(1).to({x:173.9,y:129.85},0).wait(1).to({x:163.45,y:141.3},0).wait(1).to({x:152.95,y:152.75},0).wait(1).to({x:142.5,y:164.2},0).wait(1).to({x:156.85,y:190.25},0).wait(1).to({x:171.2,y:216.3},0).wait(1).to({x:185.55,y:242.4},0).wait(1).to({x:199.9,y:268.45},0).wait(1).to({x:214.25,y:294.5},0).wait(1).to({x:228.6,y:320.55},0).wait(1).to({x:242.95,y:346.65},0).wait(1).to({x:257.3,y:372.7},0).wait(1).to({x:271.65,y:398.75},0).wait(1).to({x:286,y:424.8},0).wait(1).to({x:300.35,y:450.9},0).wait(1).to({x:314.7,y:476.95},0).wait(1).to({x:329.05,y:503},0).wait(1).to({x:343.4,y:529.05},0).wait(1).to({x:357.75,y:555.15},0).wait(1).to({x:372.1,y:581.2},0).wait(1).to({x:386.45,y:607.25},0).wait(1).to({x:400.8,y:633.3},0).wait(1).to({x:415.15,y:659.4},0).wait(1).to({x:429.5,y:685.45},0).wait(1).to({x:443.85,y:711.5},0).wait(1).to({x:458.2,y:737.55},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-261.7,-922.1,1686,3230.7);
// library properties:
lib.properties = {
	id: '00079C5F497D4252A1A4C7FCB5CF3B77',
	width: 960,
	height: 640,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/pexelsfreenaturestock1376766.jpg", id:"pexelsfreenaturestock1376766"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['00079C5F497D4252A1A4C7FCB5CF3B77'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;