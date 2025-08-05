import React, { useState, useContext } from 'react';
import { Star, Clock, ArrowLeft, Calendar, MapPin, Heart } from 'lucide-react';
import { AuthContext } from '../App';

export default function ServiceDetailsPage({ service, navigate }) {
  const { user } = useContext(AuthContext);
  const [isFavorite, setIsFavorite] = useState(false);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Service not found</h2>
          <button
            onClick={() => navigate('services')}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:shadow-lg transition-all"
          >
            Back to Services
          </button>
        </div>
      </div>
    );
  }

  const handleBookNow = () => {
    if (!user) {
      navigate('login');
      return;
    }
    navigate('booking', { service });
  };

  const serviceImages = [
    'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1596178060810-7d85573a9a29?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  ];

  const relatedServices = [
    { id: 101, name: 'Aromatherapy Massage', price: '₹1,400', duration: '75 mins', rating: 4.8 },
    { id: 102, name: 'Couples Massage', price: '₹3,000', duration: '90 mins', rating: 4.9 },
    { id: 103, name: 'Sports Massage', price: '₹1,900', duration: '60 mins', rating: 4.7 }
  ];

  const serviceFeatures = [
    'Professional certified therapists',
    'Premium organic oils and products',
    'Relaxing ambient music',
    'Private treatment rooms',
    'Post-treatment refreshments',
    'Flexible scheduling options'
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <button
        onClick={() => navigate('services')}
        className="flex items-center text-purple-600 hover:text-purple-700 mb-6 transition-colors"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to Services
      </button>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left Column - Images */}
        <div className="space-y-4">
          <div className="aspect-video rounded-2xl overflow-hidden">
            <img
              src={serviceImages[0]}
              alt={service.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {serviceImages.slice(1).map((image, index) => (
              <div key={index} className="aspect-video rounded-xl overflow-hidden">
                <img
                  src={image}
                  alt={`${service.name} ${index + 2}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Details */}
        <div className="space-y-6">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{service.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="text-lg font-semibold ml-1">{service.rating}</span>
                  <span className="text-gray-500 ml-2">(124 reviews)</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className={`p-3 rounded-full transition-all ${
                isFavorite 
                  ? 'bg-red-100 text-red-600' 
                  : 'bg-gray-100 text-gray-400 hover:bg-red-100 hover:text-red-600'
              }`}
            >
              <Heart className={`h-6 w-6 ${isFavorite ? 'fill-current' : ''}`} />
            </button>
          </div>

          <div className="flex items-center space-x-6 text-lg">
            <div className="flex items-center text-purple-600">
              <Clock className="h-5 w-5 mr-2" />
              <span>{service.duration}</span>
            </div>
            <div className="text-2xl font-bold text-purple-600">
              {service.price}
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">About This Service</h3>
            <p className="text-gray-700 leading-relaxed">
              Experience the ultimate relaxation with our {service.name.toLowerCase()}. Our skilled therapists use premium techniques and organic products to provide you with a rejuvenating experience that will leave you feeling refreshed and renewed. Perfect for stress relief, muscle tension, and overall wellness.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">What's Included</h3>
            <div className="grid grid-cols-1 gap-3">
              {serviceFeatures.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <button
              onClick={handleBookNow}
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg rounded-2xl hover:shadow-lg transition-all"
            >
              <Calendar className="h-5 w-5 inline mr-2" />
              Book Now
            </button>
            
            <div className="grid grid-cols-2 gap-4">
              <button className="py-3 border-2 border-purple-600 text-purple-600 font-semibold rounded-xl hover:bg-purple-50 transition-all">
                View Locations
              </button>
              <button className="py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all">
                Ask Question
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Customer Reviews</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((review) => (
            <div key={review} className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold">
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
              <p className="text-gray-600">
                Amazing experience! The therapist was very professional and the {service.name.toLowerCase()} was exactly what I needed. Highly recommend!
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Related Services */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">You Might Also Like</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedServices.map((relatedService) => (
            <div key={relatedService.id} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{relatedService.name}</h3>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-bold text-purple-600">{relatedService.price}</span>
                <span className="text-gray-500">{relatedService.duration}</span>
              </div>
              <div className="flex items-center mb-4">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="text-sm text-gray-600 ml-1">{relatedService.rating}</span>
              </div>
              <button 
                onClick={() => navigate('service-details', relatedService)}
                className="w-full py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}