import { Component } from 'preact';
import MetronomiaDefaults from './defaults';

class Metronomia extends Component {
	constructor(props, state) {
		super(props, state);
		this.state = {
			bpm: MetronomiaDefaults.DefaultBPM,
			isPlaying: MetronomiaDefaults.DefaultPlayMode,
			audioBeat: new Audio(MetronomiaDefaults.AudioPath)
		};
	}

	render(props, { bpm }) {
		return (
			<div {...MetronomiaDefaults.WrapperMetadata}>
				<h1>{MetronomiaDefaults.UIText.headerText}</h1>
				<p>{MetronomiaDefaults.UIText.instructions}</p>
				<label for={MetronomiaDefaults.SliderMetadata.id}>{bpm + ' ' + MetronomiaDefaults.UIText.bpm}</label>
				<input
					{...MetronomiaDefaults.SliderMetadata}
					defaultValue={bpm}
					onInput={(event) => this.updateBPMValue(event.target)}
				/>
				<br />
				<input
					{...MetronomiaDefaults.StartButtonMetadata}
					value={this.getButtonText()}
					onClick={() => this.startStop()}
				/>
			</div>
		);
	}

	updateBPMValue({ value }) {
		if (this.state.isPlaying) {
			this.pauseAudio();
			this.playAudio();
		}

		this.setState({ bpm: value });
	}

	startStop() {
		this.state.isPlaying ? this.pauseAudio() : this.playAudio();
		this.setState({ isPlaying: !this.state.isPlaying });
	}

	pauseAudio() {
		clearInterval(this.interval);
	}

	playAudio() {
		const { audioBeat, bpm } = this.state;
		this.interval = setInterval(() => audioBeat.play(), (60000/bpm));
	}

	getButtonText() {
		return !this.state.isPlaying ? MetronomiaDefaults.UIText.start : MetronomiaDefaults.UIText.stop;
	}
}

export default Metronomia;