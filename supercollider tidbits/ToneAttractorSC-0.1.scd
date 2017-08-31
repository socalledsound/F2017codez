var freq=440;
var freqVelocity=10;
var freqAcceleration=1;
var freqCeiling=500;
var freqFloor=400;
var freqChecker;
Routine.run({

400.do{|i|

		freqAcceleration=freqAcceleration+rrand(-0.3,0.3);
		freqVelocity=freqVelocity+freqAcceleration;


		 freq=freq+freqVelocity;


		Synth.new("Siney",[\freq,freq]);

			if (freq > freqCeiling, {freq=freqCeiling;freqVelocity=freqVelocity* -1;freqAcceleration=0});
		if (freq <freqFloor, {freq=freqFloor;freqVelocity=freqVelocity* -1});


		freqVelocity.postln;

	freq.postln;
	0.1.wait;
	};


});



/*freqChecker = {|freqIn|
	if (freqIn>freqCeiling) {freqAccele
		ration=freqAcceleration * -1;};
}*/


















/*

SynthDef("Siney",   {arg freq=440,vol=1,playLength=0.1;
 	var env = Env([0.0, 1.0, 1.0, 0.0], [0.1,playLength,0.1]);
 	var envgen = EnvGen.ar(env, doneAction: 2);
	var source = SinOsc.ar(freq,0,0.2);
Out.ar(0,Pan2.ar(vol*source*envgen,0,1));

 }).store;

*/
