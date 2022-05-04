(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"FavPhraseFinal_atlas_1", frames: [[0,0,1200,1200]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.currentSoundStreamInMovieclip;
	this.soundStreamDuration = new Map();
	this.streamSoundSymbolsList = [];

	this.gotoAndPlayForStreamSoundSync = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.gotoAndPlay = function(positionOrLabel){
		this.clearAllSoundStreams();
		var pos = this.timeline.resolve(positionOrLabel);
		if (pos != null) { this.startStreamSoundsForTargetedFrame(pos); }
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(this.currentFrame);
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		this.clearAllSoundStreams();
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
		this.clearAllSoundStreams();
	}
	this.startStreamSoundsForTargetedFrame = function(targetFrame){
		for(var index=0; index<this.streamSoundSymbolsList.length; index++){
			if(index <= targetFrame && this.streamSoundSymbolsList[index] != undefined){
				for(var i=0; i<this.streamSoundSymbolsList[index].length; i++){
					var sound = this.streamSoundSymbolsList[index][i];
					if(sound.endFrame > targetFrame){
						var targetPosition = Math.abs((((targetFrame - sound.startFrame)/lib.properties.fps) * 1000));
						var instance = playSound(sound.id);
						var remainingLoop = 0;
						if(sound.offset){
							targetPosition = targetPosition + sound.offset;
						}
						else if(sound.loop > 1){
							var loop = targetPosition /instance.duration;
							remainingLoop = Math.floor(sound.loop - loop);
							if(targetPosition == 0){ remainingLoop -= 1; }
							targetPosition = targetPosition % instance.duration;
						}
						instance.loop = remainingLoop;
						instance.position = Math.round(targetPosition);
						this.InsertIntoSoundStreamData(instance, sound.startFrame, sound.endFrame, sound.loop , sound.offset);
					}
				}
			}
		}
	}
	this.InsertIntoSoundStreamData = function(soundInstance, startIndex, endIndex, loopValue, offsetValue){ 
 		this.soundStreamDuration.set({instance:soundInstance}, {start: startIndex, end:endIndex, loop:loopValue, offset:offsetValue});
	}
	this.clearAllSoundStreams = function(){
		this.soundStreamDuration.forEach(function(value,key){
			key.instance.stop();
		});
 		this.soundStreamDuration.clear();
		this.currentSoundStreamInMovieclip = undefined;
	}
	this.stopSoundStreams = function(currentFrame){
		if(this.soundStreamDuration.size > 0){
			var _this = this;
			this.soundStreamDuration.forEach(function(value,key,arr){
				if((value.end) == currentFrame){
					key.instance.stop();
					if(_this.currentSoundStreamInMovieclip == key) { _this.currentSoundStreamInMovieclip = undefined; }
					arr.delete(key);
				}
			});
		}
	}

	this.computeCurrentSoundStreamInstance = function(currentFrame){
		if(this.currentSoundStreamInMovieclip == undefined){
			var _this = this;
			if(this.soundStreamDuration.size > 0){
				var maxDuration = 0;
				this.soundStreamDuration.forEach(function(value,key){
					if(value.end > maxDuration){
						maxDuration = value.end;
						_this.currentSoundStreamInMovieclip = key;
					}
				});
			}
		}
	}
	this.getDesiredFrame = function(currentFrame, calculatedDesiredFrame){
		for(var frameIndex in this.actionFrames){
			if((frameIndex > currentFrame) && (frameIndex < calculatedDesiredFrame)){
				return frameIndex;
			}
		}
		return calculatedDesiredFrame;
	}

	this.syncStreamSounds = function(){
		this.stopSoundStreams(this.currentFrame);
		this.computeCurrentSoundStreamInstance(this.currentFrame);
		if(this.currentSoundStreamInMovieclip != undefined){
			var soundInstance = this.currentSoundStreamInMovieclip.instance;
			if(soundInstance.position != 0){
				var soundValue = this.soundStreamDuration.get(this.currentSoundStreamInMovieclip);
				var soundPosition = (soundValue.offset?(soundInstance.position - soundValue.offset): soundInstance.position);
				var calculatedDesiredFrame = (soundValue.start)+((soundPosition/1000) * lib.properties.fps);
				if(soundValue.loop > 1){
					calculatedDesiredFrame +=(((((soundValue.loop - soundInstance.loop -1)*soundInstance.duration)) / 1000) * lib.properties.fps);
				}
				calculatedDesiredFrame = Math.floor(calculatedDesiredFrame);
				var deltaFrame = calculatedDesiredFrame - this.currentFrame;
				if((deltaFrame >= 0) && this.ignorePause){
					cjs.MovieClip.prototype.play.call(this);
					this.ignorePause = false;
				}
				else if(deltaFrame >= 2){
					this.gotoAndPlayForStreamSoundSync(this.getDesiredFrame(this.currentFrame,calculatedDesiredFrame));
				}
				else if(deltaFrame <= -2){
					cjs.MovieClip.prototype.stop.call(this);
					this.ignorePause = true;
				}
			}
		}
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_126 = function() {
	this.initialize(img.CachedBmp_126);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2154,1594);


(lib._1200pxDr_Kawashima_3DS = function() {
	this.initialize(ss["FavPhraseFinal_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.N = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Trace_idn
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AC8gqQgNALgXAJQgXAHgaADQgfADgUACQgdACgXAAQgbAAhQgOQg9gLgRgDQAFAOARATQAUAVAaAWQAeAWAbAOQAgAPAXAAQAgAAAegNQAYgKAdgXQAHgFATgSQASgSAFgGIAQgTQAJgNAEgLQAAgBAAgCQABAAABAAQgBACgBABgAi5gkQArgVBAgSQATgFATgEQAsgJAjAAQAbAAATAFQAGACAGACQAIAEAJAFQAYANAGADQAUAJAYAFAi5gkQABgBAAAAIgBAAQAAAAAAABgAi5gkQAAACAAABQgDgBgBAAQAAgBACgBQABAAABAAg");
	this.shape.setTransform(318.45,-40.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC3333").s().p("Ag9BPQgcgOgcgWQgbgVgUgWQgQgTgGgOIAAgDQArgVA/gRIAmgJQAtgKAjAAQAbAAATAFIAMAFIASAIIAeAQQATAJAYAFIAAADQgNALgXAJQgWAIgbACIgzAFQgdACgWABQgcAAhPgPIhPgOIBPAOQBPAPAcAAQAWgBAdgCIAzgFQAbgCAWgIQAXgJANgLQgEALgJANIgQATIgXAYQgTASgHAGQgdAWgYAKQgeANggAAQgXAAgggPg");
	this.shape_1.setTransform(318.55,-40.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF0000").ss(4,1,1).p("AAoBRQACAAACAAQAAAAgDABQgBAAAAgBQAAgBAAgBQAAgDAoABQAwABARAAQATgFAegJQAKgGAKgIQAPgMAZgdQANgOAYgdAkvg4IAjAAQALgBAPgEQAEgBADgBQARgEAPAAQANAABNAFQBMAEAHAAIBvgCQAlAAAxgFQAxgFAbAAQAjAAAVAMAlChPQAZgFAyAAQA7AABfAKQBdAKAyAAQAZAAA3gPQA3gPAZAAQANAAArAIQAxAJAIAIQg0BnhDAiQg2Abh6AAQiIAAhDgbQhQghhDhjAkagYQARAbBvAmQByAnBQABACABRQAGgBALgCQADAAADAAQAUgBAXgNQAFgCAGgC");
	this.shape_2.setTransform(316.75,-37.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AjCgxQAOADAMABQBHALBBAAQAVAABegHQgOAAgLABQhxABhFgKgAjMgzQAFABAFABQAFAJALAFQAIAGAGAAIgBAHQBBAgBxAAQApAABTgUQBUgUAJgOIAAAAIAFAAQgDAAgCAAQhaACg5ABQABAAACAAQBqgIAhgFIBLAAQg0BKguAZQguAZhYAAQh+AAhLgZQhOgbhPhFQgFgEgEgEQAIgHAJgCQAEAAADAAQAIABARAHQALACAKACQANADAMACQARARAWAMAkhhFQADABAEAAQARAEAPAE");
	this.shape_3.setTransform(315.5,-38.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AiGAsQhNgahPhGIgJgIQAIgHAJgBIAgAHIAVAFQgQADgLABIgiAAIAiAAQALgBAQgDIAZAEQARASAWALQBBAgBwAAQAqAABTgTQBUgVAJgOIiTADIADAAQBqgHAhgGIBLAAQg0BLguAYQguAZhYAAQh+AAhMgZgADmgtIAFAAIgFAAgAjlg4IAAAAg");
	this.shape_4.setTransform(315.5,-38.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ai3gCIABgHQgFAAgJgFQgLgHgEgIIAaAFQBHAKBBAAQAVAABdgHICTgDQgJAOhTAUQhTAUgpAAQhxAAhCggg");
	this.shape_5.setTransform(317.25,-40.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF0000").ss(5,1,1).p("AkqhSQAfAKAigBQATAAAhgCQALAAAoAHQAqAHAUAAICGgCQA1AAARgEQAkgLA1gHIBKAAQgUBGhMAvQhTA2hwAAQhzAAhGgqQg8gkg9hag");
	this.shape_6.setTransform(317.95,-36.575);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1,1,1).p("AjQg9QASAKAyARQA5AVASAAQA+AABYgPQBfgQAdgSIAAgEIgZAAQhEARhbAAQg+AAgfgCQh1gIgXgCgAilAcQANAAAfACQASAAAmALQAfAJAVAJIAAABQABABABAAQgdAFgFAAQgaAAgrgNQgtgNgGgMgAirAcQACAAAEAA");
	this.shape_7.setTransform(319.3,-35.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AiyAsQg7gkg9haQAeAKAjgBIA0gCQAKAAAqAHQApAHAUAAICGgCQA1AAAQgEQAlgLA1gHIBLAAQgVBGhMAvQhTA2hwAAQhzAAhHgqgAiYAkQAGALAtAOQArANAaAAIAhgFIgBgBIAAgBQgVgJgfgJQgmgLgSAAIgsgCIgGgBIAGABgAh/gaQA6AVARAAQA9AABZgPQBfgQAdgSIAAgEIgZAAQhEARhaAAQg/AAgfgCIiLgKQARAKAyARg");
	this.shape_8.setTransform(317.95,-36.575);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhzA1QgsgNgGgMIAsACQASABAmAKQAeAKAWAIIAAABIACACIgjAEQgZAAgsgNgAiMghQgygSgSgJICMAJQAfACA+AAQBaABBFgSIAZAAIAAAEQgdAShfARQhYAPg+gBQgSAAg5gUg");
	this.shape_9.setTransform(319.3,-35.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FF0000").ss(4,1,1).p("AERhAQAEABANAAQAKAAAQgBIhFAoQgqAWgsANQgpATgdANQg5AYgeAAQgdAAg1gTQgFgBgDgBQgogQgXgJQgJgDgFgDQgmgOgwgaQgzgdgPgGQA+ASAuAAQArAABNgFQBMgFAvAAQALAABlgHQBZgHAiAAQAEAAADAAQgCAAgDACIgBAAQgBABAAgDQAAABACABg");
	this.shape_10.setTransform(318.225,-38.275);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(1,1,1).p("AhkgTQACgBAGgBIAAgEIAYgKAiPAEQAXgEAEAAQAYAAA7ASQA/ASAFABQgJAOgHACQgDABgTAAQghAAgzgLQgugLgSgKQABgCAAgCQABgDABgBQAEgHABgDgAhcgVQAUgFBDgLQBYgQANAAQAYAAAEABQADAAAeANQgEAKgTAKQgRAJgQADQgYAFgRACQgNAAgcAAQgyAAg9gNgAicAGQAIgBAFgB");
	this.shape_11.setTransform(318.325,-37.975);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhaArIg/gZQAAgBAAAAQAAgBABgBQAAAAAAgBQABAAAAAAIAFgKIAbgEQAYAAA7ASQA+ASAGABQgJAOgHACQgEABgSAAQghAAgzgLgAhfgNIAAgIQAUgFBCgLQBZgQANAAQAYAAADABQAEAAAeANQgFAKgSAKQgRAJgQADQgYAFgRACQgNAAgcAAQgzAAg8gNg");
	this.shape_12.setTransform(318.65,-37.975);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AhOAwIgIgCQAzALAhAAQATAAADgBQAHgCAJgOQgFgBg/gSQg7gSgYAAIgbAEIgNACIANgCIgFAKQAAAAAAAAQgBABAAAAQAAABAAABQgBAAAAABIgOgGQgmgOgwgaQgzgdgPgGQA+ASAuAAQArAABNgFQBMgFAvAAIBwgHQBZgHAiAAQAAABAAAAQAAABAAAAQAAAAABAAQAAABAAgBIABAAQAEABANAAIAagBIhFAoQgqAWgsANIhGAgQg5AYgeAAQgdAAg1gTgAgEgiQhDALgUAFIAAAIQA9ANAyAAQAcAAANgBQARgCAYgEQAQgDARgJQATgKAEgKQgegNgDAAQgEgBgYAAQgNAAhYAQgAhbgWIAAAEIgIACIAIgCIAAgEIAYgKg");
	this.shape_13.setTransform(318.225,-38.275);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FF0000").ss(4,1,1).p("Akzg/QBdANBKAMQABAAABAAQArAGBcAAQAsAABXgNQAHAAAIgCQA2gHBbgQIAUAAQg6A2gzAgQhUA3hAAAQiBAAg+gUQgugPgvgiQgHgEgGgEQgcgWgcgc");
	this.shape_14.setTransform(316.525,-40.875);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(1,1,1).p("AA1AMQgWADgTAAQgeAAgogTQAJADAMACQAsALAuAAgAg6gEQgPgHgQgKQgKgHgKgEQASARAhALgABJBEIAAgBQABAAAAAAQgBAAAAABgACvgIQAxgSAVgcQgHgRgbAFQgkAFgUAAQgEAAgEgBQgZgBgYAAQgWAAhWAFQhJAEglgCQAAAAAAABQgBABgCAAQACALAKAIIAAAAQABABABACQgxgbguAAQgHAAgcAKIAAAKIAAACQAHAHAFAGQAJALAGAHAhvgjQABABABABQAMAHANABAj0gsQADACACADQANANAMAMADbgBQADgGAEgGIggAAQgJACgKADQgeAIgoAFQgbAFgZACQA3AAA0gPQAIgCAHgD");
	this.shape_15.setTransform(314.575,-39.1318);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgGAoQAXgCAcgFQAogGAegIQgeAIgoAGQgcAFgXACQguAAgugLIgVgGQgPgHgQgKQgJgGgKgEQAKAEAJAGQAQAKAPAHQghgLgRgQIgDgDIADACQALAGAOABQgOgBgLgGIgDgCIAAAAQgJgIgCgLIACgBIACAAQArAGBcAAQAsAABXgNIAIABQATAAAkgFQAbgFAHARQgUAbgxASIgPAFQg0AQg2AAIAAAAgAisgHIAAAAg");
	this.shape_16.setTransform(320.625,-41.9318);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AhyAlQgugPgvghIgZgZIAAgKQAcgJAHAAQAugBAxAbQASASAhAKQAoATAeAAQATAAAWgCQA3gBA0gPIAPgEIATgGIAgAAIgHALQhVA3hAAAQiBAAg+gTg");
	this.shape_17.setTransform(313.875,-39.45);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FF0000").ss(4,1,1).p("AEMg/QADABAMAAQAKAAAQgBIhDAnQgpAWgrANQgoASgdANQg4AYgdAAQgdAAg0gSQgEgDgDgBQgngPgXgIQgIgDgGgDQglgOgvgaQgxgcgPgGQA8ASAtAAQAqAABLgFQBMgFAtAAQALAABjgHQBXgHAhAAQAEAAAEAAQgDAAgCACIgBAAQgCABAAgDQAAABADABg");
	this.shape_18.setTransform(318.3,-39.15);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(1,1,1).p("AhigTQACAAAGgBQAUgFBBgLQBWgQANAAQAXAAAEABQAEABAdAMQgFAKgSAJQgQAJgQADQgYAFgQACQgNAAgcAAQgxAAg7gNIAAgHIAAgEIAXgKAiMAEQAXgEADAAQAYAAA6ARQA9ASAFABQgJAOgGACQgEABgSAAQggAAgygLQgugLgRgJQABgCAAgCQABgDABgCQAEgHABgCgAiZAGQAHgBAGgB");
	this.shape_19.setTransform(318.425,-38.875);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhZAqIg9gYIACgFIAFgJIAagEQAXAAA6ARIBDATQgJAOgGACQgEABgSAAQghAAgygLgAhdgNIAAgHIBUgQQBXgQAMAAQAYAAAEABQADABAeAMQgFAKgTAJQgQAJgPADQgYAFgRACQgNAAgbAAQgxAAg7gNg");
	this.shape_20.setTransform(318.75,-38.875);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AhMAwIgIgEQAyAMAhAAQASAAADgBQAGgCAJgOIhCgTQg6gRgXAAIgaADIgOACIAOgCIgGAKIgBAFIgPgGQglgOgvgZQgxgdgPgGQA8ASAuAAQAqAABLgFQBLgFAtAAIBugHQBXgGAhgBQAAABAAAAQAAABAAAAQABABAAAAQAAAAABgBIABAAQADACANgBIAagBIhEAnQgpAWgrANIhFAfQg4AYgdAAQgdAAgzgSgAhZgSIAAAIQA8ANAwAAQAcAAANgBQAQgCAYgEQAQgDAQgJQATgKAEgKQgdgLgDgBQgFgCgXABQgMgBhXARIhVAPIAAgEIAYgJIgYAJIAAAEgAhhgQIAIgCIgIACg");
	this.shape_21.setTransform(318.3,-39.15);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FF0000").ss(4,1,1).p("AlAgyQBhALBNAKQABAAABAAQAtAEBgAAQAuAABagKQAIgBAIgBQA5gGBfgMIAUAAQg9Aqg0AaQhYArhDAAQiGAAhBgPQgwgMgxgbQgHgDgHgEQgdgRgdgW");
	this.shape_22.setTransform(317.625,-38.875);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(1,1,1).p("AhygbQASAOAjAJQgQgGgQgIQgKgFgLgEQgzgUgwAAQgHAAgdAHIAAAIQANAKANAKQBAAtAzALQAmAICSAAQABAAABAAQgCAAAAABIAAABQADADAegFQAlgFAkgOQAZgJAVgZQAEgFADgFIggAAQgKACgKACQAygPAWgWQgHgNgdAEQglADgUAAQgEAAgFAAQgZgBgaAAQgXAAhaAEQhMAEgngDQAAABAAABQAAAAgCAAQACAJAKAGIAAABQABAAABABgAg9gEQAKADAMABQAvAJAwAAQgXABgUAAQghAAgpgOgAh0gcQABAAABABQAMAFAOABABMA1IAAgBAj5ggIAAABQAHAGAFAFQAKAJAGAGAj/gkQADACADACAA4AJQA5AAA2gMQAIgCAIgCQggAGgpAEQgdAEgZACg");
	this.shape_23.setTransform(315.6,-37.3857);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhmAXIgWgFQgQgGgQgIIgVgIIAVAIQAQAIAQAGQgjgJgSgNIgCgBIACABQAMAEAOABQgOgBgMgEIgCgBIAAgBQgKgGgCgJIACAAIACAAQAtAEBgAAQAuAABagKIAJAAQAUAAAlgDQAdgEAHANQgWAVgyAPQggAGgpAFQgdAEgYACQgxAAgvgJgAAvAaQApgFAggGIgQAEQg2ANg4AAQAYgCAdgEgAizgFIAAAAg");
	this.shape_24.setTransform(321.925,-39.6957);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("Ah3AdQgvgMgygaIgagUIAAgIQAdgHAHAAQAxAAAzAVQASAOAjAJQApAOAgAAIArgCQA5AAA2gMIAQgEIAUgEIAhAAIgIAJQhXAshEAAQiGAAhBgQg");
	this.shape_25.setTransform(314.875,-37.725);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FF0000").ss(4,1,1).p("AlGgzQAZAEBjALQACABADAAQApAEAdAEQAQABALABQAZACAJAAQArAAAwgCQAxgDA4gGQCcgQAXgBIASAAIAAANQgiAqh+AaQhiAUhhACQgHAAgHAAQhKAAgugQAilAjQgHgCgHgDQg9gkg4ge");
	this.shape_26.setTransform(316.3,-40.55);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(1,1,1).p("AC9gwQgGAChyAJQgRADgegBQgKgCgMAAQgrgDgDAAQgkAAgUAFQgJACgFADQgEACgCADQAFAFAFADIACABQAKAHAKAFQANAHANAFQgQgKgGgGQgRgOgNgIQgHgEgGgEQgFgBgDgCQgQgFgzAAQgDAAgDAAQgbgCgLAAQgVAAgBAPQAHAAALAEQAFACAFABQABgBABABQADAAADgBQgCADAAADQAUAZAxAVQABABACAAQA1AXAyAAQAOAAAMgFQACgBACgCQAGgDAAgEQAAgDgYgOQgIgFgHgEQADABAEABQAcAJAkAAQBEAABOgSQBNgPApgXQgHgFgcgDQgXgDgXAAQgBAAAAAAQgBAAgBAAQABAAABAAQABAAAAAAAjwgaQACACACADAC9gwIAAAA");
	this.shape_27.setTransform(316.575,-39.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AiDAZIgHgCIgWgQQgRgNgNgJQAFgDAJgCIAiACQArAAAwgCQAeABARgCQBxgKAGgBIABgBQAXAAAXADQAcAEAHAFQgpAWhNAQQhOARhDAAQglAAgcgJgAikALIgUgMIgCgBIgKgIQACgDAEgCQANAJARANIAWAQQgNgFgNgHgAi+gPIAAAAg");
	this.shape_28.setTransform(323.975,-41.025);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#333333").s().p("Ag6A0IAAAAgAhHA0QhKAAgugQIgDAAQgxgWgUgYQAAgEACgCIgGAAIgBAAIgLgCQgLgFgGAAQAAgOAVAAIAmACIAGAAIAEAAIBHAIIAOAIQgFACgCACIAKAIIACABIAVAMQANAIAMAEIAHACQAcAJAmAAQBDAABOgRQBMgPApgXQgHgFgcgEQgXgCgXAAIgBAAIgBAAIABAAQgGAChyAJQgRACgdgBQAxgDA4gGICzgRIASAAIAAAOQgjAph9AaQhjAUhhACQAHgEAAgEQAAgCgZgPIgPgJIAPAJQAZAPAAACQAAAEgHAEIgNAAg");
	this.shape_29.setTransform(319.25,-40.55);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FF0000").ss(4,1,1).p("Aj9gyQAvAMB6AFQABAAAAAAQAAABAugIQAXgEAXgEQAFAAAmADQAQABAeAEQAWAAAvgGQAwgGAhAAIAQACQgVASgrATQgOAGgzARQgyAYgSAIQgbANgsAAQgjAAgvgNQgogKgfgNQgggOgcgUQgYgSgQgTQACABACABgAkDg0QABAAABAAQAAAAgBAAIAFACAkHg1QACAAACABIABAAQAAgBgBAAIAAAB");
	this.shape_30.setTransform(318.975,-40.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(1,1,1).p("Ag9gTQASACAdAJQAbAIAhAAQANAAAagHQAmgKAKgQQgTgFg3gCQgzgDgBAAQgRAAgVAGQgbAJgGAAIAAAEQAAACADADQACABAEABQAFACAKADAhwgCQAHAAAJgBQABAAABAAQCdAXAAALQAAAFgLAEQgJAEgGAAQgdAAg9gLQg5gKgWgHQACgIALgHQAEgBADgCgAiCAAQAHAAALgCAhFgUQAEAAAEAB");
	this.shape_31.setTransform(318.275,-40.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("Ag1AhQg5gKgWgHQACgIALgHIAIgCIAPgDIACABQCdAXAAALQAAAFgLAEQgJADgGABQgdAAg9gLgAgOgIQgdgJgSgCQgDgDAAgCIAAgDIAhgJQAVgHARAAIA0ACQA3AEATAEQgKAQgmAKQgaAHgNAAQghAAgbgIg");
	this.shape_32.setTransform(318.275,-40.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("AhZApQgogKgfgNQgggOgcgUQgZgSgPgSIAEABQAvANB6AEIABAAQAAABAugIIAugIIArADIAuAFQAWAAAvgGQAwgGAhAAIAQACQgVATgrASIhBAXIhEAgQgbANgsAAQgjAAgvgNgAh6ADIgHAEQgLAGgCAIQAWAHA5AKQA+ALAcAAQAGAAAJgEQALgEAAgEQAAgMidgYIgCAAIgQACgAgYgDQAbAHAhAAQANAAAagFQAmgKAKgQQgTgFg3gDIgzgCQgSAAgVAGIghAJIAAADQAAADADACIgIgBIAIABIAGACIAPAFIgPgFIgGgCQASADAdAIgAiMAEIASgBIgSABgAhHgOIAAAAg");
	this.shape_33.setTransform(319.2875,-40.625);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FF0000").ss(4,1,1).p("AkdggQAeAGA7AMQA/AOAQAHQAMAIAoAPQAFABAFACQAPAFANAEQAcAIAUAAIACAAAAZAyIAFgBQAsgBAOgNQAdgbAYgKQAUgIA1gGQBGgIAPgCQgUAAg5ADQgvADgcgCQgGAAg3gNQg3gNgKAAQgtAAgfARQggARhGAAQggAAgkgHQgtgJgPgCAkqgjQAFACAFABQABAAACAA");
	this.shape_34.setTransform(315.5,-40.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(1,1,1).p("AgDAKQAPAAARAAQASAAARgEQAWgFAAgGQAAgOgmgMQgigLgdAAQgNAAgUAMQgWAMgHANQAKAKAtADQAKABAJABQALABALACQAdAFAAALQAAAFgVAFQgPADgMABAgHArQgLgBgggGQgDAAgEgBQgcgGAAgCIAAgBIAAgKQAJgBASgDQAQgEAKAAQAGAAAEAAAgDArQgCAAgBAA");
	this.shape_35.setTransform(318.45,-39.725);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#333333").s().p("AAyAuQAVgFAAgFQAAgLgdgFIgXgDIAhAAQARAAASgEQAVgFAAgHQAAgNglgMQgigLgfAAQgLAAgVAMQgVAMgHAMQAJALAtADIgJAAQgLAAgPAEIgbAEIAAAKIgJgDQgogPgMgIQgQgHg/gOIhagSQAPACAtAJQAlAHAfAAQBGAAAggRQAfgRAuAAQAKAAA2ANQA3ANAHAAQAcACAugDQA5gDAVAAIhWAKQg0AGgUAIQgZAKgdAbQgOANgsABQAMAAAPgDg");
	this.shape_36.setTransform(316.15,-40.4125);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgGArIgBAAQgMgBgfgGIgHgBIgcgJIAAgKIAbgEQAPgEALAAIAKAAIATACIgTgCQgugDgJgKQAHgNAVgMQAVgMAMAAQAeAAAiALQAlAMAAAOQAAAGgVAFQgSAEgRAAIggAAIAWADQAdAFAAALQAAAFgVAFQgPADgMAAIgEABIgCAAg");
	this.shape_37.setTransform(318.45,-39.725);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FF0000").ss(4,1,1).p("AkggtQAWAEBYAKQACAAACAAQAlAEAZADQAOABAKABQAWACAIAAQAmAAAqgCQAsgDAxgFQCKgOAUgBIAQAAIAAAMQgeAkhvAXQhXAShWACQgGAAgGAAQhBAAgpgNQgIgDgHgEQg2gfgxga");
	this.shape_38.setTransform(318.725,-42.55);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(1,1,1).p("ACngqQgFAChlAIQgPACgagCQgJAAgLgBQglgCgDAAQggAAgSAEQgHACgFACQgGgDgGgDQgEgCgDgBQgOgEgtAAQgDAAgCAAQgZgDgKAAQgRABgBANQAGAAAJAEQAFABAFABQAAAAABAAQACAAADAAQgBACAAADQARAVAsATQAAABACAAQAwAVAsAAQAMAAAKgFQACgBACgCQAFgDAAgDQAAgCgVgNQgHgEgHgFQgNgIgGgFQgOgMgMgIQgDADgCACQAEAEAFADIABABQAJAGAJAFQAMAGAKADQAEACADABQAZAHAgAAQA8AABFgPQBEgNAjgUQgFgFgZgCQgUgEgVAAQAAAAgBAAAjUgXQACACACADACngqQACAAgBgBACngqIAAgBQAAAAgBAAQABABAAAAg");
	this.shape_39.setTransform(318.95,-41.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#333333").s().p("ABbAoQhBAAgogOIgCgBQgsgSgSgWIACgFIgFAAIgBAAIgKgCQgJgEgGAAQABgNASAAIAiACIAEAAIAFAAIA9AHIAMAHIgGAEIAJAHIACABIASALQALAGALAEIAOAIQAWANAAACQgBAEgFADIgMAAg");
	this.shape_40.setTransform(305.85,-41.95);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("Ah0AWIgGgCQgOgJgGgFQgOgLgMgIQAMAIAOALQAGAFAOAJQgLgEgMgHIgSgKIgBgBIgJgHIAFgEQAFgDAIgCIAdACQAnAAAqgCQAbABAPgCQBjgIAFgCIACAAQAUAAAUADQAZADAGAEQgkAUhEAOQhFAPg7AAQghAAgZgIg");
	this.shape_41.setTransform(325.5,-42.95);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FF0000").ss(4,1,1).p("Aj/gzIACABQAvAMB6AFQABAAAAAAQAAABAugIQAXgEAXgFQAFAAAmAEQAQABAeAEQAWAAAvgGQAwgGAhAAIAQABQgVATgrATQgOAGgzARQgyAYgSAIQgbAMgsAAQgjAAgvgMQgogKgfgOQgggNgcgUQgYgSgQgTQABABABAAgAkDg0QABAAABAAQAAAAAAAAQgBgBgBgBIAAACIACAAIACABAkHg2QACABACAB");
	this.shape_42.setTransform(317.175,-41.35);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(1,1,1).p("Ag9gTQASACAdAJQAbAIAhAAQANAAAagHQAmgKAKgQQgTgFg3gCQgzgDgBAAQgRAAgVAGQgbAIgGABIAAAEQAAACADADQACABAEABQAFACAKADAhvgCQAGAAAJgCQABAAABABQCdAXAAALQAAAFgLAEQgJAEgGAAQgdAAg9gLQg5gKgWgHQACgIALgHQAEgBAEgCgAhFgUQAEAAAEABAiCAAQAHAAAMgC");
	this.shape_43.setTransform(316.475,-40.75);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#333333").s().p("AhaApQgngKgggNQgfgOgcgUQgZgSgPgSIACABIACAAQAvANB5AEIACAAQAAABAugIIAugIIArADIAuAFQAWAAAvgGQAvgGAiAAIAQACQgVATgrASIhBAXIhEAgQgcANgrAAQgjAAgwgNgAiBAHQgLAGgDAIQAXAHA5AKQA+ALAcAAQAGAAAJgEQALgEAAgEQAAgMidgYIgDAAIgOACIgTABIATgBIgIAEgAgZgDQAcAHAhAAQANAAAagFQAmgKAKgQQgTgFg3gDIgzgCQgSAAgVAGIghAJIAAADQAAADADACIAGACIAPAFIgPgFIgGgCQASADAcAIgAhHgOIgIgBIAIABg");
	this.shape_44.setTransform(317.5,-41.275);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("Ag1AhQg5gKgWgHQACgIALgGIAIgEIAPgCIACABQCdAXAAALQAAAFgLAEQgJAEgGAAQgdAAg9gLgAgOgIQgdgIgSgEQgDgBAAgDIAAgDIAhgJQAVgHARABIA0ABQA3AEATAEQgKAQgmALQgaAGgNAAQghAAgbgIg");
	this.shape_45.setTransform(316.475,-40.75);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FF0000").ss(4,1,1).p("AlGgzQAZAFBjALQADAAACAAQAqAFAcADQAQABAMACQAZACAJAAQArAAAvgDQAygDA3gFQCcgQAXgCIASAAIAAAOQgiAph+AaQhiAUhhACQgHAAgHAAQhJAAgvgPAikAkQgIgDgHgDQg9gjg3ge");
	this.shape_46.setTransform(316.9,-39.15);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(1,1,1).p("AC9gwQgGAChyAJQgRADgegBQgKgCgMAAQgrgDgDAAQgkAAgUAFQgJACgFADQgHgEgGgEQgFgBgDgCQgQgFgzAAQgDAAgDAAQgbgCgLAAQgVAAgBAPQAHAAALAEQAFACAFABQABgBABABQACACACADQAUAZAxAVQABABACAAQA1AXAyAAQAOAAAMgFQACgBACgCQAGgDAAgEQAAgDgYgOQgIgFgHgEQgQgKgGgGQgRgOgNgIQgEACgCADQAFAFAFADIACABQAKAHAKAGQANAGANAFQADABAEABQAcAJAkAAQBEAABOgSQBNgOApgYQgHgFgcgDQgXgDgXAAQgBAAAAAAQgBAAgBAAQABAAABAAQABAAAAAAAjwgaQADAAADgBQgCADAAADAC9gwIAAAA");
	this.shape_47.setTransform(317.175,-38.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#333333").s().p("Ag5A0IAAAAgAhHA0QhKAAgugPIgDgCQgxgVgUgZQAAgDACgCIgGABIgCAAIgKgEQgKgDgIAAQACgPAUgBIAmACIAGAAIAEABIBHAIIANAHQgEADgBADIAKAIIABABIAUALQANAHANAFIAHACQAcAJAlAAQBEAABNgRQBNgPApgXQgHgFgbgDQgXgEgYAAIgBAAIgCAAIACABQgGABhyAKQgRACgcgBQAwgDA4gFQCcgRAWgBIASAAIAAANQgiAqh9AaQhjAUhgACQAFgEABgEQAAgCgYgOIgQgKIAQAKQAYAOAAACQgBAEgFAEIgOAAg");
	this.shape_48.setTransform(319.85,-39.15);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AiDAZIgHgCIgWgQQgRgNgNgJQAFgDAJgCIAiACQArAAAwgCQAeABARgCQBxgKAGgBIABgBQAXAAAXADQAcAEAHAFQgpAWhNAQQhOARhDAAQglAAgcgJgAikALIgUgMIgCgBIgKgIQACgDAEgCQANAJARANIAWAQQgNgFgNgHg");
	this.shape_49.setTransform(324.575,-39.625);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FF0000").ss(4,1,1).p("Aj/gzIACABQAvANB6AEQABAAAAAAQAAABAugIQAXgEAXgEQAFAAAmADQAQABAeAEQAWAAAvgGQAwgGAhAAIAQACQgVATgrASQgOAGgzARQgyAYgSAIQgbANgsAAQgjAAgvgNQgogKgfgNQgggOgcgUQgYgSgQgSQABAAABAAgAkDg0QABAAABABQAAgBAAAAIACABAkDg0IACAAQgBAAgBgBgAkHg1QACABACAA");
	this.shape_50.setTransform(318.725,-39.15);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(1,1,1).p("Ag9gUQASADAdAJQAbAIAhAAQANAAAagHQAmgKAKgQQgTgFg3gDQgzgCgBAAQgRAAgVAGQgbAIgGABIAAAEQAAACADACQACACAEABQAFABAKAEAiCAAQAHAAAMgCQAGAAAJgCQABAAABABQCdAWAAAMQAAAFgLAEQgJADgGAAQgdAAg9gKQg5gKgWgHQACgIALgHQAEgBAEgCAhFgVQAEABAEAA");
	this.shape_51.setTransform(318.025,-38.55);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#333333").s().p("AhaApQgngKgfgNQgggOgcgUQgZgSgPgSIACAAIACABQAvANB6AEIABAAQAAABAugIIAtgIIAsADIAuAFQAWAAAvgGQAwgGAhAAIAQACQgVATgrASIhBAXIhEAgQgcANgrAAQgjAAgwgNgAh5ADIgIAEQgLAGgCAIQAWAHA5AKQA+ALAcAAQAFAAAKgEQALgEAAgEQAAgMidgYIgCAAIgPACgAgYgDQAaAHAiAAQANAAAagFQAmgKAKgQQgUgFg2gDIg0gCQgRAAgVAGIgiAJIAAADQABADADACIAFACIAQAFIgQgFIgFgCQASADAdAIgAiMAEIATgBIgTABgAhHgOIgIgBIAIABg");
	this.shape_52.setTransform(319.05,-39.075);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("Ag1AhQg5gKgWgHQACgIALgHIAIgCIAPgCIACAAQCdAXAAAMQAAAEgLAEQgJADgGAAQgdAAg9gKgAgOgIQgdgJgSgCQgDgCAAgDIAAgEIAhgJQAVgFARgBIA0ADQA3ADATAEQgKARgmAJQgaAHgNAAQghAAgbgIg");
	this.shape_53.setTransform(318.025,-38.55);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(1,1,1).p("AkigQIAFAAIAhAAIAEAAQAEAAASADQACAAABAAQADABADAAQAkAFBMAKQBpAQAOAAQA9AABHgHQARgBASgCQAdgEAhgIQASgFAegK");
	this.shape_54.setTransform(314.825,-42.225);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FF0000").ss(4,1,1).p("AkkABQAUADCmAWQA7AIBQAAQArAAAcABQARAABAgIQAVgDAhgPQACgBACgBQANgGATgIQABAAABAAIATgEIABgBQAAgBABAAQgEgDgCgCQAEgCAFgCAjqgNQABAAABAAQACAAACABQAvALANABQApAGAoAKQAXAGApAAQBcAABBgKQAHgBAGgBQBAgKBDgaQAJgEAJgEQg2AThdAJQhSAHhcAAQhCAAhDgGQhFgIgtgOAkbgeQADAKARADQABABACAAQAIABAPABAkkgZIgDAAQAAAEgCAEQAAAAAAABQgDAFAAACQAAADABABAEegPQADgCADgBQgIgFgGgDAEVgIQAHgDAIgEIgGAAAEVgIQABgBABAAQADgDAEgDAEVgHQAAgBAAAAADvAJQAOgCAFgCQAHgEAMgIACwARQAPgEAhgCQAIgBAHgB");
	this.shape_55.setTransform(315.95,-42.175);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(1,1,1).p("AC8gqQgNAMgXAIQgXAIgaACQgfAEgUABQgdADgXAAQgbAAhQgOQg9gMgRgCQAFANARATQAUAWAaAVQAeAXAbANQAgAPAXAAQAgAAAegNQAYgKAdgWQAHgFATgSQASgTAFgFIAQgUQAJgNAEgLQAAgBAAgBQABAAABAAQgBABgBABgAi5gjQArgWBAgRQAUgFASgEQAsgKAjAAQAbAAATAFQAGACAHADQAIADAIAFQAYANAGADQAUAJAYAGAi5ggQgDgBgBAAQAAgBACgBQABgBABAAQABgBAAAAIgBAAQAAAAAAABIAAABQAAABAAACg");
	this.shape_56.setTransform(318.7,-40.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#CC3333").s().p("Ag8BPQgcgNgdgXQgcgVgTgWQgRgTgFgOIAAgCQAsgWA/gSIAlgJQAtgJAjAAQAbAAATAFIAMAEIARAJIAfAQQATAJAYAGIgBACQgMALgYAJQgVAHgbADIg0AFQgcACgWAAQgcABhPgOIhPgPIBPAPQBPAOAcgBQAWAAAcgCIA0gFQAbgDAVgHQAYgJAMgLQgDALgJANIgQATIgXAZQgTASgHAEQgdAXgYAKQgeANggAAQgXAAgfgPg");
	this.shape_57.setTransform(318.8,-40.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(1,1,1).p("AA1AMQgWADgTAAQgeAAgogTQgPgHgQgKQgKgHgKgEQASARAhALQAJADAMACQAsALAuAAQA3AAA0gPQAIgCAHgDQgeAIgoAFQgbAFgZACgACvgIQAxgSAVgcQgHgRgbAFQgkAFgUAAQgEAAgEgBQgZgBgYAAQgWAAhWAFQhJAEglgCQAAAAAAABQgBABgCAAQACALAKAIIAAAAQABABABABQAMAHANABAhvgjQABABABACQgxgbguAAQgHAAgcAKIAAAKQANANAMAMAjvgnIAAACQAHAHAFAGQAJALAGAHAj0gsQADACACADADbgBQADgGAEgGIggAAQgJACgKADABJBEIAAgBQABAAABAAQgCAAAAABg");
	this.shape_58.setTransform(316.775,-38.8318);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AhiAdIgVgGQgPgHgQgKQgJgGgKgEQAKAEAJAGQAQAKAPAHQghgLgRgQIgCgDIACACQALAGAOABQgOgBgLgGIgCgCIgBAAQgJgIgCgLIACgBIACAAQArAGBcAAQAsAABXgNIAIABQATAAAkgFQAbgFAHARQgUAbgxASQgeAIgoAGQgcAFgXACQguAAgugLgAAtAhQAogGAegIIgPAFQg0AQg2AAQAXgCAcgFg");
	this.shape_59.setTransform(322.825,-41.6318);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#333333").s().p("AhyAlQgugPgvghIgZgZIAAgKQAcgKAHAAQAuABAxAaQASASAhAKQAoATAeAAQATAAAWgDQA3ABA0gQIAPgEIATgGIAgAAIgHAMQhVA3hAAAQiBAAg+gUg");
	this.shape_60.setTransform(316.075,-39.15);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAygCIhBAAQgBAAgBAAQgPACgPAAIgEAAAgPAAIggAAAA0ADQgdgBgQAA");
	this.shape_61.setTransform(301.85,-43.625);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(1,1,1).p("AjYgnQAEAbBSALQAuAFA7AAQAYAAAngEQAogDAaAAQASAAAjgLQAxgQAJgCIAAgBQABgBABAAQgSgBgkABQghACgCAAQhaAAgmgJQgngJg4AAQgQAAgsAGQgsAFgRAAgAiIAVQAbgHAXAAQAPAAAVAKQASAJAGAHIAAACAhVAzIAAAAAgaAwIAAAA");
	this.shape_62.setTransform(316.9,-39.9125);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#FF0000").ss(4,1,1).p("Agvg7QAzAAAXAFQAWAEAQAEQACABABAAQAMADAcAAQAhAAAogFQAWgCAwgFIAkAAIAAAZIAAAAQABALgRALQgVANgGAEQAAAAAAABQgkAdghALQgzARiRAAQgNAAgjgIAgvg7QANACAPACQA3AHAdACQAQACAIAAQAqAABGgJQBGgJAeAAAhjg7QAKAAAkAAQAEAAACAAAhng7QADAAACAAQAAAAgBAAAhng7IAEAAQgCAAgBACQgBAAAAgCgAhTA4QgCAAgDgBAhIA7QgBAAgBAAAhcA2QgCgBgDAAAhkA0QgEgBgEgBQg8gPgFgDQgLgHgrgdQglgagMgJQgEgCgCgBAkwg1QAGAABLgGQBMgIAbAAQANAAA8AIAkUgnQAHgJAYgEQAHgBAogDQA1gDAqAAAExgxQgJAKgJAKQgWAXgVAQ");
	this.shape_63.setTransform(315.55,-40.45);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AhNAyIAAAAIgBAAIAAAAIgCAAIAAABIAAAAIgBgBIAAgBIgBAAIgBABIAAAAIgBABIAAgBIgBAAIAAABIAAAAIAAgBIAAAAIgBgBIABAAIAAgBIAAgBIgCAAIgEABIAAAAIAAAAIgBAAIAAgBIgBAAIAAAAIgBAAIgBgBIAAAAIAAAAIgBgBIgBAAIAAABIgCAAIgCAAIAAgBIgCAAIAAgEIAAAAIgEAAIgEABIAAgBIACAAIABAAIABgBIAAAAIAAgBIgBAAIgCAAIAAAAIgBAAIAAgBIACAAIAAgBIgBgBQgBAAAAAAQgBAAAAAAQAAAAAAABQgBAAAAABIAAAAIgBgBQgCgBgFAAIgBgBIgGAAIABAAIgDgBIAAgBIgEAAIAAgBIgCAAIAAgBIAAAAIAAgCIAAgDIACgBIAAgBIgCAAIAAgBIAAAAIAAAAIAAgBIABAAIAAAAIgBgBIAAAAIAAAAQAbgHAXAAQAPAAAVAKQASAIAGAHIAAADIgBAAIgBABIAAAAIgBABIAAACIgEACIgkABIAAABIgFABIAAgBIgDABgAhqArIAAgBIABAAIAAABgAhxAoIAAAAIABAAIgBAAgAiCgBQhSgLgEgcQARAAAsgFQAsgFAQAAQA4AAAnAJQAmAIBaAAIAjgBQAkgCASABIgCABIgBABQgIACgyAQQgiALgSAAQgaAAgoAEQgnAEgYAAQg7AAgugFgAhhghIgtgCIAtACgAilglIggAAgAjFglQAPAAAPgCIACgBIBBAAIhBAAIgCABQgPACgPAAIgFAAg");
	this.shape_64.setTransform(316.9,-39.8875);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#333333").s().p("AhKA4IACAAIAAAAIABAAIAAAAIABAAIAAAAIAAAAIABAAIADAAIAAAAIAFgBIACAAIADgBIADAAIAAAAIAAAAIAAgBIAXAAIADgBIACABIAFgCIACABIAAgBIABAAIAAgBIAAAAIABgBIABgBIgBgBIABAAIAAgBIAAgBIAAAAIgCgBIAAAAIAAgCQgGgIgSgIQgVgKgPAAQgYAAgaAHIAAgBIgCAAIAAABIAAAAIAAABIAAAAIAAABIgBAAIAAACIABAAIAAAAIgBABIAAAGIABACIACAAIAAAAIACABIACAAIAAAAIABABIAAAAIAGABIACAAIgCABIgBABIADABIABABIACABQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIACAAIABABIACABIAAAAIAAABIgIgCQg8gPgFgDQgLgHgrgdIgxgiQAHgKAYgDQAHgCAogDQA1gDAqAAQAAABAAAAQAAABAAAAQABAAAAAAQAAAAAAAAIADgCIAvABIAGAAIAbADQA3AHAdADIADAAQAMADAcAAQAiAAAngEIBGgIIAkAAIAAAZQgVAYgVAQIgBAAQgjAdgiALQgyARiRAAQgOAAgjgIgAiSgrQgsAFgRABQAEAbBSAKQAuAGA7AAQAXAAAogEQAogEAaABQASAAAigMQAxgPAJgDIABgBIACgBQgSAAgkABIgkABQhZABgngJQgmgJg4AAQgQAAgsAFgAhPA3IABAAIACAAIgDAAgAhIA2IAAAAIAAAAIAAAAgAhNA1IABAAIAAAAgAhdA0IAAgBIgBgBIAAgBIACABIAAAAIAAABIABAAIAAAAIABABIAAAAIACABIgFgBgAhUA0IgBAAIAAAAIABAAIAAAAIAAAAgAhhAzIgFgCIAAAAIAAgBIgBAAIABAAIAEAAIACAAIAAADgAhiAuIACAAIAAABgAhqAtIABAAIAAAAg");
	this.shape_65.setTransform(316.0375,-40.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(1,1,1).p("AilAcQANAAAfACQASAAAmALQAfAJAVAJIAAABQABABABAAQgdAFgFAAQgaAAgrgNQgtgOgGgLgAjQg9QASAKAyARQA5AVASAAQA+AABYgPQBfgQAdgSIAAgEIgZAAQhEARhbAAQg+AAgfgCQh1gIgXgCgAirAcQACAAAEAA");
	this.shape_66.setTransform(317.55,-39.05);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AhyA1QgtgOgGgLIAsACQASAAAlALQAgAKAUAIIABABIABABIghAFQgbAAgqgNgAiNghQgxgSgSgJICLAKQAgABA+AAQBbAABEgRIAZAAIAAAEQgdAShfAQQhYAQg/gBQgRAAg6gUg");
	this.shape_67.setTransform(317.55,-39.05);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#333333").s().p("AixAsQg8gkg9haQAfAKAigBIA0gCQAKAAApAHQApAHAVAAICFgCQA2AAARgEQAkgLA1gHIBKAAQgVBGhLAvQhTA2hwAAQhzAAhGgqgAiXAkQAFALAtAOQArANAaAAIAhgFIgBgBIAAgBQgVgJgfgJQgmgLgRAAIgsgCIgHgBIAHABgAh/gaQA5AVASAAQA9AABagPQBegQAegSIAAgEIgZAAQhFARhbAAQg+AAgfgCIiMgKQASAKAyARg");
	this.shape_68.setTransform(316.2,-39.825);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#FF0000").ss(4,1,1).p("AERhAQAEABAMAAQAAAAABAAQAKAAAQgBIhFAoQgqAWgsANQgpATgdANQg5AYgeAAQgJAAgLgCQgagEgkgNQgFgBgDgBQgXgJgRgHQgNgFgKgEQgJgDgFgDQgmgOgwgaQgzgdgPgGQAYAHAWAEQAiAHAcAAQAWAAAegCQAegBAmgCQAVgBASgBQAxgDAjAAQALAABlgHQAVgCARgBQAVgBAQgBQAfgCARAAQAEAAADAAQgCAAgDACgAEPhCQAAABACABIgBAAQgBABAAgDg");
	this.shape_69.setTransform(316.125,-39.125);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(1,1,1).p("AhcgVQACAAADgBQAXgFA7gKQA9gLAZgEQALgBAEAAQAEAAAEAAQAQAAAEABQADAAAbAMQACAAABABQgEAKgTAKQgRAJgQADQgYAFgRACQgNAAgcAAQgyAAg9gNIAAgIIAAgEIAYgKAhkgTQACgBAGgBAiPAEQAXgEAEAAQAYAAA7ASQA/ASAFABQgJAOgHACQgDABgTAAQgCAAgDAAQgggBgvgKQglgJgTgIQgEgCgEgCQABgCAAgCQABgDABgBQAEgHABgDgAicAGQAIgBAFgB");
	this.shape_70.setTransform(316.225,-38.825);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgLA2QgggBgvgKIgpgQIgWgJQAAgBAAAAQAAgBABgBQAAAAAAgBQABAAAAAAIAFgKIAagEQAZAAA7ASQA/ASAEABQgIAOgHACQgDABgTAAIgFAAgAhfgNIAAgIIAFgBQAWgFA8gKQA9gLAZgEIAPgBIAIAAIATABQAEAAAbALIADACQgEAKgUAKQgQAJgQADQgZAFgQACQgNAAgdAAQgxAAg9gNg");
	this.shape_71.setTransform(316.55,-38.825);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#333333").s().p("AgQBCQgagFgkgNIgIgCQAvAKAgABIAFAAQATAAADgBQAHgCAJgOQgFgBg/gSQg7gSgYAAIgbAEIgNACIANgCIgFAKQAAAAAAAAQgBABAAAAQAAABAAABQgBAAAAABIgOgGQgmgOgwgaQgzgdgPgGQAYAHAWAEQAiAHAcAAIA0gCIBEgDIAngCQAxgDAjAAIBwgHIAmgDIAlgCIAwgCQAAABAAAAQAAABAAAAQAAAAABAAQAAAAAAAAIABAAQAEABAMAAIABAAIAagBIhFAoQgqAWgsANIhGAgQg5AYgeAAQgJAAgLgBgAhbgKQA9ANAyAAQAcAAANgBQARgCAYgEQAQgDARgJQATgKAEgKIgDgCQgbgLgDAAIgUgBIgIAAIgOABQgaAEg9ALQg7AKgXAFIgFABIAAgEIAYgKIgYAKIAAAEIgIACIAIgCgAiOAHIAAAAgAhbgSg");
	this.shape_72.setTransform(316.125,-39.125);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(1,1,1).p("AilAcQANABAfABQASAAAmALQAfAJAVAJIAAACQABAAABAAQgdAFgFAAQgaAAgrgNQgtgNgGgMgAjQg8QASAJAyARQA5AVASAAQA+AABYgPQBfgQAdgSIAAgDIgZAAQhEAQhbAAQg+AAgfgBQh1gJgXgBgAirAcQACAAAEAA");
	this.shape_73.setTransform(317.8,-37.25);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AhyA1QgtgOgGgLIAsACQARAAAmALQAgAKAVAIIAAABIABABIgiAFQgaAAgqgNgAiMghQgygSgSgJICMAKQAfABA+AAQBaAABFgRIAZAAIAAAEQgdAShfAQQhYAQg/gBQgRAAg5gUg");
	this.shape_74.setTransform(317.8,-37.25);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#333333").s().p("AixAsQg9gkg9haQAgAKAigBIA0gCQALAAAoAHQAqAHAUAAICGgCQA1AAARgEQAkgLA1gHIBLAAQgWBGhLAvQhTA2hwAAQhzAAhGgqgAiXAkQAFALAtAOQArANAaAAIAhgFIgBgBIAAgBQgVgJgfgJQgmgLgRAAIgsgCIgHgBIAHABgAh/gaQA5AVASAAQA+AABZgPQBfgQAcgSIAAgEIgYAAQhFARhaAAQg/AAgfgCIiLgKQARAKAyARg");
	this.shape_75.setTransform(316.45,-38.025);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#FF0000").ss(4,1,1).p("AERhAQAEABAMAAQAAAAABAAQAKAAAQgBIhFAoQgqAWgsANQgpATgdANQg5AYgeAAQgJAAgLgBQgagFgkgNQgFgBgDgBQgXgJgRgHQgNgFgKgEQgJgDgFgDQgmgOgwgaQgzgdgPgGQAYAHAWAEQAiAHAcAAQAWAAAegBQAegCAmgCQAVgBATgBQAwgDAjAAQALAABlgHQAVgCARgBQAVgBAQgBQAfgCARAAQAEAAADAAQgCAAgDACIgBAAQgBABAAgDQAAABACABg");
	this.shape_76.setTransform(317.625,-39.525);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(1,1,1).p("AhcgVQACAAADgBQAXgFA7gKQA9gLAagEQAKgBAEAAQAEAAAEAAQAQAAAEABQADAAAbAMQACAAABABQgEAKgTAKQgRAJgQADQgYAFgRACQgNAAgcAAQgyAAg9gNIAAgIIAAgEIAYgKAhkgTQACgBAGgBAiPAEQAXgEAEAAQAYAAA7ASQA/ASAFABQgJAOgHACQgDABgTAAQgCAAgDAAQgggBgvgKQglgJgSgIQgFgCgEgCQABgCAAgCQABgDABgBQAEgHABgDgAicAGQAIgBAFgB");
	this.shape_77.setTransform(317.725,-39.225);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgLA2QgggBgwgKIgngQIgXgJQAAgBAAAAQABgBAAgBQAAAAAAgBQABAAAAAAIAFgKIAbgEQAYAAA7ASQA+ASAGABQgKAOgGACQgEABgSAAIgFAAgAhfgNIAAgIIAFgBQAWgFA7gKIBXgPIAPgBIAIAAQAQAAAEABQADAAAbAMIADABQgEAKgTAKQgRAJgQADQgZAFgQACQgNAAgdAAQgxAAg9gNg");
	this.shape_78.setTransform(318.05,-39.225);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#333333").s().p("AgQBCQgagFgkgNIgIgCQAvAKAgABIAFAAQATAAADgBQAHgCAJgOQgFgBg/gSQg7gSgYAAIgbAEIgNACIANgCIgFAKQAAAAAAAAQgBABAAAAQAAABAAABQgBAAAAABIgOgGQgmgOgwgaQgzgdgPgGQAYAHAWAEQAiAHAcAAIA0gBIBEgEIAogCQAwgDAjAAIBwgHIAmgDIAlgCIAwgCQAAABAAAAQAAABAAAAQAAAAABAAQAAABAAgBIABAAQAEABAMAAIABAAIAagBIhFAoQgqAWgsANIhGAgQg5AYgeAAIgUgBgAhbgKQA9ANAyAAQAcAAANgBQARgCAYgEQAQgDARgJQATgKAEgKIgDgBQgbgMgDAAQgEgBgQAAIgIAAIgOABIhXAPQg7AKgXAFIgFABIAAgEIAYgKIgYAKIAAAEIgIACIAIgCgAiOAHIAAAAgAhbgSg");
	this.shape_79.setTransform(317.625,-39.525);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#FFFFFF").ss(1,1,1).p("AA0ADQgdgBgQAAAAygCIhBAAQAAAAgCAAQgPACgPAAIgEAAAgPAAIggAA");
	this.shape_80.setTransform(303.2,-42.375);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#FF0000").ss(4,1,1).p("Agvg7QANACAPACQA3AHAdADAgvg7QA0AAAWAFQAWAEAQAFQABAAABAAIAAAAQAAAAABAAQAMADAcAAQAiAAAngFQAXgCAvgFIAkAAIAAAZQgVAWgUAQIAAABIgBAAQgBABAAAAQgjAdgiALQgyARiRAAQgOAAgjgIAhjg7QAKAAAlAAQADAAACAAAhng7QACAAAEAAQgCAAAAAAAhng7IAEAAQgBAAgCACQgBAAAAgCgAkwg1QAGAABMgGQBLgIAbAAQANAAA8AIAhIA7QAAAAgBAAAhTA5QgCgBgDgBAhcA2QgCAAgDgBAhkA0QgEgBgEgBQg8gPgFgDQgLgHgrgdQglgagMgIQgEgEgCAAAkUgmQAHgKAYgEQAHgBAogDQA1gDAqAAAExgxQgJAKgJAKQABALgQALQgUALgGAFABDgtQAOABAIAAQAqAABGgJQBGgJAeAA");
	this.shape_81.setTransform(316.9,-39.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(1,1,1).p("AjYgjQAEAbBSALQAuAGA7AAQAYAAAngEQAogFAaAAQASAAAigKQAygQAIgCIABgBQABgBABAAQgSgBgkACQghABgCAAQhaAAgmgJQgngIg4AAQgQAAgsAFQgsAFgRAAgAiHAaQAZgHAYAAQAPAAAVAKQASAIAGAHIAAAC");
	this.shape_82.setTransform(318.25,-39.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AhNAyIAAAAIgBAAIAAAAIgCAAIAAABIAAAAIgBgBIAAgBIgBAAIgBABIAAAAIgBABIAAgBIgBAAIAAABIAAgBIAAAAIgBgBIABAAIAAgBIAAgBIgCAAIgEABIAAAAIAAAAIgBAAIAAgBIgBAAIAAAAIgCAAIAAgBIAAAAIAAAAIgBgBIgBAAIAAABIgCAAIgCAAIAAgBIgCAAIAAgEIAAAAIgEAAIgEABIAAgBIACAAIABAAIABgBIAAAAIAAgBIgBAAIgCAAIAAAAIgBAAIAAgBIACAAIAAgBIgBgBQgBAAAAAAQgBAAAAAAQAAAAAAABQgBAAAAABIAAAAIgBgBQgCgBgFAAIgBgBIgGAAIABAAIgDgBIAAgBIgEAAIAAgBIgCAAIAAgBIAAAAIAAgCIAAgDIACgBIAAgBIgCAAIAAgBIAAAAIAAgBIABAAIAAAAIgBgBIAAAAQAbgHAXAAQAPAAAVAKQASAIAGAHIAAADIgBAAIgBABIAAAAIgBABIAAACIgEACIgkABIAAABIgFABIAAgBIgDABgAhqArIAAgBIABAAIAAABgAiCgBQhSgLgEgcQARAAAsgFQAsgFAQAAQA4AAAnAJQAmAIBaAAIAjgBQAkgCASABIgCABIgBABQgIACgyAQQgiALgSAAQgaAAgoAEQgnAEgYAAQg7AAgugFgAhhghIgtgCIAtACgAilglIggAAgAjFglQAPAAAPgCIACgBIBBAAIhBAAIgCABQgPACgPAAIgFAAg");
	this.shape_83.setTransform(318.25,-38.625);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#333333").s().p("AhKA4IACAAIABAAIABAAIAAAAIAJgBIABAAIAEAAIACAAIABgBIgBAAIAAgBIAcAAIAGgCIACABIAAgCIAAAAIAAAAIACgBIAAgBIAAgBIAAAAIAAgBIABAAIgBgBIgBgBIgBAAIAAgDQgFgGgTgJQgUgKgQAAQgXAAgaAHIAAgBIgCAAIAAABIAAAAIAAABIAAAAIAAABIgBAAIAAACIACABIgBAAIgBAAIAAAGIABACIACAAIAAABIABAAIADAAIAAAAIABABIgBAAIAGABIACAAIgCABIAAABIACAAIACACIACABQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIABABIABAAIACABIABAAIAAABIgIgCQg8gPgFgDQgLgGgrgdIgxgjQAHgKAYgDQAHgCAogDQA0gDArAAQAAABAAAAQAAAAAAABQAAAAABAAQAAAAAAAAIADgBIAvAAIAFAAIAcADIBUAKIABAAIABAAIABAAQAMADAcAAQAiAAAngEIBFgIIAlAAIAAAZQgVAXgUAPIAAABIgBABIgBABQgjAcgiALQgyARiSAAQgNAAgjgIgAiSgrQgsAFgSABQAEAbBTAKQAuAGA6AAQAXAAAogEQAogEAbABQARAAAjgMQAxgQAJgCIABgBIABgBQgRAAglABIgjABQhaABgngJQglgJg5AAQgQAAgrAFgAhPA3IABAAIACAAIgDAAgAhJA3IAAgBIABAAIAAABgAhdA0IAAgBIgBgBIAAgBIACABIABABIAAAAIABABIAAAAIACABIgFgBgAhVA0IAAAAIABAAIAAAAIAAABgAhlAxIgBAAIAAgBIAEAAIABAAIAAACIgEgBgAhiAuIABAAIAAABgAhqAtIABAAIAAABg");
	this.shape_84.setTransform(317.4,-38.85);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(1,1,1).p("AjQg8QASAJAyASQA5AUASAAQA+AABYgPQBfgPAdgTIAAgDIgZAAQhEARhbAAQg+AAgfgCQh1gJgXgBgAilAcQANABAfACQASAAAmAKQAfAKAVAJIAAABQABABABAAQgdAFgFAAQgaAAgrgOQgtgNgGgMgAirAcQACAAAEAA");
	this.shape_85.setTransform(318.05,-36.85);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#333333").s().p("AixAsQg8gkg+haQAfAKAjgBIA0gCQAKAAAqAHQApAHAUAAICGgCQA1AAAQgEQAlgLA1gHIBLAAQgWBGhLAvQhTA2hwAAQhzAAhGgqgAiYAkQAGALAtAOQArANAaAAIAhgFIgBgBIAAgBQgVgJgfgJQgmgLgSAAIgsgCIgGgBIAGABgAh/gaQA6AVARAAQA+AABYgPQBfgQAdgSIAAgEIgZAAQhEARhaAAQg/AAgfgCIiLgKQARAKAyARg");
	this.shape_86.setTransform(316.7,-37.625);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AhyA1QgtgNgGgMIAsACQASAAAlAMQAfAIAWAKIAAABIABABIgiAEQgaAAgqgNgAiMgiQgygRgSgKICMAKQAfACA+ABQBaAABFgRIAZAAIAAADQgdAThfAQQhYAPg/AAQgRAAg5gWg");
	this.shape_87.setTransform(318.05,-36.85);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#FF0000").ss(4,1,1).p("AjqgNQABAAABAAQACAAACABQAvALANABQAoAGApAKQAXAGApAAQBbAABCgKQAHgBAGgBQBAgKBDgaQAJgEAJgEQg2ATheAJQhRAHhcAAQhCAAhDgGQhFgIgugOAklABQAVADCmAWQA7AIBQAAQArAAAbABQASAABAgIQAVgDAggPQADgBACgBQANgGATgIQABAAAAAAQAAgBABAAQABgBAAAAQAEgDAEgDQACgCAEgBQgIgFgGgDAkbgeQADAKARADQABABABAAQAJABAPABAklgZIgCAAQAAAEgCAEQAAAAAAABQgDAFAAACQAAADABABAEVgIQAHgDAHgEIgFAAAEUgHIAUgEIAAgBQABgBABAAQgEgDgCgCQAEgCAFgCADuAJQAPgCAFgCQAHgEALgIACwARQAPgEAggCQAJgBAGgB");
	this.shape_88.setTransform(318.8,-42.575);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(1,1,1).p("Ag8gRQASADAcAJQAbAHAiAAQANAAAagGQAhgJALgNAh6AHQABgCACgBQAEgCAEgCQAHAAAIgBQABAAACABQBxAQAgALAiBACQAHAAALgCAg/gTQABABACABQACACADABQAFABALAEAhEgTQADACAFAA");
	this.shape_89.setTransform(317.9875,-39.7125);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#FF0000").ss(4,1,1).p("Aj+gzIABABQAvAMB6AFQABAAAAAAQAAABAugIQAXgEAXgFQAFAAAmAEQAQABAeAEQAWAAAvgGQAwgGAhAAIAQABQgVATgrATQgOAGgzARQgyAYgSAIQgIAEgJACAAxAwQgLADgNACAANA2QgIAAgJAAQgjAAgvgMQgagGgWgIAiTAXQgFgCgFgDQgggNgcgUQgYgSgQgTQABABACAAAkBg0IADABAkBg0QgBgBgBgBIAAACgAkBg0QAAAAAAAAAkDg0QABAAABAAAkHg2QACABACAB");
	this.shape_90.setTransform(318.725,-40.05);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AAXApIgFAAIAAAAIAAAAIgBAAQAAgBAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAIgGAAIAAABIgCAAIgCgBIgEgBIgCAAQgBgBgEAAIgHAAIgCgBIgGAAIAAAAIgBAAIgBgBIgEAAIgBgBIgDAAIgBABIAAgBIgGgBQgKAAgLgDIgPgDIgKgBIgFgBIgBAAIgKgDQgIgGgEgBIgLgBIgDAAIACgCIABgBIgBgCIAAgCIABAAIAAgDIgBAAIADgDIAIgDIAPgCIADABQBxAQAgALIgBAAIAAACIABABIAAAAIAGACIACABIAAABIgBABIgBABIgCACIgCACIgBABIgBgBIgUAEIgCABIgEgBgAgRgIQgcgJgSgDIgDgCQAMABANgGIAdgLIAMgDIACABIAFABIAFAAIAGACQAIACAQAAIAUAAIAFgBQABAAAAAAQABAAAAgBQABAAAAAAQAAgBAAAAIANADQATAEAYACIACABQgMANghAIQgaAHgNAAQgiAAgbgIg");
	this.shape_91.setTransform(318.2625,-39.425);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#333333").s().p("AhaApQgZgGgWgIIABAAQAGgBADABQAGABAJAGQAFACAKADQAGACABgDIAPADIAcAGQAFABACgBIAHAAQACABAGAAIABAAIACABIADAAIAGAAIABAAIABABQAEACAEgCIAAgBIAAABQABABAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQAEACADgBIADABIgRABQgjAAgwgNgAAWA0IACgBIARgDIABgBIACABIACAAQgLADgNABgAAwAuIABgBIACgCIACgCIABAAIABgCIAAgBIABAAIAAgFIgBAAIgCgCIgBgBIgCAAIgBgBIgFgBIgDABIAAAAQgggLhxgRIgCAAIgPACIgTABIATgBIgIAEIgEACIAAAAIgDgBIgBAAIgBACIgBAAIAAABIgBABIgEACIgBACIgBAAIgCAEIgBACIgBAAIgKgEQgggOgcgUQgZgSgPgSIADABIABAAQAvANB6AEIABAAQAAABAugIIAtgIIAsADIAuAFQAWAAAvgGQAwgGAhAAIAQACQgVATgrASIhBAXIhEAgIgRAGIABgBgAhZgcQgBADABADQACAEAHABIABABIAFAAIADACQASADAdAIQAaAHAiAAQANAAAagFQAhgJAMgNQAFAAAAgDQABgEgGgBIhEgMIgXgCQgfgCgSAFIgYAJQgPAGgKACQgFABgEgCIgEgDQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAIgBAAQAAAAgBAAQAAAAgBAAQAAABAAAAQgBABAAAAgAhCgMIAQAFIgQgFIgFgCIAFACgAhHgOQgEgBgEgBQAEABAEABgAh5ADIAAAAg");
	this.shape_92.setTransform(319.05,-39.975);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#FFFFFF").ss(1,1,1).p("AA0ADQgdgBgQAAAAygCIhBAAQgBAAgBAAQgPACgPAAIgEAAAgPAAIggAA");
	this.shape_93.setTransform(305.1,-42.225);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(1,1,1).p("AjYgjQAEAcBSAKQAuAGA7AAQAYAAAngEQAogFAaAAQASAAAjgKQAxgQAJgCIAAgBQABgBABAAQgSgBgkACQghABgCAAQhaAAgmgJQgngIg4AAQgQAAgsAFQgsAFgRAAgAiHAaQAagHAXAAQAPAAAVAKQASAIAGAHIAAAD");
	this.shape_94.setTransform(320.15,-38.95);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#FF0000").ss(4,1,1).p("Agvg7QAzAAAXAEQAVAEARAFQABABAAgBQAPABAIAAQAqAABGgIQBGgJAeAAAgvg7QANABAPACQA3AHAdADAhjg7QAKAAAkAAQADAAADAAAhng8QACAAADAAQgBABAAAAQgCAAgBABQgBABAAgDIAEABAhcA2QgCgBgDAAAhTA4QgDgBgCAAAhIA7QgBAAAAgBAhkA0QgEgBgEgBQg8gQgFgDQgLgGgrgdQglgagMgJQAGgJAZgEQAHgCAogCQA0gEArAAAkwg1QAGAABLgHQBMgHAbAAQANAAA8AIAD1AJIgBABQAAAAAAABQgkAdghALQgzARiRAAQgOAAgigJAkUgnQgEgDgCgBAExgyQgJALgJAKQgVAXgVAPABCguQABABABAAQAMACAcAAQAhAAAogEQAWgCAwgGIAkAAIAAAaQABALgRALQgUAMgGAE");
	this.shape_95.setTransform(318.8,-39.05);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#333333").s().p("AhKA4IACAAIABABIABAAIAAgBIAJAAIACgBIADAAIACAAIABgCIgBAAIAAAAIAcgBIAGgBIACAAIAAgBIAAAAIAAAAIACgBIAAgBIAAgBIAAAAIAAgBIABAAIgBgCIgBAAIgBAAIAAgDQgFgGgSgJQgVgKgPAAQgYAAgaAHIgBgBIgBAAIAAABIAAAAIAAABIAAAAIAAAAIgBABIAAACIACABIgBAAIgBAAIAAAGIABABIABABIAAABIACAAIADAAIAAABIABAAIAAABIAFAAIACABIgCAAIAAABIACAAIACACIACABQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIABABIABABIACAAIABAAIAAACIgIgCQg8gQgFgDQgLgGgrgdIgxgjQAHgJAYgFQAHgBAogCQA1gEAqAAQAAABAAAAQAAAAAAABQAAAAABAAQAAAAAAAAIADgCIAvAAIAFAAIAcAEIBUAKIABAAIACAAQAMADAcAAQAiAAAngEIBGgIIAkAAIAAAaQgVAWgVAQIAAAAIgBABQgjAdgiAMQgzAQiRAAQgOAAgigIgAiSgqQgtAEgRAAQAEAcBTAKQAtAGA7AAQAXAAAogEQAogDAbgBQASABAigMQAxgPAJgDIAAAAIACgBQgRgBglABIgjABQhaAAgngIQgmgJg3AAQgRAAgrAGgAhPA3IABAAIACABIgDgBgAhJA3IAAgCIABAAIAAACgAhdAzIAAAAIgBgBIAAgBIACABIAAABIABAAIAAAAIABAAIACACIgFgCgAhVA0IAAgBIABAAIAAABIAAAAgAhlAxIgBAAIAAgBIAEABIABAAIAAABIgEgBgAhiAvIABAAIAAAAgAhqAtIABAAIAAABg");
	this.shape_96.setTransform(319.3,-38.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AhNAyIAAAAIgBAAIAAAAIgCAAIAAABIAAAAIgBgBIAAgBIgBAAIgBABIAAAAIgBABIAAgBIgBAAIAAABIgBgBIAAAAIAAgBIAAAAIABgBIAAgBIgCAAIgDABIgBAAIAAAAIgBAAIAAgBIgBAAIAAAAIgCAAIAAgBIAAAAIAAAAIgBgBIgBAAIAAABIgCAAIgCAAIAAgBIgCAAIAAgEIAAAAIgEAAIgEABIAAgBIACAAIABAAIABgBIAAAAIAAgBIgBAAIgCAAIAAAAIgBAAIAAgBIACAAIAAgBIgBgBQgBAAAAAAQgBAAAAAAQAAAAAAABQgBAAAAABIgBAAIAAgBQgCgBgFAAIgBgBIgGAAIABAAIgDgBIgBgBIgDAAIAAgBIgBAAIAAgBIgBAAIAAgCIABgDIABgBIAAgBIgCAAIAAgBIABAAIAAgBIAAAAIAAAAIAAgBIAAAAQAZgHAYAAQAPAAAVAKQASAIAGAHIAAADIgBAAIAAABIgBAAIgBABIAAACIgEACIgkABIAAABIgFABIAAgBIgDABgAhqArIAAgBIABAAIAAABgAiCgBQhSgLgEgcQARAAAsgFQAsgFAQAAQA4AAAnAJQAmAIBaAAIAjgBQAkgCASABIgCABIAAABQgJACgyAQQgiALgSAAQgaAAgoAEQgnAEgYAAQg7AAgugFgAhhghIgtgCIAtACgAilglIggAAgAjFglQAPAAAOgCIADgBIBCAAIhCAAIgDABQgOACgPAAIgFAAg");
	this.shape_97.setTransform(320.15,-38.475);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#FF0000").ss(5,1,1).p("AkqhSQAeAKAjgBQATAAAhgCQAKAAApAHQAqAHAUAAICGgCQA1AAARgEQAkgLA1gHIBKAAQgVBGhLAvQhTA2hwAAQhzAAhHgqQg8gkg8hag");
	this.shape_98.setTransform(318.8,-39.025);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(1,1,1).p("AjQg8QASAJAyARQA5AVASAAQA+AABYgPQBfgQAdgSIAAgDIgZAAQhEAQhbAAQg+AAgfgBQh1gJgXgBgAilAcQANABAfABQASAAAmALQAfAJAVAKIAAAAQABABAAAAQgcAFgFAAQgbAAgqgNQgtgNgGgMgAisAcQADAAAEAA");
	this.shape_99.setTransform(320.15,-38.25);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#333333").s().p("AixAsQg9gkg9haQAgAKAigBIA0gCQALAAAoAHQApAHAVAAICGgCQA1AAARgEQAkgLA1gHIBKAAQgVBGhLAvQhTA2hwAAQhzAAhGgqgAiXAkQAGALAsAOQArANAaAAIAhgFIgBgBIAAgBQgVgJgfgJQgmgLgRAAIgsgCIgHgBIAHABgAh/gaQA5AVASAAQA9AABagPQBfgQAcgSIAAgEIgYAAQhFARhbAAQg+AAgfgCIiMgKQASAKAyARg");
	this.shape_100.setTransform(318.8,-39.025);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AhyA1QgtgNgGgMIAsADQASgBAlALQAgAJAUAJIABABIABABIghAGQgaAAgrgOgAiMghQgygSgSgJICLAKQAgABA+AAQBbAABEgRIAZAAIAAAEQgdAShfAQQhYAPg/AAQgRAAg5gUg");
	this.shape_101.setTransform(320.15,-38.25);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#FF0000").ss(4,1,1).p("Aj+gzIABABQAvAMB6AFQABAAAAAAQAAABAugIQAXgEAXgFQAFAAAmAEQAQABAeAEQAWAAAvgGQAwgGAhAAIAQABQgVATgrATQgOAGgzARQgyAYgSAIQgbAMgsAAQgjAAgvgMQgogKgfgOQgggNgcgUQgYgSgQgTQABABACAAgAkBg0IADABAkBg0QAAAAAAAAQgBgBgBgBIAAACIACAAAkHg2QACABACABQABAAABAA");
	this.shape_102.setTransform(318.825,-39.05);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").ss(1,1,1).p("Ag9gTQASACAdAJQAbAIAhAAQANAAAagHQAmgKAKgPQgTgFg3gDQgzgCgBAAQgRAAgVAFQgbAJgGABIAAADQAAACADADQACABAEABQAFACAKADAhvgCQAGAAAJgBQABAAABAAQCdAXAAAMQAAAEgLAEQgJAEgGAAQgdAAg9gLQg5gKgWgHQACgIALgGQAEgCAEgCgAiCAAQAHAAAMgCAhFgUQAEAAAEAB");
	this.shape_103.setTransform(318.125,-38.45);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("Ag1AhQg5gKgWgHQACgIALgHIAIgDIAPgBIACAAQCdAXAAAMQAAAEgLAEQgJADgGAAQgdAAg9gKgAgOgIQgdgJgSgDQgDgCAAgCIAAgEIAhgJQAVgFARgBIA0ADQA3ACATAGQgKAQgmAJQgaAHgNAAQghAAgbgIg");
	this.shape_104.setTransform(318.125,-38.45);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#333333").s().p("AhZApQgogKgfgNQgggOgcgUQgZgSgPgSIADABIABAAQAvANB6AEIABAAQAAABAugIIAtgIIAsADIAtAFQAXAAAvgGQAwgGAhAAIAQACQgVATgrASIhBAXIhEAgQgbANgsAAQgjAAgvgNgAh6ADIgIAEQgKAGgCAIQAWAHA5AKQA+ALAcAAQAGAAAJgEQALgEAAgEQAAgMidgYIgCAAIgQACgAgYgDQAbAHAhAAQANAAAagFQAmgKAKgQQgUgFg2gDIg0gCQgRAAgVAGIgiAJIAAADQABADADACIgIgBIAIABIAFACIAQAFIgQgFIgFgCQASADAdAIgAiMAEIASgBIgSABgAhHgOIAAAAg");
	this.shape_105.setTransform(319.15,-38.975);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(1,1,1).p("ABQgGQgHgKgbgIQgigLgeAAQgNAAgUALQgWANgGAMQAJAKAuAEQAJAAAKABQAOABASAAQAGAAAHgBAhJAVQAFgBAIgCQAPgDALAAQAGAAAEAAAAtAkIAAAAAgFAQQALABAKACQAMACAHAD");
	this.shape_106.setTransform(319.2375,-40.875);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#FF0000").ss(4,1,1).p("AkegiQAfAGA7AMQA/ANAQAIQAMAHAoAPQADABACABAhEAgQAFAGAjAHQAiAHAWAAQAbAAAagRQAJgGAIgGQAFgFAFgDQASgOAPgFQAUgJA0gFQBHgIAPgDQgUAAg5ADQgvADgcgCQgGAAg3gNQg3gNgKAAQgtAAgfASQggARhGAAQggAAgkgHQgtgJgQgCAkqglQAFABAFABQABAAABABABSAkQADgCADgCQAFgFAFgE");
	this.shape_107.setTransform(316.05,-40.65);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgWApIgWgFIgLgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIgFgBIgKAAIgBABIgBgBIgBgBIgCgCIgCABIAAgBQAAAAABgBQAAAAAAgBQAAAAgBgBQAAgBgBAAIgEAAIgBgEIADAAIAGAAIABgBIABAAQAAAAABAAQAAAAAAAAQAAAAABAAQAAgBAAAAIAAgCIAAAAIANgDQAPgDALgBIAKAAIATACIgTgCQgugDgJgJQAGgNAWgNQAUgMANABQAeAAAiALQAbAIAIAKIgBAAQABAIgCACIgDACQgHAEgFABIgGgBQgBAAgBAAQAAAAgBAAQAAAAgBABQAAAAAAAAIgCAAIgDgBIAAABIgEABIAAABIAAAAIAAAAIgDABIgBABIAAABIgOAAIggAAIAVADQAMACAHADIgCABIAAADIABABIAGACIACAAIAAAAIABADIADACIAAAAIgCAAQgJADgIADIgIAEIgMABg");
	this.shape_108.setTransform(318.9167,-40.35);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#333333").s().p("ABLArIAAAAIARgMIgLAJIgGAEIAAgBgABHAqIAAAAIABAAQABAAAAAAQABAAAAgBQABAAAAgBQAAAAAAgBIAAgBIgDgHIAAgDIgCgCIgDgBQgBAAAAAAQAAAAgBAAQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAAAABQAAAAAAABQABAAAAAAIACABIAAABIgBAAIgEgCIgBABQgHgDgLgCIgXgDIAhAAIAOAAIAAABIABABIABABIABAAIABgBIABAAQABAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAgBIABgBIABABIACAAIAEgBIAFAAIAJAAIAGgCIAHgFIAEgDIABgGQAAgEgBgBIgEgCQAAAAgBAAQAAABAAAAQgBAAAAAAQAAAAAAABQgIgKgbgJQgigLgfAAQgLAAgVAMQgWAMgGAMQAJALAtADIgJAAQgKAAgQAEIgNACIgGgBIgFABIgDAAIgBABIgCgBIgCABIgBADIAAADIACAEIgFgCQgogPgMgIQgQgIg/gNIhagSQAPACAuAJQAjAHAgAAQBGAAAggRQAggRAsAAQALAAA2ANQA3ANAHAAQAcACAugDQA6gDAUAAIhWAKQg0AGgUAHQgQAHgRANIgKAJIgRAMIgEgBg");
	this.shape_109.setTransform(316.7,-41.4375);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#FF0000").ss(4,1,1).p("Agvg7QANABAPACQA3AHAdADQABAAAAAAIABAAIABABQAMACAcAAQAhAAAogEQAWgCAwgGIAkAAIAAAaQABALgRALQgSAKgGAFIgBABIgCABQAAAAAAABQgkAdghALQgzARiRAAQgOAAgigJAgvg7QAzAAAXAEQAVAEARAFAhjg7QAKAAAkAAQADAAADAAAhng8QACAAADAAQgBABAAAAQgCAAgBABQgBABAAgDIAEABAhcA2QgCgBgDAAAhIA7QgBAAAAgBAhTA4QgDgBgCAAAhkA0QgEgBgEgBQg8gQgFgDQgLgGgrgdQglgagMgJQAGgJAZgEQAHgCAogCQA0gEArAAAkwg1QAGAABLgHQBMgHAbAAQANAAA8AIAkUgnQgEgDgCgBAExgyQgJALgJAKQgUAWgUAPABDguQAOABAIAAQAqAABGgIQBGgJAeAA");
	this.shape_110.setTransform(318.8,-39.55);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#333333").s().p("AhKA4IACAAIABAAIABAAIAAAAIAJgBIACAAIADgBIACAAIABAAIgBAAIAAgBIAcAAIAGgCIACABIAAgBIAAAAIAAgBIACgBIAAgBIAAgBIAAAAIAAgBIABgBIgBAAIgBgBIgBAAIAAgCQgFgIgSgIQgVgKgPAAQgYAAgaAHIgBgBIgBAAIAAABIAAAAIAAABIAAAAIAAABIgBAAIAAACIACAAIgBAAIgBABIAAAGIABACIABAAIAAAAIACABIADAAIAAAAIABABIAAAAIAFABIACAAIgCABIAAABIACABIACABIACABQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIABAAIABABIACABIABAAIAAABIgIgCQg8gPgFgDQgLgHgrgdIgxgiQAHgKAYgDQAHgCAogDQA1gDAqAAQAAABAAAAQAAABAAAAQAAAAABAAQAAAAAAAAIADgBIAvAAIAFAAIAcADIBUAKIABAAIABAAIABAAQAMADAcAAQAiAAAngEIBGgIIAkAAIAAAZQgUAWgUAQIgBABIgBABIgBABQgjAcgiALQgzARiRAAQgOAAgigIgAiSgrQgtAFgRABQAEAbBTAKQAtAGA7AAQAXAAAogEQAogEAbABQASAAAigMQAxgPAJgDIAAgBIACgBQgRAAglABIgjABQhaABgngJQgmgJg3AAQgRAAgrAFgAhPA3IABAAIACAAIgDAAgAhJA2IAAAAIABAAIAAAAgAhdA0IAAgBIgBgBIAAgBIACABIAAABIABAAIAAABIABAAIACABIgFgBgAhVA0IAAAAIABAAIAAAAIAAABgAhlAxIgBAAIAAgBIAEAAIABAAIAAADIgEgCgAhiAuIABAAIAAABgAhqAtIABAAIAAAAg");
	this.shape_111.setTransform(319.3,-39.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#FF0000").ss(4,1,1).p("AkkABQAUADCmAWQA7AIBQAAQArAAAcABQARAABAgIQAVgDAhgPQAOgCAFgCQAHgEAMgIQAAgBAAAAQAHgDAIgEIgGAAQADgCADgBQgHgFgHgDQAJgEAJgEQg2AThdAJQhSAHhcAAQhCAAhDgGQhFgIgtgOAjqgNQABAAABAAQACAAACABQAvALANABQApAGAoAKQAXAGApAAQBcAABCgKQAGgBAGgBQBAgKBDgaAkkgZIgDAAQAAAEgCAEQAAAAAAABQgCAFAAACQAAADAAABAkbgeQAEAKAQADQABABACAAQAIABAPABAEVgHIATgEIABgBQAAgBABAAQgDgDgDgCQAEgCAFgCAEVgIQABgBABAAQADgDAEgDADvAJQACgBACgBQANgGATgIQABAAABAAACwARQAPgEAhgCQAIgBAHgB");
	this.shape_112.setTransform(318.9,-42.425);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(1,1,1).p("Ag+gPQASADAdAJQAaAHAiAAQANAAAagGQAjgJAMgPAhxACQAHAAAIgCQABAAACABQByARAgALAh3AFQADgCADgBAiDAEQAHAAALgCAhEgRQABABACABQABAAACAAAhAgQQABAAABABQACACADABQAFABALAEACEgcIAAAAIAAAA");
	this.shape_113.setTransform(318.25,-39.9625);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#FF0000").ss(4,1,1).p("Aj+gzIABABQAvAMB6AFQABAAAAAAQAAABAugIQAXgEAXgFQAFAAAmAEQAQABAeAEQAWAAAvgGQAwgGAhAAIAQABQgVATgrATQgOAGgzARQgyAYgSAIQgLAFgOADAAmAzQgBAAAAAAAAdA0QgPACgSAAQgjAAgvgMQgcgHgXgJAiMAZQgJgDgIgEQgggNgcgUQgYgSgQgTQAAAAAAAAQgBgBgBgBIAAACIACAAIADABAkHg2QACABACABQABAAABAAQABABACAA");
	this.shape_114.setTransform(318.825,-40.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AAlApQgJgCgbAAIgCAAIgEgBIgkgFQgJAAgCgBQgFgCgBAAIgBABIgBAAIgCAAIgIgDQgGgCgCgCIgCgDIgDgBIgLgBIgNAAQgIAAgFgCIgJgCIABgBIAAgCIABgCIADgBIABAAIAEgBIABgDIgBgBIgDgBIABgBQAAgBAAAAQABAAgBAAQAAgBAAAAQAAAAAAAAIAGgCIAPgCIADAAQByAQAfALIAAACIAGAEIABACIAAABIABABIgBABIgEABIgFABIgFACIgBADIgDAAgAhfAYIABAAIgBABIAAgBgAgSgJQgcgIgSgDIgCgCIAAAAIABgCIAAgBIABAAIAAgBIAKgCIANgDIARgHIAGgCQACACAGAAIATgBQANgBAHABIAIACIAmADQAAAAAAAAQABAAAAAAQABAAAAAAQABAAABAAIABgDIADAAQAAAAABAAQABgBAAAAQAAAAAAAAQABgBAAAAIAAAAIARAEQALADAIgBIAAAAIABABIABABQAAAAAAAAQABAAAAABQABAAAAgBQABAAABAAIAAAAQgLAOgjAKQgaAGgNAAQgiAAgbgIgACBghIABAAIgBAAg");
	this.shape_115.setTransform(318.4875,-39.4125);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#333333").s().p("AhZApQgcgHgXgIIAAgBIADACIANADIARAAIABAAIgBACQgBAAAAAAQAAABAAAAQAAAAAAABQABAAAAAAIACABQAJAEAFgBIACgBIABgBIABAAIAHADIAHADIAFAAIAAABIAKAEIAQABIARABIAEAAIAKABIADABIAAAAIAiABQgQACgRAAQgjAAgvgNgAAiAyIAAAAIgBABIABgBgAAoAwIADgBQAHgBAFgDQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAAAgBgBQAAgBAAAAQAAgBgBAAQAAAAgBgBIgCgCIgGgDIgCAAIgCACIAAABQgfgMhygRIgCAAIgQACIgSABIASgBIgGADIgCgBQgBAAAAAAQgBAAgBAAQAAAAgBABQAAAAAAAAIgDACIAAABIgCAAIgBACIABADIgDAFIAAACIgBABQgBAAAAAAQAAABAAAAQAAABAAAAQABAAAAABIgRgHQgggOgcgUQgZgSgPgSIADABIABAAQAvANB6AEIABAAQAAABAugIIAtgIIAsADIAtAFQAXAAAvgGQAwgGAhAAIAQACQgVATgrASIhBAXIhEAgQgLAFgPAEgAgfggIgRAHIgNADIgKACIAAABIAAAAIAAABIgCACIAAAAIACACQASADAdAIQAbAHAhAAQANAAAagFQAjgKALgOIABAAIAAgBIABgBIAAAAIAAAAIAAAAIgBgBQgBgDgDgBIAAABIgDAAIgBACIAAACIABAAIAAAAQgIABgLgDIgRgEIAAAAQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgCAAIgCADQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAIgmgDIgIgCQgHgBgMABIgUABQgFAAgDgCIgGACgAhCgMIAQAFIgQgFIgFgCIAFACgAhKgPIADABIgDgBIgDgBIADABgAh6ADIAAAAg");
	this.shape_116.setTransform(319.15,-40.025);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(1,1,1).p("AjQg8QASAJAyARQA5AVASAAQA+AABYgPQBfgQAdgSIAAgDIgZAAQhEAQhbAAQg+AAgfgBQh1gJgXgBgAilAcQANABAfABQASAAAmALQAfAJAVAJIAAABQABABAAAAQgcAFgFAAQgbAAgqgNQgtgOgGgLgAisAcQADAAAEAA");
	this.shape_117.setTransform(320.15,-38.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AhyA1QgtgOgGgLIAsACQASABAlAKQAgAKAUAIIABACIABABIghAEQgaAAgrgNgAiMgiQgygRgSgKICLAKQAgACA+AAQBbABBEgSIAZAAIAAAEQgdAShfARQhYAOg/AAQgRABg5gWg");
	this.shape_118.setTransform(320.15,-38.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#FF0000").ss(4,1,1).p("AkegiQAfAGA7AMQA/ANAQAIQAMAHAoAPQADABACABAhFAgQAGAGAjAHQAhAHAXAAQAbAAAagRQAIgFAIgGIABgBQAFgEAFgEQASgOAPgFQAUgJA0gFQBHgIAPgDQgUAAg5ADQgvADgcgCQgHAAg2gNQg3gNgKAAQgtAAgfASQggARhGAAQggAAgkgHQgtgJgQgCAkrglQAFABAGABQABAAABABABSAlQADgCADgDQAEgEAFgE");
	this.shape_119.setTransform(315.6,-40.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(1,1,1).p("AgYAVQAJAAAJABQAPABARAAQAHAAAIgBAhJAbQAFgBAHgCQAQgDALAAQAGAAAEAAAgGAWQAMABAKACQAMACAGADABRAAQgIgKgbgIQgigLgeAAQgNAAgUALQgWANgHAMQAKAKAuAE");
	this.shape_120.setTransform(318.8,-41.225);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#333333").s().p("ABLArIgDgBQABAAAAAAQABgBAAAAQABAAAAgBQAAAAAAgBIAAgBIgDgHIAAgDIgCgCIgDgBQgBAAAAAAQAAAAgBAAQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAAAABQAAAAAAABQABAAAAAAIACABIAAABIgBAAIgEgCIgBABQgHgDgMgCIgWgDIAhAAIAOAAIAAABIABABIABABIABAAIABgBIABAAQABAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAgBIABgBIABABIADAAIADgBIAFAAIAJAAIAGgCIAHgFIAEgDIACgGQgBgEgBgBIgEgCQAAAAAAAAQgBAAAAABQAAAAgBAAQAAAAAAABQgIgKgbgJQgigLgfAAQgLAAgVAMQgVAMgHAMQAJALAtADIgJAAQgLAAgPAEIgNACIgGgBIgFABIgDAAIgBABIgCgBIgCABIgBADIAAADIACAEIgFgCQgogPgMgIQgQgIg/gNIhagSQAPACAuAJQAjAHAgAAQBGAAAggRQAggRAsAAQALAAA2ANQA3ANAGAAQAdACAugDQA6gDAUAAIhWAKQg0AGgUAHQgPAHgSANIgKAJIgCABIgPALIAPgLIgJAIIgFAEIgBgBg");
	this.shape_121.setTransform(316.25,-41.175);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgWApIgWgFIgLAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIgFgBIgKAAIgBABIgBgBIgBgBIgCgCIgCABIAAgBQAAAAABgBQAAAAAAgBQAAAAgBgBQAAgBgBAAIgEAAIgBgEIADAAIAGAAIABgBIABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABgBAAAAIAAgBIAAgBIANgDQAPgDALgBIAKAAIATACIgTgCQgugDgJgKQAGgNAWgMQAUgMANAAQAeAAAiAMQAbAIAIAKIgBAAQABAIgCADIgDABQgHAEgFABIgGgBQgBAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAABIgCgBIgDgBIAAABIgEABIAAACIAAgBIAAABIgDAAIgBABIAAABIgOAAIggAAIAVADQAMACAHADIgCABIAAADIABABIAGADIACAAIAAgBIABADIADACIgCAAQgJACgIAEIgIADIgMACg");
	this.shape_122.setTransform(318.475,-40.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#FF0000").ss(4,1,1).p("Aj+gzIABABQAvAMB6AFQABAAAAAAQAAABAugIQAXgEAXgFQAFAAAmAEQAQABAeAEQAWAAAvgGQAwgGAhAAIAQABQgVATgrATQgOAGgzARQgyAYgSAIQgIADgJADAANA2QgIAAgJAAQgjAAgvgMQgagHgWgIAAxAwQgLADgNACAiSAXQgGgCgFgDQgggNgcgUQgYgSgQgTQABABACAAAkHg2QACABACABQABAAABAAQAAAAAAAAQgBgBgBgBIAAACIACAAIADAB");
	this.shape_123.setTransform(318.825,-39.6);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(1,1,1).p("Ag9gRQASADAdAJQAbAGAhAAQANAAAagFQAhgJAMgMAh7AGQACgBACgBQAEgDAEgBQAGAAAJgBQABAAABABQByAPAfALAiCABQAHAAAMgBAg/gTQABABABABQACACAEABQAFABAKAEAhEgTQADABAEAB");
	this.shape_124.setTransform(318.1,-39.25);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#333333").s().p("AhZApQgagGgWgIIABAAQAGgBADABQAFABAKAGQAEACALADQAGACACgCIAOACIAcAGQAFABACgBIAHAAIAIABIABAAIABABIAEAAIAGAAIABAAIABABQAEACAEgCIAAAAIAAAAQABABAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQAEACADgBIADABIgRABQgjAAgvgNgAAYAzIASgDIAEAAQgLADgNABIACgBgAAwAuIABgBIACgCIACgCIABAAIABgCIAAgBIABAAIAAgFIgBAAIgCgCIgBgBIgCAAIgBgBIgEgBIgEABIAAAAQgggLhxgRIgCAAIgQACIgSABIASgBIgIAEIgDACIAAAAIgDgBIgBAAIgBACIgBAAIAAACIgBAAIgEACIgBACIgBAAIgCAFIgBABIAAAAIgLgEQgggOgcgUQgZgSgPgSIADABIABAAQAvANB6AEIABAAQAAABAugIIAtgIIAsADIAtAFQAXAAAvgGQAwgGAhAAIAQACQgVATgrASIhBAXIhEAgIgRAHIABgCgAhZgcQgBADABADQACAEAHABIACABIAEAAIADACQASADAdAIQAbAHAhAAQANAAAagFQAhgJAMgNQAFAAABgDQAAgEgGgBIhEgMIgXgCQgfgCgSAFIgYAJQgPAGgKACQgFABgEgCIgEgDQAAAAAAAAQgBgBAAAAQgBAAAAAAQAAAAgBAAIgBAAQAAAAgBAAQAAAAgBAAQAAABAAAAQgBABAAAAgAhCgMIAQAFIgQgFIgFgCIAFACgAhHgOIgHgCIAHACgAh6ADIAAAAg");
	this.shape_125.setTransform(319.15,-39.525);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AAXAoIgFAAIAAABIAAAAIgBgBQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgGAAIAAAAIgCABIgCgCIgEAAIgCAAQgBgCgEABIgHAAIgCgBIgGAAIAAAAIgBAAIgBgBIgEAAIgBgCIgDABIgBABIAAgBIgGgBQgKAAgLgEIgPgCIgKgBIgFgCIgBABIgKgEQgIgFgEgCIgLgBIgDABIACgCIABgBIgBgCIAAgCIABgBIAAgCIgBgBIADgCIAIgDIAPgCIADAAQBxARAgAKIgBABIAAACIABABIAAAAIAGACIACABIAAABIgBAAIgBABIgCADIgCACIgBABIgBgBIgUAEIgCABQAAAAgBgBQAAAAAAAAQgBAAgBAAQAAgBgBAAgAgRgIQgcgJgSgDIgDgCQALABAOgGIAdgMQAGgBAGgBIACAAIAFACIAFAAIAGACQAIACAQAAIAUAAIAFgBQABAAAAAAQABgBAAAAQABAAAAAAQAAgBAAAAIANADQATAEAYACIACAAQgMAOghAIQgaAHgNAAQgigBgbgHg");
	this.shape_126.setTransform(318.375,-38.95);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#000000").ss(1,1,1).p("Ai5gjQArgWBAgSQAUgFARgEQAkgHAcgCQAIAAAIAAQAJAAAIAAQAQACANADQAGACAHACQAIAEAIAFQAYANAGADQAUAJAYAFQABAAABAAQgCACAAABQAAgBAAgCAC8gqQgNAMgYAIQgWAHgaADQggADgUACQgcACgXAAQgbAAhQgOQg9gLgRgDQAFAOARATQAUAVAaAWQAdAWAcAOQAgAPAXAAQAgAAAegNQAYgKAdgWQAHgFATgTQASgSAFgGIAQgTQAJgNAEgLgAi6gkQACgBAAAAIgCAAQAAAAAAABIABABQAAABAAABQgDgBgBAAQAAgBACAAQABgBAAAAg");
	this.shape_127.setTransform(318.8,-40.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#CC3333").s().p("Ag8BPQgcgOgdgWQgcgVgTgWQgRgTgFgOIBPAPQBPANAcAAQAWAAAcgCIA0gFQAbgCAWgIQAXgJANgLQgNALgXAJQgWAIgbACIg0AFQgcACgWAAQgcAAhPgNIhPgPIAAgDQArgVBAgRIAlgJQAkgIAcgBIAQgBIARABQAQABANADIANAFIAQAIIAfAQQATAJAYAFIAAADQgEALgJANIgQATIgXAZQgTARgHAFQgdAXgYAKQgeANggAAQgXAAgfgPg");
	this.shape_128.setTransform(318.9,-40.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#000000").ss(1,1,1).p("Ag8gRQASADAcAJQAbAHAiAAQANAAAagGQAhgJALgNAh6AHQABgCACgBQAEgCAEgCQAHAAAIgBQABAAACABQBxAQAgALAiBACQAHAAALgCAg8gRQACACADABQAFABALAEAg/gTQABABACABAhEgTQADACAFAA");
	this.shape_129.setTransform(317.9875,-39.7125);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#FF0000").ss(4,1,1).p("Aj+gzIABABQAvAMB6AFQABAAAAAAQAAABAugIQAXgEAXgFQAFAAAmAEQAQABAeAEQAWAAAvgGQAwgGAhAAIAQABQgVATgrATQgOAGgzARQgyAYgSAIQgIAEgJACAAxAwQgLADgNACAANA2QgIAAgJAAQgjAAgvgMQgagGgWgIAiTAXQgFgCgFgDQgggNgcgUQgYgSgQgTQAAAAAAAAIADABAkDg0IACAAQgBgBgBgBIAAACQABAAABAAQABABACAAAkHg2QACABACAB");
	this.shape_130.setTransform(318.725,-40.05);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#FF0000").ss(4,1,1).p("Agvg7QANABAPACQA3AHAdADQABABAAgBQABABABAAQAMACAcAAQAhAAAogEQAWgCAwgGIAkAAIAAAaQABALgRALQgUAMgGAEIgBABQAAAAAAABQgkAdghALQgzARiRAAQgOAAgigJAgvg7QAzAAAXAEQAVAEARAFAhng8IAEABQgCAAgBABQgBABAAgDQACAAADAAQgBABAAAAQAKAAAkAAQADAAADAAAhcA2QgCgBgDAAAhTA4QgDgBgCAAAhIA7QgBAAAAgBAhkA0QgEgBgEgBQg8gQgFgDQgLgGgrgdQglgagMgJQAGgJAZgEQAHgCAogCQA0gEArAAAkwg1QAGAABLgHQBMgHAbAAQANAAA8AIAkUgnQgEgDgCgBAExgyQgJALgJAKQgVAXgVAPABCguQAPABAIAAQAqAABGgIQBGgJAeAA");
	this.shape_131.setTransform(318.8,-39.05);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#FF0000").ss(4,1,1).p("Agvg7QAzAAAXAEQAVAEARAFQABAAAAAAIABAAQAOABAIAAQAqAABGgIQBGgJAeAAAgvg7QANABAPACQA3AHAdADAhjg7QAKAAAkAAQADAAADAAAhng8QACAAADAAQgBABAAAAQgCAAgBABQgBABAAgDIAEABAhcA2QgCgBgDAAAhTA4QgDgBgCAAAhIA7QgBAAAAgBAhkA0QgEgBgEgBQg8gQgFgDQgLgGgrgdQglgagMgJQAGgJAZgEQAHgCAogCQA0gEArAAAkwg1QAGAABLgHQBMgHAbAAQANAAA8AIAD2AJIAAAAIgCABQAAAAAAABQgkAdghALQgzAQiRAAQgOAAgigIAkUgnQgEgDgCgBAExgyQgJALgJAKQgVAWgUAQABDguQAAABABAAQAMACAcAAQAhAAAogEQAWgCAwgGIAkAAIAAAaQABALgRALQgTALgGAF");
	this.shape_132.setTransform(318.8,-38.55);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#333333").s().p("AhKA4IACAAIABAAIABAAIAAAAIAJgBIACAAIADgBIACAAIABgBIgBAAIAAAAIAcAAIAGgCIACABIAAgBIAAAAIAAgBIACgBIAAgBIAAgBIAAAAIAAgBIABgBIgBgBIgBAAIgBAAIAAgCQgFgIgSgIQgVgKgPAAQgYAAgaAHIgBAAIgBAAIAAAAIAAAAIAAABIAAAAIAAABIgBAAIAAACIACAAIgBAAIgBABIAAAGIABABIABABIAAAAIACABIADAAIAAAAIABABIAAAAIAFABIACAAIgCABIAAABIACABIACABIACABQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIABAAIABABIACABIABAAIAAABIgIgCQg8gPgFgDQgLgHgrgdIgxgiQAHgKAYgDQAHgCAogDQA1gDAqAAQAAABAAAAQAAABAAAAQAAAAABAAQAAAAAAAAIADgCIAvAAIAFAAIAcAEIBUAKIABAAIABAAIABABQAMACAcAAQAiAAAngEIBGgIIAkAAIAAAZQgVAXgUAQIAAAAIgBABIgBABQgjAdgiAKQgzARiRAAQgOAAgigIgAiSgrQgtAGgRAAQAEAbBTAKQAtAGA7AAQAXAAAogEQAogEAbABQASgBAigKQAxgRAJgBIAAgCIACgBQgRAAglABIgjACQhaAAgngJQgmgJg3AAQgRAAgrAFgAhPA3IABAAIACAAIgDAAgAhJA2IAAgBIABAAIAAABgAhdA0IAAgBIgBgBIAAAAIACAAIAAABIABAAIAAABIABAAIACABIgFgBgAhVA0IAAAAIABAAIAAAAIAAABgAhlAyIgBgBIAAgBIAEAAIABAAIAAADIgEgBgAhiAuIABAAIAAABgAhqAtIABAAIAAAAg");
	this.shape_133.setTransform(319.3,-38.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#000000").ss(1,1,1).p("AA4AJQgXABgUAAQghAAgpgOQgQgGgQgIQgKgFgKgEQARAOAjAJQAKADAMABQAvAJAwAAgAh0gcQABAAACABQg0gUgwAAQgHAAgdAHIAAAIQANAKANAKQBAAtAzALQAmAICSAAAC3gHQAygPAXgWQgIgNgdAEQglADgUAAQgEAAgFAAQgZgBgaAAQgXAAhaAEQhMAEgngDQAAABAAABQAAAAgCAAQACAJAKAGIAAABQABAAACABQALAFAOABAj/gkQADACADACIAAABQAHAGAFAFQAKAJAGAGABMA1IAAABQADADAegFQAlgFAkgOQAZgJAVgZQAEgFAEgFIghAAQgKACgKACQggAGgpAEQgdAEgZACQA5AAA2gMQAIgCAIgCABMA1IAAgBQABAAABAAQgCAAAAABg");
	this.shape_134.setTransform(316.8,-38.7857);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AhmAXIgWgFQgQgGgQgIIgVgIIgCgBIACABQAMAEAOABQgOgBgMgEIgCgBIAAgBQgKgGgCgJIACAAIACAAQAtAEBgAAQAuAABagKIAJAAQAUAAAlgDQAdgEAHANQgWAVgyAPQggAGgpAFQgdAEgYACQgxAAgvgJgAAvAaQApgFAggGIgQAEQg2ANg4AAQAYgCAdgEgAixgEIAVAIQAQAIAQAGQgjgJgSgNgAB4APIAAAAg");
	this.shape_135.setTransform(323.125,-41.0957);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#FF0000").ss(4,1,1).p("AAoBRQAAgBAAgBQAAgDAoABQAwABARAAQATgFAegJQAKgGAKgIQAPgMAZgdQANgOAYgdAAoBRQACAAACAAQAAAAgDABQgBAAAAgBgAkvg4IAjAAQALgBAPgEQAEgBADgBQARgEAPAAQANAABNAFQBMAEAHAAIBvgCQAlAAAxgFQAxgFAbAAQAjAAAVAMAlChPQAZgFAyAAQA7AABfAKQBdAKAyAAQAZAAA3gPQA3gPAZAAQANAAArAIQAxAJAIAIQg0BnhDAiQg2Abh6AAQiIAAhDgbQhQghhDhjAkagYQARAbBvAmQByAnBQABACABRQAGgBALgCQADAAADAAQAUgBAXgNQAFgCAGgC");
	this.shape_136.setTransform(316.75,-37.9);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#FF0000").ss(4,1,1).p("AERhAQAEABANAAQAKAAAQgBIhFAoQgqAWgsANQgpATgdANQg5AYgeAAQgdAAg1gTQgFgBgDgBQgogQgXgJQgJgDgFgDQgmgOgwgaQgzgdgPgGQA+ASAuAAQArAABNgFQBMgFAvAAQALAABlgHQBZgHAiAAQAEAAADAAQgCAAgDACgAEPhCQAAABACABIgBAAQgBABAAgDg");
	this.shape_137.setTransform(318.225,-38.275);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#000000").ss(1,1,1).p("AhcgVQAUgFBDgLQBYgQANAAQAYAAAEABQADAAAeANQgEAKgTAKQgRAJgQADQgYAFgRACQgNAAgcAAQgyAAg9gNIAAgIIAAgEIAYgKAiPAEQAXgEAEAAQAYAAA7ASQA/ASAFABQgJAOgHACQgDABgTAAQghAAgzgLQgugLgSgKQABgCAAgCQABgDABgBQAEgHABgDgAhkgTQACgBAGgBAicAGQAIgBAFgB");
	this.shape_138.setTransform(318.325,-37.975);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#333333").s().p("AhOAwIgIgCQAzALAhAAQATAAADgBQAHgCAJgOQgFgBg/gSQg7gSgYAAIgbAEIgNACIANgCIgFAKQAAAAAAAAQgBABAAAAQAAABAAABQgBAAAAABIgOgGQgmgOgwgaQgzgdgPgGQA+ASAuAAQArAABNgFQBMgFAvAAIBwgHQBZgHAiAAQAAABAAAAQAAABAAAAQAAAAABAAQAAABAAgBIABAAQAEABANAAIAagBIhFAoQgqAWgsANIhGAgQg5AYgeAAQgdAAg1gTgAhbgKQA9ANAyAAQAcAAANgBQARgCAYgEQAQgDARgJQATgKAEgKQgegNgDAAQgEgBgYAAQgNAAhYAQQhDALgUAFIAAgEIAYgKIgYAKIAAAEIgIACIAIgCgAhbgSg");
	this.shape_139.setTransform(318.225,-38.275);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#000000").ss(1,1,1).p("AA1AMQgWADgTAAQgeAAgogTQAJADAMACQAsALAuAAQA3AAA0gPQAIgCAHgDQgeAIgoAFQgbAFgZACgAg6gEQgPgHgQgKQgKgHgKgEQgxgbguAAQgHAAgcAKIAAAKIAAACQAHAHAFAGQAJALAGAHABJBEIAAgBQABAAAAAAQgBAAAAABgAhvgjQABABABABQAMAHANABACvgIQAxgSAVgcQgHgRgbAFQgkAFgUAAQgEAAgEgBQgZgBgYAAQgWAAhWAFQhJAEglgCQAAAAAAABQgBABgCAAQACALAKAIIAAAAQABABABACQASARAhALAjvgnQANANAMAMAj0gsQADACACADADbgBQADgGAEgGIggAAQgJACgKAD");
	this.shape_140.setTransform(314.575,-39.1318);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AhiAdIgVgGQgPgHgQgKQgJgGgKgEQAKAEAJAGQAQAKAPAHQghgLgRgQIgDgDIADACQALAGAOABQgOgBgLgGIgDgCIAAAAQgJgIgCgLIACgBIACAAQArAGBcAAQAsAABXgNIAIABQATAAAkgFQAbgFAHARQgUAbgxASQgeAIgoAGQgcAFgXACQguAAgugLgAAtAhQAogGAegIIgPAFQg0AQg2AAQAXgCAcgFgAisgHIAAAAg");
	this.shape_141.setTransform(320.625,-41.9318);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#FF0000").ss(4,1,1).p("AEMg/QADABAMAAQAKAAAQgBIhDAnQgpAWgrANQgoASgdANQg4AYgdAAQgdAAg0gSQgEgDgDgBQgngPgXgIQgIgDgGgDQglgOgvgaQgxgcgPgGQA8ASAtAAQAqAABLgFQBMgFAtAAQALAABjgHQBXgHAhAAQAEAAAEAAQgDAAgCACgAEJhBQAAABADABIgBAAQgCABAAgDg");
	this.shape_142.setTransform(318.3,-39.15);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#000000").ss(1,1,1).p("AhagUIAAgEIAXgKAiMAEQAXgEADAAQAYAAA6ARQA9ASAFABQgJAOgGACQgEABgSAAQggAAgygLQgugLgRgJQABgCAAgCQABgDABgCQAEgHABgCgAhagUQAUgFBBgLQBWgQANAAQAXAAAEABQAEABAdAMQgFAKgSAJQgQAJgQADQgYAFgQACQgNAAgcAAQgxAAg7gNgAhigTQACAAAGgBAiZAGQAHgBAGgB");
	this.shape_143.setTransform(318.425,-38.875);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#333333").s().p("AhMAwIgIgEQAyAMAhAAQASAAADgBQAGgCAJgOIhCgTQg6gRgXAAIgaADIgOACIAOgCIgGAKIgBAFIgPgGQglgOgvgZQgxgdgPgGQA8ASAuAAQAqAABLgFQBLgFAtAAIBugHQBXgGAhgBQAAABAAAAQAAABAAAAQABABAAAAQAAAAABgBIABAAQADACANgBIAagBIhEAnQgpAWgrANIhFAfQg4AYgdAAQgdAAgzgSgAhZgKQA8ANAwAAQAcAAANgBQAQgCAYgEQAQgDAQgJQATgKAEgKQgdgLgDgBQgFgCgXABQgMgBhXARIhVAPIAAgEIAYgJIgYAJIAAAEIgIACIAIgCg");
	this.shape_144.setTransform(318.3,-39.15);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#000000").ss(1,1,1).p("Ah0gcQABAAABABQAMAFAOABAg9gEQAKADAMABQAvAJAwAAQgXABgUAAQghAAgpgOQgQgGgQgIQgKgFgLgEQASAOAjAJgAC3gHQAygPAWgWQgHgNgdAEQglADgUAAQgEAAgFAAQgZgBgaAAQgXAAhaAEQhMAEgngDQAAABAAABQAAAAgCAAQACAJAKAGIAAABQABAAABABQgzgUgwAAQgHAAgdAHIAAAIIAAABQAHAGAFAFQAKAJAGAGABMA0QABAAABAAQgCAAAAABgABMA1IAAABQADADAegFQAlgFAkgOQAZgJAVgZQAEgFADgFIggAAQgKACgKACAj5ggQANAKANAKQBAAtAzALQAmAICSAAAj/gkQADACADACAA4AJQA5AAA2gMQAIgCAIgCQggAGgpAEQgdAEgZACg");
	this.shape_145.setTransform(315.6,-37.3857);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AhmAXIgWgFQgQgGgQgIIgVgIIAVAIQAQAIAQAGQgjgJgSgNIgCgBIAAgBQgKgGgCgJIACAAIACAAQAtAEBgAAQAuAABagKIAJAAQAUAAAlgDQAdgEAHANQgWAVgyAPQggAGgpAFQgdAEgYACQgxAAgvgJgAixgEQAMAEAOABQgOgBgMgEIgCgBIACABgAAvAaQApgFAggGIgQAEQg2ANg4AAQAYgCAdgEg");
	this.shape_146.setTransform(321.925,-39.6957);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#000000").ss(1,1,1).p("AC9gwQgGAChyAJQgRADgegBQgKgCgMAAQgrgDgDAAQgkAAgUAFQgJACgFADQgEACgCADQAFAFAFADIACABQAKAHAKAFQANAHANAFQgQgKgGgGQgRgOgNgIQgHgEgGgEQgFgBgDgCQgQgFgzAAQgDAAgDAAQgbgCgLAAQgVAAgBAPQAHAAALAEQAFACAFABQABgBABABQACACACADQAUAZAxAVQABABACAAQA1AXAyAAQAOAAAMgFQACgBACgCQAGgDAAgEQAAgDgYgOQgIgFgHgEQADABAEABQAcAJAkAAQBEAABOgSQBNgPApgXQgHgFgcgDQgXgDgXAAAjwgaQADAAADgBQgCADAAADAC9gwQABAAAAAAQgBAAAAAAgAC9gwQgBAAgBAAQABAAABAA");
	this.shape_147.setTransform(316.575,-39.5);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#333333").s().p("Ag6A0IAAAAgAhHA0QhKAAgugQIgDAAQgxgWgUgYQAAgEACgCIgGAAIgBAAIgLgCQgLgFgGAAQAAgOAVAAIAmACIAGAAIAEAAIBHAIIAOAIQgFACgCACIAKAIIACABIAVAMQANAIAMAEIAPAJQAZAPAAACQAAAEgHAEIgNAAgAgzAsQAAgCgZgPIgPgJIAHACQAcAJAmAAQBDAABOgRQBMgPApgXQgHgFgcgEQgXgCgXAAIgBAAIgBAAIABAAQgGAChyAJQgRACgdgBQAxgDA4gGICzgRIASAAIAAAOQgjAph9AaQhjAUhhACQAHgEAAgEg");
	this.shape_148.setTransform(319.25,-40.55);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#FF0000").ss(4,1,1).p("Aj9gyQAvAMB6AFQABAAAAAAQAAABAugIQAXgEAXgEQAFAAAmADQAQABAeAEQAWAAAvgGQAwgGAhAAIAQACQgVASgrATQgOAGgzARQgyAYgSAIQgbANgsAAQgjAAgvgNQgogKgfgNQgggOgcgUQgYgSgQgTQACABACABgAkDg0IABAAIAFACAkDg0QABAAABAAQAAAAgBAAQAAgBgBAAgAkHg1QACAAACAB");
	this.shape_149.setTransform(318.975,-40.7);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#000000").ss(1,1,1).p("Ag9gTQASACAdAJQAbAIAhAAQANAAAagHQAmgKAKgQQgTgFg3gCQgzgDgBAAQgRAAgVAGQgbAJgGAAIAAAEQAAACADADgAhwgCQAHAAAJgBQABAAABAAQCdAXAAALQAAAFgLAEQgJAEgGAAQgdAAg9gLQg5gKgWgHQACgIALgHQAEgBADgCgAiCAAQAHAAALgCAhFgUQAEAAAEABQACABAEABQAFACAKAD");
	this.shape_150.setTransform(318.275,-40.1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#333333").s().p("AhZApQgogKgfgNQgggOgcgUQgZgSgPgSIAEABQAvANB6AEIABAAQAAABAugIIAugIIArADIAuAFQAWAAAvgGQAwgGAhAAIAQACQgVATgrASIhBAXIhEAgQgbANgsAAQgjAAgvgNgAiBAHQgLAGgCAIQAWAHA5AKQA+ALAcAAQAGAAAJgEQALgEAAgEQAAgMidgYIgCAAIgQACIgSABIASgBIgHAEgAgpgfIghAJIAAADQAAADADACQASADAdAIQAbAHAhAAQANAAAagFQAmgKAKgQQgTgFg3gDIgzgCQgSAAgVAGgAhHgOIAGACIAPAFIgPgFIgGgCIgIgBIAIABg");
	this.shape_151.setTransform(319.2875,-40.625);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#000000").ss(1,1,1).p("AgHArQgLgBgggGQgDAAgEgBQgcgGAAgCIAAgBIAAgKQAJgBASgDQAQgEAKAAQAGAAAEAAQAKABAJABQALABALACQAdAFAAALQAAAFgVAFQgPADgMABAgDAKQAPAAARAAQASAAARgEQAWgFAAgGQAAgOgmgMQgigLgdAAQgNAAgUAMQgWAMgHANQAKAKAtADAgDArQgCAAgBAA");
	this.shape_152.setTransform(318.45,-39.725);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#000000").ss(1,1,1).p("AjQgSQARAVAsATQAAABACAAQAwAVAsAAQAMAAAKgFQACgBACgCQAFgDAAgDQAAgCgVgNQgHgEgHgFQAEACADABQAZAHAgAAQA8AABFgPQBEgNAjgUQgFgFgZgCQgUgEgVAAQAAAAgBAAACngqQgFAChlAIQgPACgagCQgJAAgLgBQglgCgDAAQggAAgSAEQgHACgFACQgGgDgGgDQgEgCgDgBQgOgEgtAAQgDAAgCAAQgZgDgKAAQgRABgBANQAGAAAJAEQAFABAFABQAAAAABAAQACACACADAhmgbQgDADgCACQAEAEAFADIABABQAJAGAJAFQAMAGAKADQgNgIgGgFQgOgMgMgIgAjUgXQACAAADAAQgBACAAADACngqQACAAgBgBACngqIAAgBQAAAAgBAAQABABAAAAg");
	this.shape_153.setTransform(318.95,-41.6);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("Ah0AWIgGgCQgOgJgGgFQgOgLgMgIQAFgDAIgCIAdACQAnAAAqgCQAbABAPgCQBjgIAFgCIACAAQAUAAAUADQAZADAGAEQgkAUhEAOQhFAPg7AAQghAAgZgIgAiRAJIgSgKIgBgBIgJgHIAFgEQAMAIAOALQAGAFAOAJQgLgEgMgHgAiogNIAAAAg");
	this.shape_154.setTransform(325.5,-42.95);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#FF0000").ss(4,1,1).p("Aj/gzIACABQAvAMB6AFQABAAAAAAQAAABAugIQAXgEAXgFQAFAAAmAEQAQABAeAEQAWAAAvgGQAwgGAhAAIAQABQgVATgrATQgOAGgzARQgyAYgSAIQgbAMgsAAQgjAAgvgMQgogKgfgOQgggNgcgUQgYgSgQgTQABABABAAgAkDg0IACAAIACABAkDg0QABAAABAAQAAAAAAAAQgBgBgBgBgAkHg2QACABACAB");
	this.shape_155.setTransform(317.175,-41.35);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#000000").ss(1,1,1).p("Ag9gTQASACAdAJQAbAIAhAAQANAAAagHQAmgKAKgQQgTgFg3gCQgzgDgBAAQgRAAgVAGQgbAIgGABIAAAEQAAACADADgAhvgCQAGAAAJgCQABAAABABQCdAXAAALQAAAFgLAEQgJAEgGAAQgdAAg9gLQg5gKgWgHQACgIALgHQAEgBAEgCgAhFgUQAEAAAEABQACABAEABQAFACAKADAiCAAQAHAAAMgC");
	this.shape_156.setTransform(316.475,-40.75);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#333333").s().p("AhaApQgngKgggNQgfgOgcgUQgZgSgPgSIACABIACAAQAvANB5AEIACAAQAAABAugIIAugIIArADIAuAFQAWAAAvgGQAvgGAiAAIAQACQgVATgrASIhBAXIhEAgQgcANgrAAQgjAAgwgNgAiBAHQgLAGgDAIQAXAHA5AKQA+ALAcAAQAGAAAJgEQALgEAAgEQAAgMidgYIgDAAIgOACIgTABIATgBIgIAEgAgpgfIghAJIAAADQAAADADACQASADAcAIQAcAHAhAAQANAAAagFQAmgKAKgQQgTgFg3gDIgzgCQgSAAgVAGgAhHgOIAGACIAPAFIgPgFIgGgCIgIgBIAIABg");
	this.shape_157.setTransform(317.5,-41.275);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#FF0000").ss(4,1,1).p("AkdggQAeAGA7AMQBAANAPAIQANAHAoAPQAEACAFACQAPAFANAEQAcAHAUAAIACAAAAZAxIAFAAQAsgBAOgOQAdgbAZgJQAUgJA0gFQBHgIAPgDQgVAAg5ADQgvADgcgCQgGAAg3gNQg2gNgLAAQgtAAgfASQggARhGAAQggAAgkgHQgtgJgPgCAkqgjQAFABAFABQABAAACAB");
	this.shape_158.setTransform(315.4,-40.1);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#000000").ss(1,1,1).p("AgDAKQAOAAASAAQARAAASgEQAVgFAAgGQAAgOglgMQgigLgeAAQgNAAgUAMQgWAMgGANQAJAKAuADQAJABAKABQALABAKACQAeAFAAALQAAAFgVAFQgPADgMABAgIArQgLgBgfgGQgEAAgDgBQgcgGAAgCIAAgBIAAgKQAJgBASgDQAPgEALAAQAGAAAEAAAgEArQgBAAgBAA");
	this.shape_159.setTransform(318.35,-39.425);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#333333").s().p("AAyAtQAVgEAAgFQAAgMgdgFIgXgCIAhAAQASAAARgEQAWgFgBgHQAAgOglgLQgigLgeAAQgMAAgVALQgVANgHAMQAJAKAtAEIgJAAQgLAAgPADIgbAFIAAAKIgJgEQgogOgMgIQgQgHg/gOIhagSQAPACAtAJQAlAHAgAAQBGAAAfgRQAggRAtgBQAKAAA2AOQA3AMAHAAQAcACAugDQA6gCAUAAIhWAKQg0AFgUAJQgYAKgeAbQgOANgrABIAagEg");
	this.shape_160.setTransform(316.05,-40.1);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AgEArIgCAAIgBAAQgMgBgfgGIgHgBIgcgJIAAgKIAbgEQAPgEALAAIAKAAIATACIgTgCQgugDgJgKQAHgNAVgMQAVgMANAAQAdAAAiALQAlAMAAAOQABAGgWAFQgRAEgSAAIggAAIAWADQAdAFAAALQAAAFgVAFIgaAEg");
	this.shape_161.setTransform(318.35,-39.425);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#FF0000").ss(4,1,1).p("Aj/gzIACABQAvANB6AEQABAAAAAAQAAABAugIQAXgEAXgEQAFAAAmADQAQABAeAEQAWAAAvgGQAwgGAhAAIAQACQgVATgrASQgOAGgzARQgyAYgSAIQgbANgsAAQgjAAgvgNQgogKgfgNQgggOgcgUQgYgSgQgSQAAgBAAAAgAkBg0QgBAAgBgBIAAABgAkDg0QABAAABABQABAAABAAAkHg1QACABACAA");
	this.shape_162.setTransform(318.725,-39.15);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#000000").ss(1,1,1).p("AA4AJQgXABgUAAQghAAgpgOQgQgGgQgIQgKgFgKgEQARAOAjAJQAKADAMABQAvAJAwAAgAC3gHQAygPAXgWQgIgNgdAEQglADgUAAQgEAAgFAAQgZgBgaAAQgXAAhaAEQhMAEgngDQAAABAAABQAAAAgCAAQACAJAKAGIAAABQABAAACABQg0gUgwAAQgHAAgdAHIAAAIQANAKANAKQBAAtAzALQAmAICSAAAh0gcQABAAACABQALAFAOABAj/gkQADACADACIAAABQAHAGAFAFQAKAJAGAGABMA1IAAABQADADAegFQAlgFAkgOQAZgJAVgZQAEgFAEgFIghAAQgKACgKACQggAGgpAEQgdAEgZACQA5AAA2gMQAIgCAIgCABMA1IAAgBQABAAABAAQgCAAAAABg");
	this.shape_163.setTransform(316.8,-39.2857);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AgGAgQAYgCAdgEQApgFAggGQggAGgpAFQgdAEgYACQgxAAgvgJIgWgFQgQgGgQgIIgVgIIgCgBIACABQAMAEAOABQgOgBgMgEIgCgBIAAgBQgKgGgCgJIACAAIACAAQAtAEBgAAQAuAABagKIAJAAQAUAAAlgDQAdgEAHANQgWAVgyAPIgQAEQg2ANg4AAIAAAAgAixgEIAVAIQAQAIAQAGQgjgJgSgNgAizgFIAAAAg");
	this.shape_164.setTransform(323.125,-41.5957);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#FF0000").ss(4,1,1).p("Aj+gyIABAAQAvANB6AEQABAAAAAAQAAABAugIQAXgEAXgEQAFAAAmADQAQABAeAEQAWAAAvgGQAwgGAhAAIAQACQgVATgrASQgOAGgzARQgyAYgSAIQgbANgsAAQgjAAgvgNQgogKgfgNQgggOgcgUQgYgSgQgSQAAgBAAAAgAkBgzQABAAACABAkHg1QACABACAAQABAAABABAkBg0QgBAAgBgBIAAABg");
	this.shape_165.setTransform(318.825,-40.9);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#000000").ss(1,1,1).p("Ag9gUQASADAdAJQAbAIAhAAQANAAAagHQAmgKAKgQQgTgFg3gDQgzgCgBAAQgRAAgVAGQgbAIgGABIAAAEQAAACADACQACACAEABQAFABAKAEAhvgCQAGAAAJgCQABAAABABQCdAWAAAMQAAAFgLAEQgJADgGAAQgdAAg9gKQg5gKgWgHQACgIALgHQAEgBAEgCgAiCAAQAHAAAMgCAhFgVQAEABAEAA");
	this.shape_166.setTransform(318.125,-40.3);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#000000").ss(1,1,1).p("AC8gqQgNAMgYAIQgWAIgaACQggADgUACQgcADgXAAQgbAAhQgPQg9gLgRgDQAFAOARATQAUAVAaAWQAdAWAcAOQAgAPAXAAQAgAAAegNQAYgKAdgWQAHgFATgTQASgSAFgGIAQgTQAJgNAEgLgAi5gjQArgWBAgRQAUgFASgFQAsgJAjAAQAbAAATAFQAGACAHACQAIAEAIAFQAYANAGADQAUAJAYAGQABAAABAAQgBABgBABQAAgBAAgBAi5gkQABgBAAAAIgBAAQAAAAAAABIAAABQAAABAAABQgDgBgBAAQAAAAACgBQABgBABAAg");
	this.shape_167.setTransform(318.5,-40.75);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#CC3333").s().p("Ag8BPQgdgNgdgXQgbgWgTgVQgRgTgEgOIgBgCQArgWBAgSIAmgJQAsgJAkAAQAaAAATAFIAMAEIARAJIAeAQQAUAJAYAGIgBACQgMALgYAJQgVAHgbADIg0AGQgcABgWAAQgcABhQgOIhNgPIBNAPQBQAOAcgBQAWAAAcgBIA0gGQAbgDAVgHQAYgJAMgLQgDALgJANIgQAUIgXAYQgTASgHAEQgdAXgYAKQgeANgfAAQgYAAgfgPg");
	this.shape_168.setTransform(318.6,-40.75);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#000000").ss(1,1,1).p("AC8gqQgNAMgYAIQgWAIgaACQggADgUACQgcADgXAAQgbAAhQgPQg9gLgRgDQAFAOARATQAUAVAaAWQAdAWAcAOQAgAPAXAAQAgAAAegNQAYgKAdgWQAHgFATgTQASgSAFgGIAQgTQAJgNAEgLgAi5gjQArgWBAgRQAUgFASgFQAsgJAjAAQAbAAATAFQAGACAHACQAIAEAIAFQAYANAGADQAUAJAYAGQABAAABAAQgBABgBABQAAgBAAgBAi5gjQAAABAAABQgDgBgBAAQAAAAACgBQABgBABAAgAi5gkQABgBAAAAIgBAAQAAAAAAABg");
	this.shape_169.setTransform(318.5,-40.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},16).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6,p:{x:317.95,y:-36.575}}]},2).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},2).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14,p:{x:316.525,y:-40.875}}]},5).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_25,p:{x:314.875,y:-37.725}},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22,p:{x:317.625,y:-38.875}}]},1).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]},2).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]},4).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38}]},2).to({state:[{t:this.shape_45,p:{x:316.475,y:-40.75}},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42}]},2).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46}]},2).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50}]},2).to({state:[{t:this.shape_55},{t:this.shape_54,p:{x:314.825,y:-42.225}}]},7).to({state:[{t:this.shape_57},{t:this.shape_56}]},3).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_14,p:{x:318.725,y:-40.575}}]},25).to({state:[{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61}]},1).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_6,p:{x:316.2,y:-39.825}}]},1).to({state:[{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69}]},1).to({state:[{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_6,p:{x:316.45,y:-38.025}}]},1).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76}]},2).to({state:[{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80}]},2).to({state:[{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_6,p:{x:316.7,y:-37.625}}]},1).to({state:[{t:this.shape_88},{t:this.shape_54,p:{x:317.675,y:-42.625}}]},2).to({state:[{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89}]},1).to({state:[{t:this.shape_97,p:{y:-38.475}},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94,p:{y:-38.95}},{t:this.shape_93,p:{y:-42.225}}]},2).to({state:[{t:this.shape_101},{t:this.shape_100,p:{y:-39.025}},{t:this.shape_99},{t:this.shape_98,p:{y:-39.025}}]},1).to({state:[{t:this.shape_105,p:{y:-38.975}},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102}]},5).to({state:[{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106}]},1).to({state:[{t:this.shape_111},{t:this.shape_97,p:{y:-38.975}},{t:this.shape_110},{t:this.shape_94,p:{y:-39.45}},{t:this.shape_93,p:{y:-42.725}}]},2).to({state:[{t:this.shape_112},{t:this.shape_54,p:{x:317.775,y:-42.475}}]},4).to({state:[{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113}]},1).to({state:[{t:this.shape_118},{t:this.shape_100,p:{y:-39.175}},{t:this.shape_117},{t:this.shape_98,p:{y:-39.175}}]},1).to({state:[{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119}]},5).to({state:[{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123}]},2).to({state:[{t:this.shape_128},{t:this.shape_127}]},3).to({state:[{t:this.shape_92},{t:this.shape_91},{t:this.shape_130},{t:this.shape_129}]},43).to({state:[{t:this.shape_97,p:{y:-38.475}},{t:this.shape_96},{t:this.shape_131},{t:this.shape_94,p:{y:-38.95}},{t:this.shape_93,p:{y:-42.225}}]},2).to({state:[{t:this.shape_101},{t:this.shape_100,p:{y:-39.025}},{t:this.shape_99},{t:this.shape_98,p:{y:-39.025}}]},1).to({state:[{t:this.shape_97,p:{y:-37.975}},{t:this.shape_133},{t:this.shape_94,p:{y:-38.45}},{t:this.shape_132},{t:this.shape_93,p:{y:-41.725}}]},1).to({state:[{t:this.shape_25,p:{x:316.075,y:-39.125}},{t:this.shape_135},{t:this.shape_134},{t:this.shape_22,p:{x:318.825,y:-40.275}}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_136}]},2).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6,p:{x:317.95,y:-36.575}}]},6).to({state:[{t:this.shape_139},{t:this.shape_12},{t:this.shape_138},{t:this.shape_137}]},2).to({state:[{t:this.shape_17},{t:this.shape_141},{t:this.shape_140},{t:this.shape_14,p:{x:316.525,y:-40.875}}]},5).to({state:[{t:this.shape_144},{t:this.shape_20},{t:this.shape_143},{t:this.shape_142}]},1).to({state:[{t:this.shape_25,p:{x:314.875,y:-37.725}},{t:this.shape_146},{t:this.shape_145},{t:this.shape_22,p:{x:317.625,y:-38.875}}]},1).to({state:[{t:this.shape_148},{t:this.shape_28},{t:this.shape_147},{t:this.shape_26}]},2).to({state:[{t:this.shape_151},{t:this.shape_32},{t:this.shape_150},{t:this.shape_149}]},4).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_152},{t:this.shape_34}]},1).to({state:[{t:this.shape_154},{t:this.shape_40},{t:this.shape_153},{t:this.shape_38}]},2).to({state:[{t:this.shape_45,p:{x:316.475,y:-40.75}},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155}]},2).to({state:[{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158}]},2).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_162}]},2).to({state:[{t:this.shape_164},{t:this.shape_25,p:{x:316.075,y:-39.625}},{t:this.shape_163},{t:this.shape_22,p:{x:318.825,y:-40.775}}]},2).to({state:[{t:this.shape_105,p:{y:-40.825}},{t:this.shape_45,p:{x:318.125,y:-40.3}},{t:this.shape_166},{t:this.shape_165}]},3).to({state:[{t:this.shape_168},{t:this.shape_167}]},6).to({state:[{t:this.shape_168},{t:this.shape_169}]},7).to({state:[]},1).wait(16));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-51.3,352.9,25.9);


