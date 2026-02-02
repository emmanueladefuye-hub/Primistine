import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy Load Pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/Blog'));
const PostDetails = lazy(() => import('./pages/PostDetails'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Calculators
const CalculatorIndex = lazy(() => import('./pages/calculators/CalculatorIndex'));
const SolarLoad = lazy(() => import('./pages/calculators/SolarLoad'));
const BudgetEstimatorPage = lazy(() => import('./pages/calculators/BudgetEstimator'));
const SafetyCheckPage = lazy(() => import('./pages/calculators/SafetyCheck'));

// Loading Fallback
const PageLoader = () => (
  <div className="min-h-screen bg-[#020C1B] flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-accent-gold/30 border-t-accent-gold rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="projects" element={<Projects />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:slug" element={<PostDetails />} />
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
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
