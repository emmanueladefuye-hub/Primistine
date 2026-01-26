import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import CalculatorIndex from './pages/calculators/CalculatorIndex';
import SolarLoad from './pages/calculators/SolarLoad';
import BudgetEstimatorPage from './pages/calculators/BudgetEstimator';
import SafetyCheckPage from './pages/calculators/SafetyCheck';
import ScrollToTop from './components/ScrollToTop';
import NotFound from './pages/NotFound';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="projects" element={<Projects />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          <Route path="contact-us" element={<Contact />} />

          {/* Calculators */}
          <Route path="calculators">
            <Route index element={<CalculatorIndex />} />
            <Route path="solar-load" element={<SolarLoad />} />
            <Route path="budget" element={<BudgetEstimatorPage />} />
            <Route path="safety" element={<SafetyCheckPage />} />
          </Route>

          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
