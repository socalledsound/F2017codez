
play{Splay.ar(Integrator.ar(LFNoise0.ar(5!3,k=Duty.ar(6.4,0,Dseq([0.05,Drand([0.04,0.08],1)],inf))).round(k/10)).sin.sqrt.tanh,0.3)}


{n=LFNoise0.ar(_);f=[60,61];tanh(BBandPass.ar(max(max(n.(4),l=n.(6)),SinOsc.ar(f*ceil(l*9).lag(0.1))*0.7),f,n.(1).abs/2)*700*l.lag(1))}.play



play{AllpassC.ar(SinOsc.ar(55).tanh,0.4,TExpRand.ar(2e-4, 0.4,Impulse.ar(8)).round([2e-3,4e-3]),2)};// #supercollider with bass please...


{SinOsc.ar(440)}.scope;

{SinOsc.ar(440)}.plot;




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



play{

	AllpassC.ar(SinOsc.ar(55).tanh,  //input signal
		0.4,  // maxdelaytime

		TExpRand.ar(0.002, 0.4,Impulse.ar(8)).round([2e-3,4e-3])  //delaytime
		//0.002,

		,10   //  decaytime

	)


};// #supercollider with bass please...





{SinOsc.ar(1,0,0.1)}.plot(1.0);

{SinOsc.ar(440,0,0.1)}.plot(0.01);
{SinOsc.ar(440).tanh}.scope
{Blip.ar(440)}.scope


{
  var env = Env([0, 1, 1, 0], [0.01, 0.5,  0.5]);
	env=EnvGen.kr(env,doneAction:2);
	SinOsc.ar(460,0,1*env);
	//SinOsc.ar(XLine.kr(2000, 200), 0, 0.01*env);
}.play




//amplitude modulation - am synthesis
{
  var env = Env([0, 1, 1, 0], [0.01, 5.0,  3.0]);
	env=EnvGen.kr(env,doneAction:2);
	SinOsc.ar(460,0,1*SinOsc.kr(XLine.kr(1,1000,5)));
	//SinOsc.ar(XLine.kr(2000, 200), 0, 0.01*env);
}.scope


{
  var env = Env([0, 1, 1, 0], [0.01, 5.0,  3.0]);
	env=EnvGen.kr(env,doneAction:2);
	SinOsc.ar(460,0,1*SinOsc.kr(10));
	//SinOsc.ar(XLine.kr(2000, 200), 0, 0.01*env);
}.scope




{
  var env = Env([0, 1, 1, 0], [0.01, 5.0,  3.0]);
	env=EnvGen.kr(env,doneAction:2);
	SinOsc.ar(440*SinOsc.kr(XLine.kr(1,2000,3)),0,1*env);
	//SinOsc.ar(XLine.kr(2000, 200), 0, 0.01*env);
}.play



/*{ SinOsc.ar(XLine.kr(2000, 200), 0, 0.5) }.play;*/




(
100.do{|i|
	sin(i/10).postln;
}
)







//swinging example

(
var w, much = 0.02, string, synth;

w = Window.new("gui", Rect(100, 100, 1000, 1000)).front;
w.view.background_(Color.new255(153, 255, 102).vary);

string = "swing ".dup(20).join.scramble;
/*string.postln;*/


w.drawFunc = Routine {
    var i = 0;
    var size = 40;
    var func = { |i, j| sin(i * 0.1 + (j * 0.0023) + 0.1pi) * much + 1 };
    var scale;
    var font = Font("Helvetica", 40).boldVariant;
    loop {
        i = i + 1;
        Pen.font = font;
        string.do { |char, j|

            scale = func.value(i, j).dup(2);

            Pen.fillColor = Color.new255(0, 120, 120).vary;
            Pen.matrix = scale * #[1, 0, 0, 1, 0, 0];
            Pen.stringAtPoint(char.asString,
                ((size * (j % 9)) - 10) @ (size * (j div: 9))
            );
        };
        0.yield // stop here, return something unimportant
    }
};

{ while { w.isClosed.not } { w.refresh; 0.04.wait; } }.fork(AppClock);

w.front;

)











play{
	p=LFPulse;
	cos(p.ar(p.kr(2)+p.kr(3)*[50,51]).lag(2e-3)+mean
	({|n|
		(p.ar(n*1e2+50*p.kr(4-n/[2,7,4]).sum+3e2)*p.kr(n+1*2,0,0.8))

		}!3)
		)
		};

Lag

play{
	p=SinOsc;
	cos(p.ar(p.kr(2)+p.kr(3)*[50,51]).lag(2e-3)+mean
	({|n|
		(p.ar(n*1e2+50*p.kr(4-n/[2,7,4]).sum+3e2)*p.kr(n+1*2,0,0.8))

		}!3)
		)
		};



play{
	p=WhiteNoise;
	cos(p.ar(p.kr(2)+p.kr(3)*[50,51]).lag(2e-3)+mean
	({|n|
		(p.ar(n*1e2+50*p.kr(4-n/[2,7,4]).sum+3e2)*p.kr(n+1*2,0,0.8))

		}!3)
		)
		};



		play{
			p=LFPulse;
		cos(p.ar(p.kr(2)+p.kr(3)*[50,51]))
		};


		play{
			p=LFPulse;
	p.ar(p.kr(2)+p.kr(3)*[50,51])
		};

{LFPu




	{ LFPulse.ar(Line.kr(100, 800, 0.1)) }.plot(0.1);

	{ LFPulse.ar(Line.kr(100, 800, 6)) }.play;


	{SinOsc.ar(440,0,Line.kr(0.01, 1, 6))}.play


	SinOsc.ar(Line.kr(100,800,0.1),0,1)}.plot(0.1);





{SinOsc.ar(470,0,1)}.play