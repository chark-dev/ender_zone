// StartMenu.jsx
import { useState } from "react";

function StartMenu({ isOpen, onClose }) {
  const [menuLevel, setMenuLevel] = useState('main');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  if (!isOpen) return null;

  const submitForm = async () => {
        try {
      const res = await fetch('http://127.0.0.1:5000/login/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      console.log(res);
      

      const data = await res.json();
      if (res.ok) {
        alert("✅ Login successful!");
        setMenuLevel('main'); // or redirect, etc.
      } else {
        alert(`❌ Login failed: ${data.message || "Unknown error"}`);
      }
    } catch (err) {
      console.error("Error logging in:", err);
      alert("❌ Server error");
    }

  }

  return (
    <div className="window absolute bottom-[3vh] left-0 z-50 w-[240px]">
      <div className="title-bar">
        <div className="title-bar-text">Ender Start Menu</div>
        <div className="title-bar-controls">
          <button aria-label="Close" onClick={onClose}></button>
        </div>
      </div>
      <div className="window-body">

        {menuLevel === 'main' && (
        <ul className="menu">
            <li><button onClick={() => setMenuLevel('music')}>🎵 Music Player</button></li>
            <li><button onClick={() => setMenuLevel('login')}>📁 Login</button></li>
            <li><button onClick={() => setMenuLevel('settings')}>⚙️ Settings</button></li>
            <li><button onClick={() => setMenuLevel('save')}>💾 Save</button></li>
        </ul>
        )}

        {menuLevel === 'login' && (
        <ul className="menu">
            <li>
            <input
                type="text"
                placeholder="Username"
                className="text-black w-full mb-2"
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
            </li>
            <li>
            <input
                type="password"
                placeholder="Password"
                className="text-black w-full mb-2"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            </li>
            <li>
            <button onClick={submitForm}>🔐 Login</button>
            </li>
            <li>
            <button onClick={() => setMenuLevel('main')}>⬅️ Back</button>
            </li>
        </ul>
        )}

      </div>
    </div>
  );
}

export default StartMenu;