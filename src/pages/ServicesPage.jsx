
// FILE: src/pages/ServicesPage.jsx
export function ServicesPage() {
  const services = [
    { title: 'Spa Services', description: 'Relaxing massages and skin care', icon: '🧖‍♀️' },
    { title: 'Therapy Sessions', description: 'Mental & physical wellness care', icon: '🧘‍♂️' },
    { title: 'Combo Packages', description: 'Save with bundle offers', icon: '🎁' },
  ];

  return (
    <div className="container">
      <h2 style={{ fontSize: '1.8rem', margin: '20px 0' }}>Our Services</h2>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {services.map((service, idx) => (
          <div key={idx} className="card" style={{ flex: '1 1 300px' }}>
            <div style={{ fontSize: '2rem' }}>{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href="/therapists" className="button" style={{ display: 'inline-block', marginTop: '10px' }}>
              Explore
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
