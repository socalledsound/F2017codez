
// tweets by Batuhan Bozkurt

{
	n=LFNoise0.ar(_);
	f=[60,61];
	tanh(BBandPass.ar(
		max(
		max(n.(4),l=n.(6)),
		SinOsc.ar(f*ceil(l*9).lag(0.1))*0.7),
	f,
	n.(1).abs/2)*700*l.lag(1))

}.play.scope

{ SinOsc.ar(300, 0, 0.2).max(0) }.scope(1);


{
	f=60;
		max(max(n.(4),l=n.(6)),SinOsc.ar(f*ceil(l*9).lag(0.1)))
}.play




n.(6)


{
	Splay.ar(
		Integrator.ar(
			LFNoise0.ar(
				5!100,
				k=Duty.ar(
					TExpRand.kr(0.01,6.0,Dust.kr(1)),
					0,
					Dseq([0.1,Drand([0.5,2.0],1)],inf)
				)
		).round(k/10)).sin.sqrt.tanh,

		0.3)}.play;

//#sc...



Pspawner({|r|f={|t|r.par(Pbindf(Pbind(\note,Pseq([-1,1,6,8,9,1,-1,8,6,1,9,8]+5,319)),\dur,t))};f.(1/6);r.wait(12);f.(0.1672)}).play//s.reich

play{Mix({|k|k=k+1/2;2/k*Mix({|i|i=i+1;Blip.ar(i*XLine.kr(rand(2e2,4e2),87+LFNoise2.kr(2)*k,15),2,1/(i/a=XLine.kr(0.3,1,9))/9)}!9)}!40)!2*a}


play{

	AllpassC.ar(SinOsc.ar(55).tanh,  //input signal
		0.4,  // maxdelaytime

		TExpRand.ar(0.002, 0.4,Impulse.ar(8)).round([2e-3,4e-3])  //delaytime
		//0.002,

		,10   //  decaytime

	)


};// #supercollider with bass please...





play{

	AllpassC.ar(SinOsc.ar(55).tanh, 0.4,0.1,10)

};









{
	SinOsc.ar(110).tanh
}.plot;


5!3



Routine.run({
	var x=Dseq([0.05,Drand([0.04,0.08],1)],inf).asStream;
	100.do{
	x.postln;
		0.1.wait;
	};
})







