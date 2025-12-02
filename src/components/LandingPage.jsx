import './LandingPage.css';

export default function LandingPage({ setActiveSection }) {
  return (
    <div className="landing-container">

      {/* Background Video */}
      <video
        className="landing-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/src/assets/video/hotel.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="overlay"></div>

      <div className="landing-content">
        <h1 className="title">Welcome to Elite Hotel Management</h1>
        <p className="subtitle">
          Manage rooms, guests, and bookings effortlessly.
        </p>

        <button
          className="cta-button"
          onClick={() => setActiveSection('rooms')}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
