import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout.jsx';
import AuthLayout from '../layouts/AuthLayout.jsx';
import Home from '../pages/Home.jsx';
import Search from '../pages/Search.jsx';
import Details from '../pages/Details.jsx';
import Booking from '../pages/Booking.jsx';
import Confirmation from '../pages/Confirmation.jsx';
import Bookings from '../pages/Bookings.jsx';
import Favorites from '../pages/Favorites.jsx';
import Auth from '../pages/Auth.jsx';
import NotFound from '../pages/NotFound.jsx';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/resort/:id" element={<Details />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Auth mode="login" />} />
        <Route path="/register" element={<Auth mode="register" />} />
      </Route>
    </Routes>
  );
}
