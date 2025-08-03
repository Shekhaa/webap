import React from 'react';
import '../App.css';

export function NavBar() {
  return (
    <nav style={{
      background: 'white',
      padding: '15px 30px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#4CAF50' }}>
        SerenitySpace
      </div>
      <div style={{ display: 'flex', gap: '20px' }}>
        <a href="/" style={{ textDecoration: 'none', color: '#333' }}>Home</a>
        <a href="/book" style={{ textDecoration: 'none', color: '#333' }}>Book</a>
        <a href="/profile" style={{ textDecoration: 'none', color: '#333' }}>Profile</a>
      </div>
    </nav>
  );
}
