import { useState } from "react";
import "./Settings.css";

function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState("English");

  return (
    <div className="settings-page">
      <div className="settings-card">
        <h1>Settings</h1>

        <div className="setting-item">
          <span>🌙 Dark Mode</span>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
        </div>

        <div className="setting-item">
          <span>🔔 Notifications</span>
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
          />
        </div>

        <div className="setting-item">
          <span>🌐 Language</span>

          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option>English</option>
            <option>తెలుగు</option>
            <option>हिन्दी</option>
          </select>
        </div>

        <div className="setting-item">
          <button>Privacy Policy</button>
        </div>

        <div className="setting-item">
          <button>Terms & Conditions</button>
        </div>

        <div className="setting-item">
          <button>Contact Support</button>
        </div>
      </div>
    </div>
  );
}

export default Settings;