import { Outlet } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

// Layout for login / register: same header and footer, centered form area
export default function AuthLayout() {
  return (
    <>
      <Header />
      <main className="auth-wrap"><Outlet /></main>
      <Footer />
    </>
  );
}