// stage content:
(lib.FavPhraseFinal = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {Now:16,"It's":25,Shulk:29,Time:40,This:77,Is:81,The:85,"Monado's":88,Power:104,I:159,Can:164,Change:176,"The":188,Future:193};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.streamSoundSymbolsList[0] = [{id:"ShulkVoicesSuperSmashBrosUltimateEditwav",startFrame:0,endFrame:215,loop:1,offset:0}];
	// timeline functions:
	this.frame_0 = function() {
		this.clearAllSoundStreams();
		 
		var soundInstance = playSound("ShulkVoicesSuperSmashBrosUltimateEditwav",0);
		this.InsertIntoSoundStreamData(soundInstance,0,215,1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(215));

	// Mouth
	this.instance = new lib.N("synched",0);
	this.instance.setTransform(470.1,500.5,4.4264,5.8638,0,0,0,316.6,-37.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(215));

	// Face
	this.instance_1 = new lib._1200pxDr_Kawashima_3DS();
	this.instance_1.setTransform(145,-6,0.5478,0.5478);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(215));

	// Background
	this.instance_2 = new lib.CachedBmp_126();
	this.instance_2.setTransform(-34.5,-81.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(215));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(445.5,238.7,597,477.00000000000006);
// library properties:
lib.properties = {
	id: 'D668801C07FBB64A803A772FDBA7BB35',
	width: 960,
	height: 640,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_126.png", id:"CachedBmp_126"},
		{src:"images/FavPhraseFinal_atlas_1.png", id:"FavPhraseFinal_atlas_1"},
		{src:"sounds/ShulkVoicesSuperSmashBrosUltimateEditwav.mp3", id:"ShulkVoicesSuperSmashBrosUltimateEditwav"}
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
an.compositions['D668801C07FBB64A803A772FDBA7BB35'] = {
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