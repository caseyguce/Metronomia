const MetronomiaDefaults = {
    AudioPath: '../assets/audio/beat.mp3',
    DefaultBPM: '130',
    DefaultPlayMode: false,
    WrapperMetadata: {
        class: 'wrapper'
    },
    SliderMetadata: {
        id: 'metronomeSlider',
        type: 'range',
        min: '40',
        max: '220',
        class: 'sliderStyle'
    },
    StartButtonMetadata: {
        type: 'button',
        class: 'startButtonStyle'
    },
    UIText: {
        headerText: 'Metronomia',
        instructions: 'To get started, drag the slider to your desired BPM and click Start.',
        bpm: 'BPM',
        start: 'Start',
        stop: 'Stop'
    }
};

export default MetronomiaDefaults;