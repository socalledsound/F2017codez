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
            Pen.matrix = scale * #[1, 0, 1, 1, 0, 0];
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






(
100.do{|i|
	sin(i/10).postln;
}
)


{SinOsc.ar(1,0,0.1)}.plot(3.0)