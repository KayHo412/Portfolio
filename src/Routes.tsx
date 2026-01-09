import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";

// Lazy load route components for better performance
const CultureBlend = lazy(() => import('./pages/culture-blend'));
const SuperpowerKitchen = lazy(() => import('./pages/superpower-kitchen'));
const About = lazy(() => import('./pages/about'));
const Homepage = lazy(() => import('./pages/homepage'));

// Loading fallback component
const RouteLoadingFallback: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="text-center">
      <div className="animate-spin w-12 h-12 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4" />
      <p className="text-muted-foreground">Loading...</p>
    </div>
  </div>
);

const Routes: React.FC = () => {
  return (
    <BrowserRouter basename="/Portfolio/">
      <ErrorBoundary>
        <ScrollToTop />
        <Layout>
          <Suspense fallback={<RouteLoadingFallback />}>
            <RouterRoutes>
              <Route path="/" element={<Homepage />} />
              <Route path="/culture-blend" element={<CultureBlend />} />
              <Route path="/superpower-kitchen" element={<SuperpowerKitchen />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </RouterRoutes>
          </Suspense>
        </Layout>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
