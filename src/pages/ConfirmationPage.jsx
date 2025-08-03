// FILE: src/pages/ConfirmationPage.jsx
export function ConfirmationPage() {
  return (
    <div className="container">
      <h2 style={{ fontSize: '1.8rem', color: 'green' }}>✅ Booking Confirmed!</h2>
      <p>Your spa session has been successfully booked.</p>
      <p>We'll notify you when the therapist is on the way.</p>
      <a href="/profile" className="button" style={{ marginTop: '20px' }}>Go to Profile</a>
    </div>
  );
}
