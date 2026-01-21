
import { useState, useEffect } from 'react'

const CHANNELS = {
  '1': 'nSpwwcHVp80', // TV 9 bharatvarsh
  '2': 'rZtoABptJ6w', // CNBC Awaaz
  
}

function App() {
  const [activeChannel, setActiveChannel] = useState('1');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (CHANNELS[e.key]) {
        setActiveChannel(e.key);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const videoId = CHANNELS[activeChannel];

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', backgroundColor: 'black', position: 'relative' }}>
        {/* Helper text overlay */}
        <div style={{
          position: 'absolute',
          top: 20,
          left: 20,
          color: 'rgba(255, 255, 255, 0.5)',
          fontFamily: 'monospace',
          fontSize: '14px',
          textShadow: '1px 1px 2px black',
          pointerEvents: 'none',
          zIndex: 10
        }}>
          CH: {activeChannel} (Press 1-9 to switch)
        </div>

      <iframe
        key={videoId} 
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        style={{ display: 'block' }}
      ></iframe>
      
      {/* Old TV Scanline effect overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.1) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.03), rgba(0, 255, 0, 0.01), rgba(0, 0, 255, 0.03))',
        backgroundSize: '100% 4px, 6px 100%',
        pointerEvents: 'none',
        zIndex: 5
      }}></div>
    </div>
  )
}

export default App
