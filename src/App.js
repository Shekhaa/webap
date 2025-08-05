import React, { useState } from 'react';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailsPage from './pages/ServiceDetailsPage';
import SpaDetailsPage from './pages/SpaDetailsPage';
import BookingPage from './pages/BookingPage';
import {ProfilePage} from './pages/ProfilePage';
import { ConfirmationPage } from './pages/ConfirmationPage';

// Context for authentication
export const AuthContext = React.createContext();

function App() {
  const [user, setUser] = useState(null);
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedService, setSelectedService] = useState(null);
  const [selectedSpa, setSelectedSpa] = useState(null);

  const navigate = (page, data = null) => {
    setCurrentPage(page);
    if (page === 'service-details') setSelectedService(data);
    if (page === 'spa-details') setSelectedSpa(data);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, navigate }}>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
        <NavBar navigate={navigate} currentPage={currentPage} />
        <main className="pt-4">
          {currentPage === 'home' && <HomePage navigate={navigate} />}
          {currentPage === 'login' && <LoginPage navigate={navigate} />}
          {currentPage === 'register' && <RegisterPage navigate={navigate} />}
          {currentPage === 'services' && <ServicesPage navigate={navigate} />}
          {currentPage === 'service-details' && <ServiceDetailsPage service={selectedService} navigate={navigate} />}
          {currentPage === 'spa-details' && <SpaDetailsPage spa={selectedSpa} navigate={navigate} />}
          {currentPage === 'booking' && <BookingPage navigate={navigate} />}
          {currentPage === 'profile' && <ProfilePage navigate={navigate} />}
          {currentPage === 'confirmation' && <ConfirmationPage navigate={navigate} />}
        </main>
      </div>
    </AuthContext.Provider>
  );
}

export default App;