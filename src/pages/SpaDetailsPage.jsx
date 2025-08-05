import React, { useState } from 'react';
import { Star, MapPin, Phone, Clock, ArrowLeft, Heart, Wifi, Car, Coffee, Dumbbell } from 'lucide-react';

export default function SpaDetailsPage({ spa, navigate }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  if (!spa) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Spa not found</h2>
          <button
            onClick={() => navigate('home')}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:shadow-lg transition-all"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const sampleSpa = {
    id: 1,
    name: 'Tranquil Spa & Wellness',
    rating: 4.8,
    reviews: 256,
    address: '123 Wellness Street, Spa District, Mumbai',
    phone: '+91 98765 43210',
    hours: '9:00 AM - 9:00 PM',
    description: 'Experience ultimate relaxation at our premium spa facility featuring world-class treatments, state-of-the-art amenities, and expert therapists.',
    amenities: [
      { icon: Wifi, name: 'Free WiFi' },
      { icon: Car, name: 'Valet Parking' },
      { icon: Coffee, name: 'Complimentary Refreshments' },
      { icon: Dumbbell, name: 'Fitness Center' }
    ],
    services: [
      { id: 1, name: 'Swedish Massage', price: '₹1,500', duration: '60 mins' },
      { id: 2, name: 'Deep Tissue Massage', price: '₹1,800', duration: '90 mins' },
      { id: 3, name: 'Classic Facial', price: '₹1,200', duration: '60 mins' },
      { id: 4, name: 'Aromatherapy', price: '₹1,200', duration: '75 mins' }
    ]
  };

  const currentSpa = spa || sampleSpa;

  const spaImages = [
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1596178060810-7d85573a9a29?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  ];

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'services', label: 'Services' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'amenities', label: 'Amenities' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <button
        onClick={() => navigate('home')}
        className="flex items-center text-purple-600 hover:text-purple-700 mb-6 transition-colors"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back
      </button>

      {/* Header */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
        <div className="relative h-64 md:h-80">
          <img
            src={spaImages[0]}
            alt={currentSpa.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-start justify-between">
              <div className="text-white">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{currentSpa.name}</h1>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 fill-current mr-1" />
                    <span className="font-semibold">{currentSpa.rating}</span>
                    <span className="ml-2">({currentSpa.reviews} reviews)</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className={`p-3 rounded-full transition-all ${
                  isFavorite 
                    ? 'bg-red-500 text-white' 
                    : 'bg-white/20 text-white hover:bg-red-500'
                }`}
              >
                <Heart className={`h-6 w-6 ${isFavorite ? 'fill-current' : ''}`} />
              </button>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="p-6">
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center text-gray-600">
              <MapPin className="h-5 w-5 mr-2 text-purple-600" />
              <span>{currentSpa.address}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Phone className="h-5 w-5 mr-2 text-purple-600" />
              <span>{currentSpa.phone}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Clock className="h-5 w-5 mr-2 text-purple-600" />
              <span>{currentSpa.hours}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {spaImages.slice(1).map((image, index) => (
          <div key={index} className="aspect-square rounded-xl overflow-hidden">
            <img
              src={image}
              alt={`${currentSpa.name} ${index + 2}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform"
            />
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="border-b border-gray-200">
          <div className="flex space-x-8 px-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-purple-600 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="p-6">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">About {currentSpa.name}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {currentSpa.description}
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Popular Services</h4>
                  <div className="space-y-2">
                    {currentSpa.services.slice(0, 3).map((service) => (
                      <div key={service.id} className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-700">{service.name}</span>
                        <span className="font-semibold text-purple-600">{service.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Quick Info</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Rating</span>
                      <span className="font-semibold">{currentSpa.rating}/5.0</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Reviews</span>
                      <span className="font-semibold">{currentSpa.reviews}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Services</span>
                      <span className="font-semibold">{currentSpa.services.length}+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Services Tab */}
          {activeTab === 'services' && (
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Available Services</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {currentSpa.services.map((service) => (
                  <div key={service.id} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">{service.name}</h4>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-xl font-bold text-purple-600">{service.price}</span>
                      <span className="text-gray-500">{service.duration}</span>
                    </div>
                    <button
                      onClick={() => navigate('service-details', service)}
                      className="w-full py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      Book Now
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Reviews Tab */}
          {activeTab === 'reviews' && (
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Customer Reviews</h3>
              <div className="space-y-6">
                {[1, 2, 3].map((review) => (
                  <div key={review} className="border-b border-gray-200 pb-6">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold">
                        {String.fromCharCode(64 + review)}
                      </div>
                      <div className="ml-4">
                        <h4 className="font-semibold text-gray-900">Customer {review}</h4>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700">
                      Excellent service and very relaxing atmosphere. The staff was professional and the facilities were clean and well-maintained. Highly recommend!
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Amenities Tab */}
          {activeTab === 'amenities' && (
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Amenities & Facilities</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {currentSpa.amenities.map((amenity, index) => {
                  const Icon = amenity.icon;
                  return (
                    <div key={index} className="text-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                      <Icon className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                      <p className="font-medium text-gray-900">{amenity.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Book Now Section */}
      <div className="mt-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center">
        <h3 className="text-2xl font-bold mb-4">Ready to Book Your Experience?</h3>
        <p className="mb-6 opacity-90">Choose from our wide range of services and enjoy a rejuvenating spa experience.</p>
        <button
          onClick={() => navigate('services')}
          className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
        >
          View All Services
        </button>
      </div>
    </div>
  );
}