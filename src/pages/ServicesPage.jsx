import React from 'react';
import { Star } from 'lucide-react';

export default function ServicesPage({ navigate }) {
  const serviceCategories = [
    {
      id: 'massage',
      title: 'Massage Therapy',
      description: 'Relaxing and therapeutic massage services',
      icon: '💆‍♀️',
      services: [
        { id: 1, name: 'Swedish Massage', price: '₹1,500', duration: '60 mins', rating: 4.8 },
        { id: 2, name: 'Deep Tissue Massage', price: '₹1,800', duration: '90 mins', rating: 4.7 },
        { id: 3, name: 'Hot Stone Massage', price: '₹2,000', duration: '75 mins', rating: 4.9 },
        { id: 4, name: 'Thai Massage', price: '₹1,600', duration: '60 mins', rating: 4.6 },
        { id: 5, name: 'Prenatal Massage', price: '₹1,700', duration: '60 mins', rating: 4.8 }
      ]
    },
    {
      id: 'facial',
      title: 'Facial Treatments',
      description: 'Skin care and beauty treatments',
      icon: '✨',
      services: [
        { id: 6, name: 'Classic Facial', price: '₹1,200', duration: '60 mins', rating: 4.7 },
        { id: 7, name: 'Anti-Aging Facial', price: '₹2,500', duration: '90 mins', rating: 4.9 },
        { id: 8, name: 'Hydrating Facial', price: '₹1,800', duration: '75 mins', rating: 4.8 },
        { id: 9, name: 'Acne Treatment', price: '₹2,000', duration: '60 mins', rating: 4.6 }
      ]
    },
    {
      id: 'therapy',
      title: 'Wellness Therapy',
      description: 'Holistic wellness and therapy sessions',
      icon: '🧘‍♀️',
      services: [
        { id: 10, name: 'Aromatherapy', price: '₹1,200', duration: '75 mins', rating: 4.9 },
        { id: 11, name: 'Reflexology', price: '₹1,000', duration: '45 mins', rating: 4.7 },
        { id: 12, name: 'Reiki Healing', price: '₹1,500', duration: '60 mins', rating: 4.8 },
        { id: 13, name: 'Crystal Therapy', price: '₹1,800', duration: '90 mins', rating: 4.6 }
      ]
    },
    {
      id: 'body',
      title: 'Body Treatments',
      description: 'Full body wellness and beauty treatments',
      icon: '🌿',
      services: [
        { id: 14, name: 'Body Scrub', price: '₹1,500', duration: '60 mins', rating: 4.8 },
        { id: 15, name: 'Body Wrap', price: '₹2,200', duration: '90 mins', rating: 4.7 },
        { id: 16, name: 'Detox Treatment', price: '₹2,500', duration: '120 mins', rating: 4.9 }
      ]
    }
  ];

  const handleServiceClick = (service) => {
    if (navigate) {
      navigate('service-details', service);
    } else {
      console.log('Selected service:', service);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover our comprehensive range of spa and wellness services, designed to rejuvenate your body and mind.
        </p>
      </div>

      <div className="space-y-12">
        {serviceCategories.map((category) => (
          <div key={category.id} className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <span className="text-4xl mr-4">{category.icon}</span>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
                <p className="text-gray-600">{category.description}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.services.map((service) => (
                <div key={service.id} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h3>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xl font-bold text-purple-600">{service.price}</span>
                    <span className="text-gray-500">{service.duration}</span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{service.rating}</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleServiceClick(service)}
                    className="w-full py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}