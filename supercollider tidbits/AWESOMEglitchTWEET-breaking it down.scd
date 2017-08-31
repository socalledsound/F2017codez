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




{SinOsc.ar(1,0,1)}.plot(1);



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
}.play


/
{
  var env = Env([0, 1, 1, 0], [0.01, 5.0,  3.0]);
	env=EnvGen.kr(env,doneAction:2);
	SinOsc.ar(440*SinOsc.kr(XLine.kr(1,2000,3)),0,1*env);
	//SinOsc.ar(XLine.kr(2000, 200), 0, 0.01*env);
}.play



{ SinOsc.ar(XLine.kr(2000, 200), 0, 0.5) }.play;



{SinOsc.ar(450,0,1)}.play
{SinOsc.ar(470,0,1)}.play