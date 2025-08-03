
// FILE: src/pages/UserProfile.jsx
export function UserProfile() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-2">Your Profile</h2>
      <p>Name: Riya Kapoor</p>
      <p>Email: riya@mail.com</p>
      <h3 className="text-xl mt-4">Your Bookings</h3>
      <ul className="list-disc ml-6">
        <li>Swedish Massage - 10 Aug 2025, 2:00 PM</li>
        <li>Deep Tissue - 25 July 2025, 5:00 PM</li>
      </ul>
    </div>
  );
}

