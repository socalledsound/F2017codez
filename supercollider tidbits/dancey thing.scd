(
{ | dur = 0.15, atk = 0.005, amp = 1 |
	SinOsc.ar(
		EnvGen.ar( Env(
			NamedControl.kr(\freq_l, [2960, 70, 90]),
			NamedControl.kr(\freq_d, [0.07, 0.2]),
			NamedControl.kr(\freq_c, [-13, -1]),
		) ),
		mul:amp * EnvGen.ar(
			Env.perc( atk, dur - atk, curve: NamedControl.kr(\amp_c, [-1, 6])),
			doneAction: 2
		);
	) ! 2;
}.asSynthDef.name_("kick").add;

{ | atk = 0.01, dur = 0.15, freq = 50, amp=0.8 |
	BPF.ar(LFSaw.ar(freq), freq, 2, mul: EnvGen.kr( Env.perc( atk, dur-atk, amp, 6 ), doneAction: 2 )) ! 2;
}.asSynthDef.name_("bass").add;

{ | dur = 0.15, freq = 50, amp = 0.8, index = 10 |
	PMOsc.ar(freq, freq + 5, index, mul: amp * EnvGen.kr( Env.triangle( dur ), doneAction: 2 )) ! 2;
}.asSynthDef.name_("bazz").add;
)


(
Ppar([
	Pbind(*[
		instrument: \kick,
		delta: 1,
		dur: Pfunc({ thisThread.clock.beatDur }) / 4,
		amp: Pseq([
			Pseq([1], 16),
			Pseq([0.8, 1], 8),
			Pseq([1], 16),
			Pseq([0.8, 0.8, 0.9, 1], 8)
		], inf) * 0.8,
		freq_l: Pstutter(Prand(2.pow((1..4)),inf), Pseq([
			`[2960,70,90],
			`[1260,60,110],
			`[4360,60,120]
		],inf))
	]),
	Pbind(*[
		instrument: \bass,
		delta: 1/4,
		dur: Pkey(\delta) * Pfunc({ thisThread.clock.beatDur }),
		freq: Pseq([\r, 50,60,70], inf),
		amp:0.6
	]),
	Pbind(*[
		instrument: \bazz,
		delta: 1/4,
		dur: Pkey(\delta) * Pfunc({ thisThread.clock.beatDur }),
		freq: Pseq([\r, 30,35,40], inf),
		amp:0.2
	])
]).play(TempoClock(60/60), quant:[1])
)

// kick from above?
(
Pbind(*[
	instrument: \kick,
	delta: Pseq(Array.geom(540, 1, 1.015).reciprocal.reverse),
	dur: Pkey(\delta) * Pfunc({ thisThread.clock.beatDur }),
	atk: Pkey(\dur) / 6,
        amp: 0.8
]).play;
)