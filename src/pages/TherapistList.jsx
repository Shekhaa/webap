
// FILE: src/pages/TherapistList.jsx
export function TherapistList() {
  const therapists = [
    { name: 'Anjali Sharma', experience: '4 years', rating: '4.8', id: 1 },
    { name: 'Ravi Kumar', experience: '6 years', rating: '4.6', id: 2 },
    { name: 'Priya Mehta', experience: '3 years', rating: '4.9', id: 3 },
  ];

  return (
    <div className="container">
      <h2 style={{ fontSize: '1.8rem', margin: '20px 0' }}>Available Therapists</h2>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {therapists.map((t) => (
          <div key={t.id} className="card" style={{ flex: '1 1 300px' }}>
            <h3>{t.name}</h3>
            <p>Experience: {t.experience}</p>
            <p>Rating: ⭐ {t.rating}</p>
            <a href={`/therapists/${t.id}`} className="button" style={{ marginTop: '10px' }}>
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
