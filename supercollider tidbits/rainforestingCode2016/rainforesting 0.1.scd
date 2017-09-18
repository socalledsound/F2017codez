

Routine.run({
10.do{


	Synth(\guiPlayer2mono, [\fxBuf, rrand(0,40), \chan, rrand(0,1),\loop,1,\playLength,rrand(0.1,10.0),\fxVol, rrand(0.05,1.0)]);

	rrand(1.0,6.0).wait;
}

});





//
//
// SynthDef(\guiPlayer2mono, {arg fxBuf=0, rate=1, startPos=0,loop=0, chan=0, fadeIn=1,playLength=2, fadeOut=1, fxVol=1;
// 	var env= EnvGen.ar(Env.new([0,1,1,0],[fadeIn,playLength,fadeOut]),doneAction:2);
//
// 	Out.ar(
// 	chan, PlayBuf.ar(1,fxBuf,rate:rate,startPos:startPos,loop:loop)*env*fxVol)
// }).store;
//


