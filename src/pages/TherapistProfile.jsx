// FILE: src/pages/TherapistProfile.jsx
export function TherapistProfile() {
  return (
    <div className="container">
      <h2 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>Therapist: Anjali Sharma</h2>
      <p>Certified Spa & Wellness Expert with 4+ years experience.</p>
      <p>Specialties: Swedish, Aromatherapy, Stress relief</p>
      <p>Rating: ⭐ 4.8</p>
      <a href="/book" className="button" style={{ marginTop: '20px', display: 'inline-block' }}>
        Book This Therapist
      </a>
    </div>
  );
}