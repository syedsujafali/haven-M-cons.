import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './app/home/page';
import AboutPage from './app/about/page';
import ServicesPage from './app/services/page';
import PortfolioPage from './app/portfolio/page';
import ProjectDetailPage from './app/project-detail/page';
import ShowcasePage from './app/showcase/page';
import ContactPage from './app/contact/page';
import NotFoundPage from './app/not-found/page';
import { PageTransition } from './components/PageTransition';
import ScrollUpButton from './components/ScrollUpButton';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function Layout() {
  const location = useLocation();
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <ScrollToTop />
      <Header />
      <PageTransition>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/:id" element={<ProjectDetailPage />} />
          <Route path="/showcase" element={<ShowcasePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </PageTransition>
      <Footer />
      <ScrollUpButton />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
