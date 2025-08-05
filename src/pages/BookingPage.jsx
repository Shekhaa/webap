import React, { useState, useContext } from 'react';
import { Calendar, Clock, MapPin, User, CreditCard, ArrowLeft } from 'lucide-react';
import { AuthContext } from '../App';

export default function BookingPage({ navigate }) {
  const { user } = useContext(AuthContext);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedSpa, setSelectedSpa] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const availableSpas = [
    { id: 1, name: 'Tranquil Spa & Wellness', address: 'Mumbai Central' },
    { id: 2, name: 'Serenity Spa Resort', address: 'Bandra West' },
    { id: 3, name: 'Zen Garden Spa', address: 'Juhu Beach' },
    { id: 4, name: 'Luxury Wellness Center', address: 'Powai' }
  ];

  const availableServices = [
    { id: 1, name: 'Swedish Massage', price: 1500, duration: '60 mins' },
    { id: 2, name: 'Deep Tissue Massage', price: 1800, duration: '90 mins' },
    { id: 3, name: 'Hot Stone Massage', price: 2000, duration: '75 mins' },
    { id: 4, name: 'Classic Facial', price: 1200, duration: '60 mins' },
    { id: 5, name: 'Anti-Aging Facial', price: 2500, duration: '90 mins' },
    { id: 6, name: 'Aromatherapy', price: 1200, duration: '75 mins' }
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
    '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'
  ];

  // Generate next 14 days
  const generateDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push({
        value: date.toISOString().split('T')[0],
        label: date.toLocaleDateString('en-US', { 
          weekday: 'short', 
          month: 'short', 
          day: 'numeric' 
        }),
        disabled: i === 0 // Disable today for booking
      });
    }
    return dates;
  };

  const availableDates = generateDates();

  const getSelectedServiceDetails = () => {
    return availableServices.find(service => service.id === parseInt(selectedService));
  };

  const calculateTotal = () => {
    const service = getSelectedServiceDetails();
    return service ? service.price : 0;
  };

  const handleBooking = () => {
    if (!selectedDate || !selectedTime || !selectedSpa || !selectedService) {
      alert('Please fill in all required fields');
      return;
    }

    setIsLoading(true);
    
    // Simulate booking process
    setTimeout(() => {
      const bookingData = {
        id: Date.now(),
        service: getSelectedServiceDetails(),
        spa: availableSpas.find(spa => spa.id === parseInt(selectedSpa)),
        date: selectedDate,
        time: selectedTime,
        total: calculateTotal(),
        specialRequests,
        user: user
      };
      
      setIsLoading(false);
      navigate('confirmation', bookingData);
    }, 2000);
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Please Login</h2>
          <p className="text-gray-600 mb-6">You need to be logged in to make a booking.</p>
          <button
            onClick={() => navigate('login')}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:shadow-lg transition-all"
          >
            Login Now
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <button
        onClick={() => navigate('services')}
        className="flex items-center text-purple-600 hover:text-purple-700 mb-6 transition-colors"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to Services
      </button>

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-white">
          <h1 className="text-3xl font-bold mb-2">Book Your Appointment</h1>
          <p className="opacity-90">Choose your preferred service, spa location, and time</p>
        </div>

        <div className="p-6 space-y-8">
          {/* Service Selection */}
          <div>
            <label className="block text-lg font-semibold text-gray-900 mb-4">
              <User className="inline h-5 w-5 mr-2" />
              Select Service
            </label>
            <div className="grid md:grid-cols-2 gap-4">
              {availableServices.map((service) => (
                <div
                  key={service.id}
                  onClick={() => setSelectedService(service.id.toString())}
                  className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${
                    selectedService === service.id.toString()
                      ? 'border-purple-600 bg-purple-50'
                      : 'border-gray-200 hover:border-purple-300'
                  }`}
                >
                  <h3 className="font-semibold text-gray-900">{service.name}</h3>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-purple-600 font-bold">₹{service.price}</span>
                    <span className="text-gray-500 text-sm">{service.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Spa Location Selection */}
          <div>
            <label className="block text-lg font-semibold text-gray-900 mb-4">
              <MapPin className="inline h-5 w-5 mr-2" />
              Select Spa Location
            </label>
            <div className="grid md:grid-cols-2 gap-4">
              {availableSpas.map((spa) => (
                <div
                  key={spa.id}
                  onClick={() => setSelectedSpa(spa.id.toString())}
                  className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${
                    selectedSpa === spa.id.toString()
                      ? 'border-purple-600 bg-purple-50'
                      : 'border-gray-200 hover:border-purple-300'
                  }`}
                >
                  <h3 className="font-semibold text-gray-900">{spa.name}</h3>
                  <p className="text-gray-600 text-sm mt-1">{spa.address}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Date Selection */}
          <div>
            <label className="block text-lg font-semibold text-gray-900 mb-4">
              <Calendar className="inline h-5 w-5 mr-2" />
              Select Date
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
              {availableDates.map((date) => (
                <button
                  key={date.value}
                  onClick={() => !date.disabled && setSelectedDate(date.value)}
                  disabled={date.disabled}
                  className={`p-3 text-sm rounded-lg border-2 transition-all ${
                    date.disabled
                      ? 'border-gray-200 text-gray-400 cursor-not-allowed'
                      : selectedDate === date.value
                      ? 'border-purple-600 bg-purple-50 text-purple-700'
                      : 'border-gray-200 hover:border-purple-300 text-gray-700'
                  }`}
                >
                  {date.label}
                </button>
              ))}
            </div>
          </div>

          {/* Time Selection */}
          <div>
            <label className="block text-lg font-semibold text-gray-900 mb-4">
              <Clock className="inline h-5 w-5 mr-2" />
              Select Time
            </label>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`p-3 text-sm rounded-lg border-2 transition-all ${
                    selectedTime === time
                      ? 'border-purple-600 bg-purple-50 text-purple-700'
                      : 'border-gray-200 hover:border-purple-300 text-gray-700'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* Special Requests */}
          <div>
            <label className="block text-lg font-semibold text-gray-900 mb-4">
              Special Requests (Optional)
            </label>
            <textarea
              value={specialRequests}
              onChange={(e) => setSpecialRequests(e.target.value)}
              placeholder="Any special requests or preferences..."
              className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-purple-600 focus:outline-none transition-colors"
              rows={4}
            />
          </div>

          {/* Booking Summary */}
          {selectedService && (
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Booking Summary</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Service:</span>
                  <span className="font-semibold">{getSelectedServiceDetails()?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-semibold">{getSelectedServiceDetails()?.duration}</span>
                </div>
                {selectedSpa && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Location:</span>
                    <span className="font-semibold">
                      {availableSpas.find(spa => spa.id === parseInt(selectedSpa))?.name}
                    </span>
                  </div>
                )}
                {selectedDate && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date:</span>
                    <span className="font-semibold">
                      {new Date(selectedDate).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                )}
                {selectedTime && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Time:</span>
                    <span className="font-semibold">{selectedTime}</span>
                  </div>
                )}
                <div className="border-t pt-2 mt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span className="text-gray-900">Total:</span>
                    <span className="text-purple-600">₹{calculateTotal()}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Book Now Button */}
          <div className="flex justify-center">
            <button
              onClick={handleBooking}
              disabled={!selectedDate || !selectedTime || !selectedSpa || !selectedService || isLoading}
              className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all flex items-center ${
                !selectedDate || !selectedTime || !selectedSpa || !selectedService || isLoading
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:scale-105'
              }`}
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                  Processing...
                </>
              ) : (
                <>
                  <CreditCard className="h-5 w-5 mr-3" />
                  Book Now - ₹{calculateTotal()}
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}