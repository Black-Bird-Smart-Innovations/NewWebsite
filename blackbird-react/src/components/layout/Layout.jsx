import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import MobileMenu from './MobileMenu';
import Footer from './Footer';
import AmbientBackground from './AmbientBackground';
import { useScrollEffects } from '../../hooks/useScrollEffects';

export default function Layout() {
  useScrollEffects();

  return (
    <>
      <AmbientBackground />
      <Navbar />
      <MobileMenu />
      <Outlet />
      <Footer />
    </>
  );
}
