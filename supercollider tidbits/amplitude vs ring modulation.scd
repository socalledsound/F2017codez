
Ring modulation

Multiply two UGens.

{ SinOsc.ar(440, 0, 0.571) * SinOsc.kr(880) }.scope

// use an lfo to modulate the amplitude of the modulator
(
	{
		SinOsc.ar(440, 0, 0.571)
		*
		(SinOsc.kr(880)					// wrap the modulator and the lfo in parenthese
		* 								// why ... ?
		SinOsc.kr([6.99, 8.01].reciprocal)
		)
	}.scope
)

////////////////////////////////////////////////////////////////////////////////////////////////////

Amplitude modulation

Multiply two UGens and restrict the value of the modulator to positive values (use the .abs message to calculate 'absolute' value) to create what Charles Dodge calls "classic" amplitude modulation.

// use an lfo to modulate the amplitude of the modulator
(
	{
		SinOsc.ar(440, 0, 0.571)
		*
		(SinOsc.kr(880).abs				// wrap the modulator and the lfo in parenthese
		* 								// why ... ?
		SinOsc.kr([6.99, 8.01].reciprocal)
		)
	}.scope
)

////////////////////////////////////////////////////////////////////////////////////////////////////

Compare "classic" amplitude modulation and ring modulation

// "classic"
{ SinOsc.ar(440, 0, 0.571) * SinOsc.kr(880).abs }.scope

// "ring"
// ... what's the difference?
{ SinOsc.ar(440, 0, 0.571) * SinOsc.kr(880) }.scope



{SinOsc.ar}.play