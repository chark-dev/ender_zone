export default function App() {
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gradient-to-b from-[#1a1a1a] to-[#2e2e2e] text-white bg-no-repeat bg-cover" style={{ backgroundImage: "url('/rachel.gif')" }}>
        <div className="text-center border-white-50 p-4 border border-white rounded-md w-full max-w-md mx-auto mt-10">
          <h1 className="text-4xl font-light mb-4">Plaza</h1>
          <p className="text-sm text-gray-300">Now Playing: Ambient Dreams - DJ Calm</p>
          <audio controls autoPlay className="mt-6 text-center p-4 rounded-md w-full max-w-md mx-auto">
            <source src="your-stream-url.mp3" type="audio/mpeg" />
          </audio>
        </div>
      </div>
      <div>
        footer
      </div>
    </>
  );
}

