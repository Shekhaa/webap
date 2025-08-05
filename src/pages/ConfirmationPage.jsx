export function ConfirmationPage({ navigate }) {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 text-center">
        <div className="mb-6">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Booking Confirmed!</h1>
          <p className="text-gray-600">Your spa session has been successfully booked.</p>
        </div>

        <div className="bg-purple-50 rounded-lg p-6 mb-8">
          <h3 className="font-semibold text-gray-900 mb-4">Booking Details</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Service:</span>
              <span>Swedish Massage</span>
            </div>
            <div className="flex justify-between">
              <span>Date & Time:</span>
              <span>Today, 2:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Therapist:</span>
              <span>Will be assigned shortly</span>
            </div>
            <div className="flex justify-between">
              <span>Total Amount:</span>
              <span className="font-semibold">₹1,500</span>
            </div>
          </div>
        </div>

        <p className="text-gray-600 mb-8">
          We'll notify you when the therapist is on the way. You can track the status in your profile.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            onClick={() => navigate('profile')}
            className="flex-1 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            View My Bookings
          </button>
          <button 
            onClick={() => navigate('services')}
            className="flex-1 py-3 bg-white text-purple-600 border-2 border-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition-all"
          >
            Book Another Service
          </button>
        </div>
      </div>
    </div>
  );
}