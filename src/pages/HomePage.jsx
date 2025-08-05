import React from 'react';
import { Star, Home, Building } from 'lucide-react';
import { AuthContext } from '../App';

function HomePage({ navigate }) {
  const { user } = React.useContext(AuthContext);

  const featuredServices = [
    {
      id: 1,
      name: "Swedish Massage",
      description: "Gentle, relaxing full-body massage",
      price: "₹1,500",
      duration: "60 mins",
      image: "🌿",
      rating: 4.8,
      category: "massage"
    },
    {
      id: 2,
      name: "Aromatherapy",
      description: "Essential oils for mind and body wellness",
      price: "₹1,200",
      duration: "75 mins",
      image: "🌸",
      rating: 4.9,
      category: "therapy"
    },
    {
      id: 3,
      name: "Deep Tissue Massage",
      description: "Therapeutic massage for muscle tension",
      price: "₹1,800",
      duration: "90 mins",
      image: "💆‍♀️",
      rating: 4.7,
      category: "massage"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Wellness & Spa Services
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
            Delivered to Your Doorstep
          </span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Experience premium spa and therapy services in the comfort of your home or visit our partner spas. 
          Professional therapists, premium products, and personalized care.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => user ? navigate('services') : navigate('login')}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all"
          >
            Book Your Session
          </button>
          <button 
            onClick={() => navigate('services')}
            className="px-8 py-4 bg-white text-purple-600 border-2 border-purple-600 rounded-xl font-semibold hover:bg-purple-50 transition-all"
          >
            Explore Services
          </button>
        </div>
      </div>

      {/* Service Types */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
          <div className="flex items-center mb-4">
            <Home className="h-8 w-8 text-purple-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">At-Home Services</h3>
          </div>
          <p className="text-gray-600 mb-6">
            Our certified therapists come to your location with premium equipment and products. 
            Enjoy spa luxury without leaving your home.
          </p>
          <ul className="space-y-2 text-gray-600">
            <li>✓ Certified mobile therapists</li>
            <li>✓ Premium portable equipment</li>
            <li>✓ Flexible scheduling</li>
            <li>✓ Safe & hygienic practices</li>
          </ul>
        </div>

        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
          <div className="flex items-center mb-4">
            <Building className="h-8 w-8 text-pink-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">Spa Locations</h3>
          </div>
          <p className="text-gray-600 mb-6">
            Visit our partner spas for a complete wellness experience with state-of-the-art facilities 
            and comprehensive treatment options.
          </p>
          <ul className="space-y-2 text-gray-600">
            <li>✓ Premium spa facilities</li>
            <li>✓ Advanced equipment</li>
            <li>✓ Relaxing ambiance</li>
            <li>✓ Full spa experience</li>
          </ul>
        </div>
      </div>

      {/* Featured Services */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Featured Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredServices.map((service) => (
            <div key={service.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden group">
              <div className="p-6">
                <div className="text-4xl mb-4 text-center">{service.image}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-purple-600">{service.price}</span>
                  <span className="text-gray-500">{service.duration}</span>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">{service.rating}</span>
                  </div>
                </div>
                
                <button 
                  onClick={() => user ? navigate('service-details', service) : navigate('login')}
                  className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all group-hover:from-purple-700 group-hover:to-pink-700"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-pink-600 mb-2">50+</div>
            <div className="text-gray-600">Expert Therapists</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-indigo-600 mb-2">25+</div>
            <div className="text-gray-600">Service Types</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">4.8</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;