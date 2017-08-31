(
SynthDef(\simple_saw, {|outbus, freq = 30, amp = 1, decay = 10|
  var sig, env;
  freq = ({ LFNoise2.kr(1) } ! 2).exprange(freq * 0.9, freq * 1.1);
  env = EnvGen.kr(Env.perc(0.001, decay), 1, amp, doneAction: 2);
  sig = RLPF.ar(Saw.ar(freq), freq * XLine.kr(30, 5), 0.5) * env;
  Out.ar(outbus, sig);
}).add;

SynthDef(\distort_filt, { |outbus, amp = 0.5, amt = 0.5, rate = 10, sig_thresh = 0.001, detect_onsets = 1|
  var sig, env, wet, env_on, env_tail, chain, trig, onsetenv, filtersig, filterenv;

  wet = amt;

  sig = In.ar(outbus, 2);
  env = Amplitude.ar(sig, 0.01, 0.2);

  // onset detection
  chain = FFT(LocalBuf(512), sig);
  trig = Onsets.kr(chain, 1, \rcomplex, 2, 0.5);
  trig = trig * detect_onsets.clip(0, 1);
  onsetenv = EnvGen.kr(Env.perc, trig);

  filterenv = { (LFNoise2.ar(rate).range(0, 1) * (1 - onsetenv)) + onsetenv };

  filtersig = ({ DFM1.ar(sig, filterenv.().linexp(0, 1, 20, 3000), 1, 5, 0, 1) } ! 5).sum * 0.2 * env;

  env_on = (env > sig_thresh).lag(0.1);
  env_tail = ((env - sig_thresh) * 13).clip(0, 1);

  filtersig = (DFM1.ar(filtersig, filterenv.().linexp(0, 1, 20, 1000), 1, 5) * env_tail) + (filtersig * 0.1);

  sig = XFade2.ar(sig, filtersig, wet.linlin(0, 1, -1, 1), amp);

  XOut.ar(outbus, 1, sig * env_on);
}, [0, 0.1, 0.1, 0.1, 0.1, 0]).add;
)

(
Pproto({
  ~dist = (type: \on, \amt: 0, instrument: \distort_filt, addAction: \addToTail).yield;
  ~distCtrl = [\set, ~dist[\id], ~dist[\msgFunc]];
  }, [
    Pbind(*[
      #[type, id, msgFunc], Pkey(\distCtrl),
      \args, #[rate, amp, amt],
      dur: 0.1,
      rate: Pwhite(1, 50),
      amt: Pbrown(0.2, 1, 0.1),
      amp: Pseq([0.5], inf)
    ]),
    PmonoArtic(*[\simple_saw,
      octave: 2,
      amp: 1,
      scale: Scale.minor,
      degree: Pbrown(4, 15, 3, inf).asInteger,
      dur: Prand([Pseq([0.1, 0.1]), Pseq([0.1, 0.2, 0.1]), 0.2, 0.4], inf) * Pseg(Pseq([1, 1, 20, 20]), Pseq([15, 0, 15]), \exp),
      legato: Pwhite(0.98, 1.005)
    ])
  ]
).play;
)