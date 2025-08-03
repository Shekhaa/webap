import React from 'react';
import '../App.css';

export function HomePage() {
  return (
    <div className="container">
      <h1 style={{ fontSize: '2rem', color: '#2e3a59' }}>Welcome to SerenitySpace</h1>
      <p style={{ fontSize: '1.1rem' }}>Spa & Therapy Services Delivered to Your Home</p>

      <div style={{ marginTop: '30px' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Popular Services</h2>

        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <ServiceCard name="Aromatherapy" price="₹1200" duration="60 mins" />
          <ServiceCard name="Swedish Massage" price="₹1500" duration="75 mins" />
          <ServiceCard name="Deep Tissue" price="₹1800" duration="90 mins" />
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ name, price, duration }) {
  return (
    <div className="card" style={{ flex: '1 1 300px' }}>
      <h3>{name}</h3>
      <p>Price: {price}</p>
      <p>Duration: {duration}</p>
      <button className="button" style={{ marginTop: '10px' }}>Book Now</button>
    </div>
  );
}
