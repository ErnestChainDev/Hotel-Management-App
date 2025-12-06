import React, { useState } from 'react';

import { Navigation } from './components/Navigation';
import { RoomList } from './components/rooms/RoomList';
import { GuestList } from './components/guests/GuestList';
import { BookingList } from './components/bookings/BookingList';
import LandingPage from './components/LandingPage';

import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('/');

  return (
    <div className="App background-image">

      {/* Show LandingPage only when activeSection is "/" */}
      {activeSection === '/' && <LandingPage setActiveSection={setActiveSection} />}

      {/* Show navigation + pages if NOT landing page */}
      {activeSection !== '/' && (
        <>
          <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

          <main className="main-content">
            {activeSection === 'rooms' && <RoomList />}
            {activeSection === 'guests' && <GuestList />}
            {activeSection === 'bookings' && <BookingList />}
          </main>
        </>
      )}
    </div>
  );
}

export default App;
