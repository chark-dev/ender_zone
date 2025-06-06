

export function Synth() {
    const handleClick = () => {
        console.log('Synth started');
        const actx = new AudioContext();
        if (!actx) throw 'Not Supported :(';
        const oscillator = actx.createOscillator();
        oscillator.type = 'sawtooth';
        oscillator.frequency.value = 440;

        const gainNode = actx.createGain();

        // Set volume lower before starting
        gainNode.gain.value = 0.05; // 5% volume


        oscillator.connect(gainNode);
        gainNode.connect(actx.destination)
        oscillator.start()
        oscillator.stop(actx.currentTime + 0.1);
    }


    return <div className="window w-[480px] h-[240px] max-w-full absolute">
                <button onClick={handleClick}>Play Synth</button>
            </div>
}


