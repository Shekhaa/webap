// FILE: src/pages/BookingPage.jsx
export function BookingPage() {
  return (
    <div className="container">
      <h2 style={{ fontSize: '1.8rem' }}>Book a Session</h2>
      <form className="card" style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <label>
          Service:
          <select>
            <option>Aromatherapy</option>
            <option>Swedish Massage</option>
            <option>Physiotherapy</option>
          </select>
        </label>
        <label>
          Date:
          <input type="date" />
        </label>
        <label>
          Time:
          <input type="time" />
        </label>
        <label>
          Address:
          <input type="text" placeholder="Your address" />
        </label>
        <a href="/confirmation" className="button" style={{ width: 'fit-content' }}>
          Confirm Booking
        </a>
      </form>
    </div>
  );
}
