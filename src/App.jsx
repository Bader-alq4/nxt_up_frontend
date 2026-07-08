import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navigate } from "react-router-dom";

import NotFound from "./pages/NotFound";

// Core Layout
import NavBar from './components/NavBar';
import Footer from './components/Footer';

// General Pages
import Home from './pages/Home';
import About from './pages/About';
import Development from './pages/Development';
import ClubGuidelines from './pages/ClubGuidelines';
import GrantsFunding from './pages/GrantsFunding';
import WinterProgramming from './pages/WinterProgramming';
import RunClub from './pages/RunClub';
import Tournaments from './pages/Tournaments';
import TryoutsClosed from './pages/TryoutsClosed';
import Sponsorship from './pages/Sponsorship';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';

// Club Teams Pages
import ClubTeams from './pages/ClubTeams/ClubTeams';
import SpringBoys from './pages/ClubTeams/Spring-Boys';
import SpringGirls from './pages/ClubTeams/Spring-Girls';
import SpringTryouts from './pages/ClubTeams/Spring-Tryouts';
import FallBoys from './pages/ClubTeams/Fall-Boys';
import FallGirls from './pages/ClubTeams/Fall-Girls';
import FallTryouts from './pages/ClubTeams/Fall-Tryouts';

// Auth Pages
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import TryoutRegister from './pages/TryoutRegister';
import AdminDashboard from './pages/AdminDashboard';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import CheckEmail from './pages/CheckEmail';
import EmailVerificationNotice from './pages/EmailVerificationNotice';
import EmailVerificationSuccess from './pages/EmailVerificationSuccess';
import PaymentSuccess from './pages/PaymentSuccess';
import PaymentCancelled from './pages/PaymentCancelled';

// Legal stuff
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

// Protected Route Wrapper
import ProtectedRoute from './components/ProtectedRoute';



function EmailVerificationNoticeWrapper() {
  const location = useLocation();
  const email = location.state?.email;

  return email ? (
    <EmailVerificationNotice email={email} />
  ) : (
    <p>Missing email. Please <a href="/register">register again</a>.</p>
  );
}

function AppWrapper() {
  const location = useLocation();
  const path = location.pathname;

  const shouldShowFooter =
    path.startsWith('/about') ||
    path.startsWith('/development') ||
    path.startsWith('/club-guidelines') ||
    path.startsWith('/grants-funding') ||
    path.startsWith('/ClubTeams') ||
    path.startsWith('/WinterProgramming') ||
    path.startsWith('/RunClub') ||
    path.startsWith('/Tournaments') ||
    path.startsWith('/sponsorship') ||
    path.startsWith('/testimonials') ||
    path.startsWith('/contact');

  return (
    <>
      <NavBar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/development" element={<Development />} />
          <Route path="/club-guidelines" element={<ClubGuidelines />} />
          <Route path="/grants-funding" element={<GrantsFunding />} />
          <Route path="/sponsorship" element={<Sponsorship />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ClubTeams" element={<ClubTeams />} />
          <Route path="/ClubTeams/Fall-Boys" element={<FallBoys />} />
          <Route path="/ClubTeams/Fall-Girls" element={<FallGirls />} />
          <Route path="/ClubTeams/Fall-Tryouts" element={<FallTryouts />} />
          <Route path="/ClubTeams/Spring-Boys" element={<SpringBoys />} />
          <Route path="/ClubTeams/Spring-Girls" element={<SpringGirls />} />
          <Route path="/ClubTeams/Spring-Tryouts" element={<SpringTryouts />} />
          <Route path="/WinterProgramming" element={<WinterProgramming />} />
          <Route path="/RunClub" element={<RunClub />} />
          <Route path="/Training" element={<Navigate to="/RunClub" replace />} />
          <Route path="/Tournaments" element={<Tournaments />} />
          <Route path="/TryoutsClosed" element={<TryoutsClosed />} />


          {/* Auth */}
          <Route path="/login" element={<Navigate to="/" replace />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/check-email" element={<CheckEmail />} />
          <Route path="/verify-notice" element={<EmailVerificationNoticeWrapper />} />
          <Route path="/email-confirmed" element={<EmailVerificationSuccess />} />

          {/* Legal */}
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />

          {/* Payment */}
          <Route path="/payment/success" element={<PaymentSuccess />} />
          <Route path="/payment/cancelled" element={<PaymentCancelled />} />

          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tryout"
            element={
              <ProtectedRoute>
                <TryoutRegister />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tryout-information"
            element={<FallTryouts />}
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute requiredRole="admin">
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>

      {shouldShowFooter && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}