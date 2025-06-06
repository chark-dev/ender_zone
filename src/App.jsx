import { Synth } from './Synth';


function App() {
  return (
    <div className="flex flex-col h-screen bg-blue-900 text-white">
      <div className="flex items-center justify-center flex-1 bg-cover bg-center" style={{ backgroundImage: "url('/rachel.gif')" }}>
        {/* Player Window */}

        <Synth />
        {/* <motion.div 
        drag 
        dragTransition={{ power: 0, timeConstant: 0 }}>
        dragMomentum={false}
        dragSnapToOrigin={false}
        dragElastic={0} */}
          <div className="window w-[480px] max-w-full absolute">
              <div className="title-bar header-draggable">
                <div className="title-bar-text">Ender-Zone</div>
                <div className="title-bar-controls">
                  <button aria-label="Minimize"></button>
                  <button aria-label="Maximize"></button>
                  <button aria-label="Close"></button>
                </div>
              </div>

              <div className="window-body p-2">
                {/* Top menu */}
                <menu role="tablist" className="flex gap-4 mb-2 text-black">
                  <li><a href="#">About</a></li>
                  <li><a href="#">Play History</a></li>
                  <li><a href="#">Ratings</a></li>
                  <li><a href="#">Support Us</a></li>
                </menu>

                {/* Player content */}
                <div className="flex">
                  {/* Album art */}
                  <img src="/love.png" alt="Album Art" className="w-[100px] h-[100px] object-cover p-1" />

                  {/* Info and controls */}
                  <div className="flex-1 text-black p-4">
                    <b>Vortex Machine</b>
                    <div className="mb-2">Ocean</div>

                    {/* Fake waveform + time display */}
                    <div className="window-inset p-1 mb-2 text-center">
                      02:50 / 03:21
                    </div>

                    {/* Volume control */}
                    <div className="flex items-center gap-2 mb-2">
                      <input type="range" className="w-full" />
                      <span role="img" aria-label="volume">🔊</span>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-2">
                      <button className="button">Stop</button>
                      <button className="button">❤️</button>
                      <button className="button">👤</button>
                      <button className="button">⚙️</button>
                    </div>
                    
                  </div>
                  
                </div>
                

                {/* Footer status */}
                <div className="status-bar mt-3">
                  <p className="status-bar-field text-black">Listeners: 151</p>
                </div>
              </div>
          </div>
        {/* </motion.div> */}
      </div>

      {/* Footer taskbar */}
      <footer className="h-[3vh] taskbar w-full text-black px-2 py-1 flex items-center justify-between">
        <button className="button">Start</button>
        <div>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
      </footer>
    </div>
  );
}

export default App
